'use client';

import React from 'react';
import { FormattedStrapiProduct } from '@/types/strapi';
import { apiUtils } from '@/app/api/lib/api';

interface ProductDetailsProps {
  product: FormattedStrapiProduct;
  additionalImages?: any[];
  className?: string;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  additionalImages = [],
  className = ''
}) => {
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
      .join('\n\n');
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Product header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            
            {product.seoTitle && product.seoTitle !== product.title && (
              <p className="text-lg text-gray-600 mb-4">
                {product.seoTitle}
              </p>
            )}
          </div>
          
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">
              {formattedPrice}
            </div>
            {product.isFeatured && (
              <span className="inline-block mt-2 bg-orange text-white text-sm px-3 py-1 rounded-full">
                Популярное
              </span>
            )}
          </div>
        </div>

        {/* Short description */}
        {product.shortDescription && (
          <p className="text-lg text-gray-700 leading-relaxed">
            {product.shortDescription}
          </p>
        )}
      </div>

      {/* Product specifications */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Характеристики
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Размер:</span>
              <span className="font-medium">{product.size}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Площадь:</span>
              <span className="font-medium">{product.areaM2} м²</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Форма:</span>
              <span className="font-medium capitalize">{product.shape}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Тип:</span>
              <span className="font-medium capitalize">{product.type}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {product.material && (
              <div className="flex justify-between">
                <span className="text-gray-600">Материал:</span>
                <span className="font-medium">{product.material.name}</span>
              </div>
            )}
            
            <div className="flex justify-between">
              <span className="text-gray-600">Статус:</span>
              <span className={`font-medium ${product.isActive ? 'text-green-600' : 'text-red-600'}`}>
                {product.isActive ? 'Доступен' : 'Недоступен'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Full description */}
      {product.description && (
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Описание
          </h3>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {getDescriptionText(product.description)}
          </div>
        </div>
      )}

      {/* Additional images info */}
      {additionalImages.length > 0 && (
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">
            Дополнительные изображения
          </h4>
          <p className="text-blue-700 text-sm">
            Доступно {additionalImages.length} дополнительных изображений
          </p>
        </div>
      )}

      {/* SEO information (for admin/debug) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-gray-100 rounded-lg p-4 text-sm">
          <h4 className="font-medium text-gray-900 mb-2">SEO информация</h4>
          <div className="space-y-1 text-gray-600">
            <div>ID: {product.id}</div>
            <div>Slug: {product.slug}</div>
            {product.seoTitle && <div>SEO Title: {product.seoTitle}</div>}
            {product.seoDescription && <div>SEO Description: {product.seoDescription}</div>}
            <div>Создан: {new Date(product.createdAt).toLocaleDateString('ru-RU')}</div>
            <div>Обновлен: {new Date(product.updatedAt).toLocaleDateString('ru-RU')}</div>
          </div>
        </div>
      )}
    </div>
  );
};
