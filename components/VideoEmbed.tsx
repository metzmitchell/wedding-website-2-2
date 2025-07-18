'use client';

import { useState } from 'react';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function VideoEmbed({ videoId, title = "Wedding Video", className = '' }: VideoEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`bg-white rounded-lg shadow-lg p-2 border border-gray-200 ${className}`}>
      <div className="relative pb-[56.25%] h-0">
        {isLoading && (
          <div className="absolute inset-2 bg-gray-200 animate-pulse rounded-md flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">▶️</span>
              </div>
              <p className="text-gray-500 font-serif">Loading video...</p>
            </div>
          </div>
        )}
        <iframe
          className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-md"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}