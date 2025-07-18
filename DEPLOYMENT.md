# Vercel Deployment Environment Variables

## Required Environment Variables for Vercel

### Client-side Firebase Configuration (NEXT_PUBLIC_*)
These are automatically detected from your `.env.local` file:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Server-side Firebase Admin Configuration
Add this to your Vercel environment variables:

```
FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
```

**Note**: The FIREBASE_SERVICE_ACCOUNT_KEY should be the entire contents of your Firebase service account JSON file as a single-line string.

## Setting Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable with its corresponding value
4. Make sure to set the environment (Production, Preview, Development)
5. Redeploy your application

## API Keys Used

- Firebase Admin SDK for server-side operations (file uploads, etc.)
- Firebase Client SDK for client-side authentication and Firestore
- OpenAI API (if configured)
- Anthropic API (if configured)
- Deepgram API (if configured)
- Replicate API (if configured)