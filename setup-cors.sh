#!/bin/bash

# Firebase Storage CORS Setup Script
# This script helps configure CORS for your Firebase Storage bucket

echo "🎥 Setting up Firebase Storage CORS configuration..."

# Check if gsutil is available
if ! command -v gsutil &> /dev/null; then
    echo "❌ gsutil is not installed. Please install Google Cloud SDK first:"
    echo "   https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if cors.json exists
if [ ! -f "cors.json" ]; then
    echo "❌ cors.json file not found. Please make sure it exists in the current directory."
    exit 1
fi

# Get the storage bucket name from environment or prompt user
STORAGE_BUCKET=${NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:-""}

if [ -z "$STORAGE_BUCKET" ]; then
    echo "Please enter your Firebase Storage bucket name (e.g., pumpkins-ca2b8.appspot.com):"
    read -r STORAGE_BUCKET
fi

if [ -z "$STORAGE_BUCKET" ]; then
    echo "❌ Storage bucket name is required."
    exit 1
fi

echo "📦 Configuring CORS for bucket: $STORAGE_BUCKET"

# Apply CORS configuration
gsutil cors set cors.json "gs://$STORAGE_BUCKET"

if [ $? -eq 0 ]; then
    echo "✅ CORS configuration applied successfully!"
    echo ""
    echo "🎉 Your videos should now work properly. Try:"
    echo "   1. Uploading a new video"
    echo "   2. Playing existing videos"
    echo "   3. Generating video thumbnails"
else
    echo "❌ Failed to apply CORS configuration."
    echo "   Make sure you have the necessary permissions for the bucket."
    exit 1
fi 