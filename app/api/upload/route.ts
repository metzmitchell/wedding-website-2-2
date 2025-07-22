import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, getApp, ServiceAccount } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { credential } from 'firebase-admin';
import * as path from 'path';
import * as fs from 'fs';

// Initialize Firebase Admin SDK
const getServiceAccount = (): ServiceAccount => {
  // Try to read from environment variable first
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
      return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    } catch (error) {
      console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY:', error);
      throw new Error('Invalid FIREBASE_SERVICE_ACCOUNT_KEY format');
    }
  }
  
  // In production (Vercel), we should always use environment variables
  if (process.env.NODE_ENV === 'production') {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY environment variable is required in production');
  }
  
  // Fall back to reading from file in development only
  try {
    const serviceAccountPath = path.join(process.cwd(), 'pumpkins-ca2b8-firebase-adminsdk-fbsvc-5fffab92e9.json');
    const serviceAccountKey = fs.readFileSync(serviceAccountPath, 'utf8');
    return JSON.parse(serviceAccountKey);
  } catch (error) {
    console.error('Failed to read service account file:', error);
    throw new Error('Firebase service account configuration not found');
  }
};

if (!getApps().length) {
  const serviceAccount = getServiceAccount();
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;

  initializeApp({
    credential: credential.cert(serviceAccount),
    storageBucket: storageBucket,
  });
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const filePath = formData.get('filePath') as string;

    if (!file || !filePath) {
      return NextResponse.json({ error: 'File or filePath is missing.' }, { status: 400 });
    }

    // Log file details for debugging
    console.log('Received file:', {
      name: file.name,
      type: file.type,
      size: file.size,
      path: filePath
    });

    const bucket = getStorage().bucket();
    const buffer = Buffer.from(await file.arrayBuffer());

    console.log('Uploading to Firebase Storage:', {
      bucket: bucket.name,
      filePath: filePath,
      contentType: file.type
    });

    const fileRef = bucket.file(filePath);
    await fileRef.save(buffer, {
      metadata: {
        contentType: file.type,
      },
    });

    const [url] = await fileRef.getSignedUrl({
      action: 'read',
      expires: '03-09-2491', // A long time in the future
    });

    return NextResponse.json({ mediaUrl: url });
  } catch (error) {
    console.error('Error uploading to Firebase Storage:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      details: error
    });
    
    // Return more detailed error information
    return NextResponse.json({ 
      error: 'Failed to upload file.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  } 
} 