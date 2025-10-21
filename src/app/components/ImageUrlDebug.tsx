'use client';

import React from 'react';
import { apiUtils } from '@/app/api/lib/api';

interface ImageUrlDebugProps {
  imageUrl: string;
  title?: string;
}

export const ImageUrlDebug: React.FC<ImageUrlDebugProps> = ({ 
  imageUrl, 
  title = "Debug Image URL" 
}) => {
  const fullUrl = apiUtils.getImageUrl(imageUrl);
  
  return (
    <div className="bg-gray-100 p-4 rounded-lg space-y-2">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <div className="text-sm space-y-1">
        <div>
          <span className="font-medium">Original URL:</span>
          <code className="ml-2 bg-white px-2 py-1 rounded text-xs">{imageUrl}</code>
        </div>
        <div>
          <span className="font-medium">Full URL:</span>
          <code className="ml-2 bg-white px-2 py-1 rounded text-xs break-all">{fullUrl}</code>
        </div>
        <div>
          <span className="font-medium">Strapi URL:</span>
          <code className="ml-2 bg-white px-2 py-1 rounded text-xs">{process.env.NEXT_PUBLIC_STRAPI_URL}</code>
        </div>
      </div>
      
      {/* Test image */}
      {fullUrl && (
        <div className="mt-4">
          <img 
            src={fullUrl} 
            alt="Debug image" 
            className="max-w-xs h-auto rounded border"
            onError={(e) => {
              console.error('Image failed to load:', fullUrl);
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', fullUrl);
            }}
          />
        </div>
      )}
    </div>
  );
};
