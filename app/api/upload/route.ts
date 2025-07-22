import { NextRequest, NextResponse } from 'next/server';
import * as path from 'path';
import * as fs from 'fs';

// Dynamic imports to prevent build-time loading
let firebaseAdmin: any = null;
let getApps: any = null;
let initializeApp: any = null;
let getStorage: any = null;
let credential: any = null;

const loadFirebaseAdmin = async () => {
  if (!firebaseAdmin) {
    firebaseAdmin = await import('firebase-admin');
    getApps = firebaseAdmin.getApps;
    initializeApp = firebaseAdmin.initializeApp;
    getStorage = firebaseAdmin.getStorage;
    credential = firebaseAdmin.credential;
  }
};

// Initialize Firebase Admin SDK
const getServiceAccount = (): any => {
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

// Only initialize Firebase Admin SDK when the API route is actually called
let firebaseInitialized = false;

const initializeFirebaseAdmin = async () => {
  if (!firebaseInitialized) {
    try {
      await loadFirebaseAdmin();
      
      if (!getApps().length) {
        const serviceAccount = getServiceAccount();
        const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;

        if (!storageBucket) {
          throw new Error('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET environment variable is required');
        }

        initializeApp({
          credential: credential.cert(serviceAccount),
          storageBucket: storageBucket,
        });
      }
      firebaseInitialized = true;
    } catch (error) {
      console.error('Failed to initialize Firebase Admin SDK:', error);
      throw error;
    }
  }
};

export async function POST(req: NextRequest) {
  // Add CORS headers
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  try {
    // Initialize Firebase Admin SDK only when the route is called
    await initializeFirebaseAdmin();
    
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
    
    // Upload with metadata including CORS-friendly content type
    await fileRef.save(buffer, {
      metadata: {
        contentType: file.type,
        cacheControl: 'public, max-age=31536000', // Cache for 1 year
      },
    });

    // Make the file publicly readable
    await fileRef.makePublic();

    // Get the public URL instead of signed URL to avoid CORS issues
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`;

    console.log('Upload successful, public URL:', publicUrl);

    return NextResponse.json({ 
      mediaUrl: publicUrl,
      success: true 
    });
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

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 