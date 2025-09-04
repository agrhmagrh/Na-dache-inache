'use client';

import React from 'react';
import { useProductBySlug } from '@/hooks/useProducts';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { apiUtils } from '@/lib/api';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const StrapiCanopyDetailPage: React.FC = () => {
  const params = useParams();
  const slug = params?.id as string;
  
  const { product, loading, error } = useProductBySlug(slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Ошибка загрузки товара</p>
          <p className="text-gray-600">{error || 'Товар не найден'}</p>
        </div>
      </div>
    );
  }

  const imageUrl = apiUtils.getImageUrl(product.image?.url);
  const formattedPrice = apiUtils.formatPrice(product.price);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Навесы', href: '/canopies' },
            { label: product.title, href: `/canopies/${product.slug}` },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={product.image?.alternativeText || product.title}
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                )}
              </div>

              {/* Gallery */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {product.gallery.map((image, index) => {
                    const galleryImageUrl = apiUtils.getImageUrl(image.url);
                    return (
                      <div key={index} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded overflow-hidden">
                        {galleryImageUrl && (
                          <Image
                            src={galleryImageUrl}
                            alt={image.alternativeText || `${product.title} - фото ${index + 1}`}
                            width={200}
                            height={200}
                            className="w-full h-24 object-cover"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {formattedPrice}
                </div>
              </div>

              {product.description && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Описание
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Specifications */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Характеристики
                </h3>
                <div className="space-y-2">
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
                    <span className="font-medium">{product.shape}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Тип:</span>
                    <span className="font-medium">{product.type}</span>
                  </div>
                  {product.material && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Материал:</span>
                      <span className="font-medium">{product.material.name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Заказать навес
                </button>
                <button className="w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
