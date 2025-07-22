'use client';

import { useState, useEffect, useRef } from 'react';

// Helper function to format duration
function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

interface VideoThumbnailProps {
  videoUrl: string;
  className?: string;
}

export default function VideoThumbnail({ videoUrl, className = '' }: VideoThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailGenerated, setThumbnailGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const generateThumbnail = () => {
      const canvas = canvasRef.current;
      if (!canvas || !video) return;

      try {
        // Set canvas dimensions
        canvas.width = video.videoWidth || 400;
        canvas.height = video.videoHeight || 225;
        
        // Draw the current video frame to canvas
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          setThumbnailGenerated(true);
        }
      } catch (error) {
        console.error('Error generating thumbnail:', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    const handleLoadedData = () => {
      // Get video duration
      if (video.duration && isFinite(video.duration)) {
        setDuration(video.duration);
      }
      // Seek to 1 second to get a good thumbnail frame
      video.currentTime = 1;
    };

    const handleSeeked = () => {
      generateThumbnail();
    };

    const handleError = () => {
      setError(true);
      setIsLoading(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('error', handleError);
    };
  }, [videoUrl]);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  // If playing, show the video player
  if (isPlaying) {
    return (
      <video 
        ref={videoRef}
        controls 
        className={`w-full h-full rounded-md ${className}`}
        onEnded={handleVideoEnd}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Hidden video element for thumbnail generation */}
      <video 
        ref={videoRef}
        className="hidden"
        preload="metadata"
        crossOrigin="anonymous"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      {/* Hidden canvas for thumbnail generation */}
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Thumbnail display */}
      <div className="relative w-full h-full bg-gray-200 rounded-md overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        )}
        
        {thumbnailGenerated && canvasRef.current && !error && (
          <img 
            src={canvasRef.current.toDataURL()} 
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        )}
        
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🎥</span>
              </div>
              <p className="text-gray-500 font-serif text-sm">Video Preview</p>
            </div>
          </div>
        )}
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handlePlayClick}
            className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 group-hover:scale-110"
            aria-label="Play video"
            disabled={isLoading}
          >
            <div className="w-0 h-0 border-l-[12px] border-l-gray-700 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
          </button>
        </div>
        
        {/* Video duration indicator */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {duration ? formatDuration(duration) : 'Video Message'}
        </div>
      </div>
    </div>
  );
} 