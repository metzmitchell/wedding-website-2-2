'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CustomVideoThumbnailProps {
  videoId: string;
  thumbnailImage: string;
  title?: string;
  className?: string;
}

export default function CustomVideoThumbnail({ 
  videoId, 
  thumbnailImage, 
  title = "Wedding Video", 
  className = '' 
}: CustomVideoThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (isPlaying) {
    return (
      <div className={`relative w-full ${className}`}>
        <div className="relative pb-[56.25%] h-0 md:border-2 md:border-gray-200 md:rounded-lg md:bg-white md:p-2">
          <iframe
            className="absolute top-0 left-0 w-full h-full md:top-2 md:left-2 md:w-[calc(100%-16px)] md:h-[calc(100%-16px)] md:rounded-md"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full cursor-pointer group ${className}`} onClick={handlePlay}>
      <div className="relative pb-[56.25%] h-0 md:border-2 md:border-gray-200 md:rounded-lg md:bg-white md:p-2">
        <div className="absolute top-0 left-0 w-full h-full md:top-2 md:left-2 md:w-[calc(100%-16px)] md:h-[calc(100%-16px)] md:rounded-md overflow-hidden">
          <Image
            src={thumbnailImage}
            alt={title}
            fill
            className="object-cover md:rounded-md"
            priority
          />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
              <svg 
                className="w-8 h-8 md:w-10 md:h-10 text-gray-800 ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}