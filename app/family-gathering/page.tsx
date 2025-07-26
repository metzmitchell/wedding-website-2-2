'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

// List of all images in the family-dinner folder
const familyDinnerImages = [
  'IMG_5844.webp', 'IMG_5845.webp', 'IMG_5846.webp', 'IMG_5849.webp',
  'IMG_5852.webp', 'IMG_5853.webp', 'IMG_5854.webp', 'IMG_5855.webp',
  'IMG_5857.webp', 'IMG_5859.webp', 'IMG_5860.webp', 'IMG_5861.webp',
  'IMG_5863.webp', 'IMG_5864.webp', 'IMG_5865.webp', 'IMG_5867.webp',
  'IMG_5872.webp', 'IMG_5874.webp', 'IMG_5879.webp', 'IMG_5883.webp',
  'IMG_5884.webp', 'IMG_5885.webp', 'IMG_5889.webp', 'IMG_5907.webp',
  'IMG_5909.webp', 'IMG_5929.webp', 'IMG_5932.webp', 'IMG_5934.webp',
  'IMG_5936.webp', 'IMG_5938.webp', 'IMG_5940.webp', 'IMG_5944 2.webp',
  'IMG_5944.webp', 'IMG_5947.webp', 'IMG_5948.webp', 'IMG_5950.webp',
  'IMG_5954.webp', 'IMG_5955.webp', 'IMG_5958.webp', 'IMG_5959.webp',
  'IMG_5962.webp', 'IMG_5965.webp', 'IMG_6869.webp'
];

export default function FamilyGatheringPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl lg:text-5xl text-gray-800 mb-6">
              Family Dinner
            </h1>
            <p className="font-serif text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We had a wonderful family dinner, delicious menu, and the dress code was "jean" for Sarah Jean Robinson.
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {familyDinnerImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(`/images/family-dinner/${image}`)}
              >
                <Image
                  src={`/images/family-dinner/${image}`}
                  alt={`Family dinner photo ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedImage}
                alt="Family dinner photo enlarged"
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}