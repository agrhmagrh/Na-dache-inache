'use client';

import React from 'react';
import Image from 'next/image';
import { FormattedStrapiCompanyAdvantage } from '@/types/strapi';
import { apiUtils } from '@/lib/api';

interface StrapiAdvantageCardProps {
  advantage: FormattedStrapiCompanyAdvantage;
}

export const StrapiAdvantageCard: React.FC<StrapiAdvantageCardProps> = ({ advantage }) => {
  const imageUrl = apiUtils.getImageUrl(advantage.image?.url);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={advantage.image?.alternativeText || advantage.title}
            fill
            className={`object-cover ${advantage.imagePosition || ''}`}
          />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {advantage.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {advantage.description}
        </p>
      </div>
    </div>
  );
};
