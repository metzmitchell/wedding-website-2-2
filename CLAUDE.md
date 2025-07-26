# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a wedding website for Mitch & Sarah built with Next.js 14, TypeScript, and Firebase. The site allows guests to share well-wishes through text, audio, video, and AI-generated images for the couple's elopement ceremony.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Build & Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database/Auth**: Firebase (Firestore, Auth, Storage)
- **AI Integration**: OpenAI, Anthropic Claude, Deepgram (voice), Replicate (images)
- **Deployment**: Vercel

### Key Directories
- `/app` - Next.js app router pages and API routes
  - `/api` - Server-side API endpoints for AI services and file uploads
  - Page routes: `/`, `/our-story`, `/our-marriage`, `/share-a-toast`, `/registry`, `/family-gathering`, `/this-website`
- `/components` - React components (custom + shadcn/ui)
- `/lib` - Utilities, Firebase config, contexts, and hooks
- `/public/images` - Static image assets

### Core Features

1. **Toast System** (`/share-a-toast`)
   - Text messages with optional author names
   - Audio recording via Deepgram
   - Video upload to Firebase Storage
   - AI image generation via Replicate
   - Real-time feed using Firestore

2. **Firebase Integration**
   - Environment variables required in `.env.local`:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
     NEXT_PUBLIC_FIREBASE_PROJECT_ID
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
     NEXT_PUBLIC_FIREBASE_APP_ID
     ```
   - CORS configuration for Storage in `cors.json`

3. **API Routes Pattern**
   - All AI service routes follow similar structure with POST handlers
   - Use environment variables for API keys
   - Return streaming responses where applicable

### Styling Conventions
- Uses custom Tailwind config with wedding-themed colors
- Custom fonts: Homemade Apple, Caveat, Dancing Script, Playfair Display
- Component styling follows shadcn/ui patterns
- Responsive design with mobile-first approach

### Important Notes
- No test framework currently configured
- TypeScript strict mode enabled
- Images use Next.js Image component with proper remote patterns configured
- File uploads use Firebase Storage with signed URLs for video playback