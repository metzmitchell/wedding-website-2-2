'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import MessageCard from '@/components/MessageCard';
import VideoThumbnail from '@/components/VideoThumbnail';

// Sample video data for demonstration
const sampleVideos = [
  {
    id: '1',
    name: 'Sarah',
    message: 'I can\'t wait to marry you!',
    type: 'video' as const,
    mediaUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
  },
  {
    id: '2',
    name: 'Mitch',
    message: 'Looking forward to our special day!',
    type: 'video' as const,
    mediaUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
  },
  {
    id: '3',
    name: 'Mom',
    message: 'So happy for you both!',
    type: 'video' as const,
    mediaUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
  },
];

export default function VideoDemoPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="section-container">
        <div className="page-container">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl lg:text-5xl text-gray-800 mb-4">
              Video Thumbnail Demo
            </h1>
            <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto">
              This page demonstrates the new video thumbnail functionality. Each video shows a preview with a play button overlay.
            </p>
          </div>

          {/* Individual Video Thumbnail Demo */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-gray-800 mb-6 text-center">
              Individual Video Thumbnail Component
            </h2>
            <div className="max-w-md mx-auto">
              <div className="aspect-video bg-gray-100 rounded-md overflow-hidden relative group">
                <VideoThumbnail 
                  videoUrl="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                />
              </div>
              <p className="text-center mt-4 font-serif text-sm text-gray-600">
                Click the play button to see the video player
              </p>
            </div>
          </div>

          {/* Toast Feed Style Demo */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-gray-800 mb-6 text-center">
              Toast Feed Style (Message Cards)
            </h2>
            <div className="bg-gray-50/50 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="space-y-4">
                {sampleVideos.map((video) => (
                  <MessageCard
                    key={video.id}
                    message={video.message}
                    author={video.name}
                    type={video.type}
                    mediaUrl={video.mediaUrl}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl text-gray-800 mb-6 text-center">
              Video Thumbnail Features
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-serif font-medium text-gray-800">Automatic Thumbnail Generation</h3>
                  <p className="font-serif text-sm text-gray-600">Generates thumbnails from the video content using HTML5 Canvas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-serif font-medium text-gray-800">Play Button Overlay</h3>
                  <p className="font-serif text-sm text-gray-600">Elegant play button that appears on hover with smooth animations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-serif font-medium text-gray-800">Duration Display</h3>
                  <p className="font-serif text-sm text-gray-600">Shows video duration in MM:SS format when available</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-serif font-medium text-gray-800">Loading States</h3>
                  <p className="font-serif text-sm text-gray-600">Shows loading spinner while generating thumbnails</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-serif font-medium text-gray-800">Error Handling</h3>
                  <p className="font-serif text-sm text-gray-600">Graceful fallback when thumbnail generation fails</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-serif font-medium text-gray-800">Responsive Design</h3>
                  <p className="font-serif text-sm text-gray-600">Works perfectly on mobile, tablet, and desktop</p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="font-serif text-2xl text-gray-800 mb-6 text-center">
              How It Works
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-4 font-serif text-sm text-gray-700">
                <p>
                  <strong>1. Video Loading:</strong> The component loads the video metadata in the background
                </p>
                <p>
                  <strong>2. Thumbnail Generation:</strong> Seeks to 1 second into the video and captures a frame using HTML5 Canvas
                </p>
                <p>
                  <strong>3. Display:</strong> Shows the generated thumbnail with a play button overlay
                </p>
                <p>
                  <strong>4. Playback:</strong> Clicking the play button switches to the full video player with controls
                </p>
                <p>
                  <strong>5. Return:</strong> When the video ends, it returns to the thumbnail view
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 