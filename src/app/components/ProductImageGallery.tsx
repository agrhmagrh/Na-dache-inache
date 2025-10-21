'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { apiUtils } from '@/app/api/lib/api';

interface ProductImageGalleryProps {
  images: any[];
  productTitle: string;
  className?: string;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  productTitle,
  className = ''
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-gray-500">Нет изображений</span>
      </div>
    );
  }

  const selectedImage = images[selectedImageIndex];
  const imageUrl = selectedImage?.url ? apiUtils.getImageUrl(selectedImage.url) : null;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main image */}
      <div className="relative aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={selectedImage.alternativeText || productTitle}
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority={selectedImageIndex === 0}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Нет изображения</span>
          </div>
        )}
      </div>

      {/* Thumbnail gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => {
            const thumbUrl = image.url ? apiUtils.getImageUrl(image.url) : null;
            return (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImageIndex === index
                    ? 'border-blue-500 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {thumbUrl ? (
                  <Image
                    src={thumbUrl}
                    alt={image.alternativeText || `${productTitle} - изображение ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500">?</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
