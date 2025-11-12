'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FormattedStrapiProduct } from '@/types/strapi';
import { apiUtils } from '@/app/api/lib/api';

interface PavilionCardProps {
  product: FormattedStrapiProduct;
}

export const PavilionCard: React.FC<PavilionCardProps> = ({ product }) => {

  return (
    <article className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition-shadow" role="listitem">
      <div className="h-44 relative">
        <Image
          src={apiUtils.getImageUrl(product.image.url)}
          alt={product.image.alternativeText || product.title}
          fill
          className="object-cover"
        />
        {/* Show additional images count if available */}
        {product.additionalImages && product.additionalImages.length > 0 && (
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            +{product.additionalImages.length} фото
          </div>
        )}
        
        {/* Featured badge */}
        {product.isFeatured && (
          <div className="absolute top-2 left-2 bg-orange text-white text-xs px-2 py-1 rounded">
            Популярное
          </div>
        )}
      </div>

      <div className="bg-gray-product text-white p-4">
        <div className="font-semibold text-lg mb-1">{apiUtils.formatPrice(product.price)}</div>
        <div className="text-sm text-gray-200 mb-2">{product.title}</div>
        
        <div className="text-xs text-gray-200 space-y-1">
          <div>Внешний вид: {product.size}</div>
          <div>Площадь: {product.areaM2} м²</div>
        </div>
        
        <Link 
          href={`/pavilions/${product.slug}`} 
          className="mt-4 block w-full bg-orange text-white py-2 text-center font-semibold hover:bg-orange-600 transition-colors rounded"
        >
          Перейти
        </Link>
      </div>
    </article>
  );
};