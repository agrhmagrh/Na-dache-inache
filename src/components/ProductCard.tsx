'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FormattedStrapiProduct } from '@/types/strapi';
import { apiUtils } from '@/app/api/lib/api';
import { StrapiImageUtils, StrapiImageData } from '../app/components/StrapiImageUtils';

interface ProductCardProps {
  product: FormattedStrapiProduct;
  categorySlug: string;
  additionalImages?: StrapiImageData[];
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  categorySlug, 
  additionalImages = [] 
}) => {
  // Get product images using the utility
  const productImages = StrapiImageUtils.getProductImages(product, additionalImages);
  const mainImage = productImages[0];
  const imageUrl = mainImage ? StrapiImageUtils.getImageUrl(mainImage, 'medium') : null;
  const formattedPrice = apiUtils.formatPrice(product.price);

  return (
    <article className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-44">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={mainImage?.alternativeText || product.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Нет фото</span>
          </div>
        )}
        
        {/* Show additional images count if available */}
        {additionalImages && additionalImages.length > 0 && (
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            +{additionalImages.length} фото
          </div>
        )}
      </div>

      <div className="bg-gray-product text-white p-4">
        <div className="font-semibold text-lg mb-1">{formattedPrice}</div>
        <div className="text-sm text-gray-200 mb-2">{product.title}</div>
        
        <div className="text-xs text-gray-200 space-y-1">
          <div>Внешний вид: {product.size}</div>
          <div>Площадь: {product.areaM2} м²</div>
        </div>
        
        <Link 
          href={`/${categorySlug}/${product.slug}`}
          className="mt-4 block w-full bg-orange text-white py-2 text-center font-semibold hover:bg-orange-600 transition-colors rounded"
        >
          Перейти
        </Link>
      </div>
    </article>
  );
};