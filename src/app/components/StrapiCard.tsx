'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FormattedStrapiProduct } from '@/types/strapi';
import { apiUtils } from '@/lib/api';

interface StrapiCardProps {
  product: FormattedStrapiProduct;
  categorySlug: string;
}

export const StrapiCard: React.FC<StrapiCardProps> = ({ product, categorySlug }) => {
  const imageUrl = apiUtils.getImageUrl(product.image?.url);
  const formattedPrice = apiUtils.formatPrice(product.price);

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/${categorySlug}/${product.slug}`}>
        <div className="aspect-w-16 aspect-h-12 bg-gray-200">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={product.image?.alternativeText || product.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>
          
          {product.shortDescription && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.shortDescription}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <span className="block">{product.size}</span>
              <span className="block">{product.areaM2} м²</span>
            </div>
            
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">
                {formattedPrice}
              </div>
            </div>
          </div>
          
          {product.material && (
            <div className="mt-2 text-xs text-gray-500">
              Материал: {product.material.name}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
