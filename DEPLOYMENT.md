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

## Additional Optional Environment Variables

For full functionality, you may also want to add these to Vercel (these APIs are used by your application):

```
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
DEEPGRAM_API_KEY=your_deepgram_api_key
REPLICATE_API_TOKEN=your_replicate_api_token
```

## API Keys Used

- **Firebase Admin SDK**: Server-side operations (file uploads, etc.) - ✅ CONFIGURED
- **Firebase Client SDK**: Client-side authentication and Firestore - ✅ CONFIGURED
- **OpenAI API**: Chat completions and audio transcription
- **Anthropic API**: Claude AI chat completions
- **Deepgram API**: Speech recognition services
- **Replicate API**: AI image generation

## Current Status

✅ **CONFIGURED**: All Firebase environment variables are properly set
⚠️ **OPTIONAL**: Additional API keys can be added for full feature support