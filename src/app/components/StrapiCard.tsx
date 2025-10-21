'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FormattedStrapiProduct } from '@/types/strapi';
import { apiUtils } from '@/app/api/lib/api';
import { StrapiImageUtils, StrapiImageData } from './StrapiImageUtils';

interface StrapiCardProps {
  product: FormattedStrapiProduct;
  categorySlug: string;
  additionalImages?: StrapiImageData[]; // Images from files API
}

export const StrapiCard: React.FC<StrapiCardProps> = ({ 
  product, 
  categorySlug, 
  additionalImages = [] 
}) => {
  // Get product images using the utility
  const productImages = StrapiImageUtils.getProductImages(product, additionalImages);
  const mainImage = productImages[0];
  const imageUrl = mainImage ? StrapiImageUtils.getImageUrl(mainImage, 'medium') : null;
  const formattedPrice = apiUtils.formatPrice(product.price);

  // Extract text from rich text description
  const getDescriptionText = (description: any[]) => {
    if (!description || !Array.isArray(description)) return '';
    
    return description
      .map(block => {
        if (block.type === 'paragraph' && block.children) {
          return block.children
            .filter((child: any) => child.type === 'text')
            .map((child: any) => child.text)
            .join('');
        }
        return '';
      })
      .join(' ')
      .substring(0, 150) + '...';
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/${categorySlug}/${product.slug}`}>
        <div className="aspect-w-16 aspect-h-12 bg-gray-200 relative">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={mainImage?.alternativeText || product.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Нет изображения</span>
            </div>
          )}
          
          {/* Featured badge */}
          {product.isFeatured && (
            <div className="absolute top-2 right-2 bg-orange text-white text-xs px-2 py-1 rounded-full">
              Популярное
            </div>
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
          
          {/* Show description text if no short description */}
          {!product.shortDescription && product.description && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {getDescriptionText(product.description)}
            </p>
          )}
          
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-500">
              <span className="block font-medium">{product.size}</span>
              <span className="block">{product.areaM2} м²</span>
            </div>
            
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">
                {formattedPrice}
              </div>
            </div>
          </div>
          
          {/* Product type and shape */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="capitalize">{product.type}</span>
            <span className="capitalize">{product.shape}</span>
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
