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
      console.warn('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY from environment variable, falling back to file');
    }
  }
  
  // Fall back to reading from file
  const serviceAccountPath = path.join(process.cwd(), '../pumpkins-ca2b8-firebase-adminsdk-fbsvc-5fffab92e9.json');
  const serviceAccountKey = fs.readFileSync(serviceAccountPath, 'utf8');
  return JSON.parse(serviceAccountKey);
};

if (!getApps().length) {
  const serviceAccount = getServiceAccount();
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  
  // Ensure the storage bucket has the full URL format
  const fullStorageBucket = storageBucket?.includes('gs://')
    ? storageBucket
    : `gs://${storageBucket}`;

  initializeApp({
    credential: credential.cert(serviceAccount),
    storageBucket: fullStorageBucket,
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

    const bucket = getStorage().bucket();
    const buffer = Buffer.from(await file.arrayBuffer());

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
    console.error('Error uploading to Firebase Storage:', error);
    return NextResponse.json({ error: 'Failed to upload file.' }, { status: 500 });
  }
} 