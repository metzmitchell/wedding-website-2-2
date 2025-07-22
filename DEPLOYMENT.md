# Deployment Guide

## Firebase Storage CORS Configuration

To fix video upload and playback issues, you need to configure CORS for your Firebase Storage bucket.

### Option 1: Using Firebase CLI (Recommended)

1. Install Firebase CLI if you haven't already:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project (if not already done):
   ```bash
   firebase init
   ```

4. Set the CORS configuration for your storage bucket:
   ```bash
   gsutil cors set cors.json gs://pumpkins-ca2b8.appspot.com
   ```

### Option 2: Using Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project
3. Navigate to Cloud Storage > Browser
4. Select your storage bucket (pumpkins-ca2b8.appspot.com)
5. Go to the "Permissions" tab
6. Click "Add CORS configuration"
7. Use the configuration from the `cors.json` file in this project

### Option 3: Using gsutil directly

If you have gsutil installed:

```bash
gsutil cors set cors.json gs://pumpkins-ca2b8.appspot.com
```

## Environment Variables

Make sure these environment variables are set in your Vercel deployment:

- `FIREBASE_SERVICE_ACCOUNT_KEY` - Your Firebase service account JSON (stringified)
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## Testing the Fix

After applying the CORS configuration:

1. Try uploading a new video
2. Check if existing videos now load properly
3. Verify that video thumbnails are generated
4. Test video playback functionality

## Troubleshooting

If videos still don't work after CORS configuration:

1. Check the browser console for CORS errors
2. Verify the storage bucket name matches your Firebase project
3. Ensure the CORS configuration was applied successfully
4. Check that videos are being made public in the upload process

## Security Notes

- The current CORS configuration allows access from any origin (*) for simplicity
- For production, consider restricting origins to only your domain
- Videos are made public for easier access, but you can implement signed URLs for better security