'use client';

import React from 'react';
import Image from 'next/image';
import { FormattedStrapiMaterial } from '@/types/strapi';
import { apiUtils } from '@/app/api/lib/api';

interface StrapiMaterialCardProps {
  material: FormattedStrapiMaterial;
}

export const StrapiMaterialCard: React.FC<StrapiMaterialCardProps> = ({ material }) => {
  const imageUrl = apiUtils.getImageUrl(material.image?.url);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-12 bg-gray-200">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={material.image?.alternativeText || material.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {material.name}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3">
          {material.description}
        </p>
      </div>
    </div>
  );
};
