# 🔥 URGENT: Firebase Storage CORS Setup

## The Problem
Your videos aren't playing because Firebase Storage is blocking requests from your website due to missing CORS configuration. The error shows:

```
Access to video at 'https://storage.googleapis.com/pumpkins-ca2b8.firebasestorage.app/...' 
from origin 'https://www.pumpkinspumpkinspumpkinsandmore.com' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present
```

## Quick Fix Options

### Option 1: Using Firebase Console (Easiest - 2 minutes)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your `pumpkins-ca2b8` project
3. Go to **Storage** in the left sidebar
4. Click on **Rules** tab
5. Add this rule to allow your domain:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

### Option 2: Using Google Cloud Console (Recommended)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your `pumpkins-ca2b8` project
3. Go to **Cloud Storage** > **Browser**
4. Click on your bucket `pumpkins-ca2b8.firebasestorage.app`
5. Click **Edit bucket details** (pencil icon)
6. Scroll down to **CORS** section
7. Click **Add CORS configuration**
8. Add this configuration:

```json
[
  {
    "origin": [
      "https://www.pumpkinspumpkinspumpkinsandmore.com",
      "https://pumpkinspumpkinspumpkinsandmore.com",
      "http://localhost:3000",
      "http://localhost:3001"
    ],
    "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
    "maxAgeSeconds": 3600,
    "responseHeader": [
      "Content-Type",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Methods",
      "Access-Control-Allow-Headers"
    ]
  }
]
```

### Option 3: Using Command Line (If you want to try)

If you want to try the command line approach:

1. Login to Firebase:
   ```bash
   firebase login
   ```

2. Apply CORS configuration:
   ```bash
   gsutil cors set cors.json gs://pumpkins-ca2b8.firebasestorage.app
   ```

## Test the Fix

After applying ANY of these options:

1. Go to your website: https://www.pumpkinspumpkinspumpkinsandmore.com/share-a-toast
2. Try playing an existing video
3. Try uploading a new video
4. Check browser console for CORS errors (should be gone!)

## Why This Happened

- Firebase Storage by default blocks cross-origin requests
- Your website domain needs to be explicitly allowed in CORS configuration
- The `cors.json` file I created has the right configuration, but it needs to be applied to your Firebase Storage bucket

## Expected Result

✅ Videos will play immediately after CORS configuration is applied
✅ Video uploads will work
✅ Video thumbnails will generate
✅ No more CORS errors in browser console

**This should fix the video issues immediately!** 🎉 