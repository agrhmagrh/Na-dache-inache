'use client';

import React from 'react';
import { useProducts, useMaterials, useCompanyAdvantages } from '../../../hooks';
import { StrapiCard } from '@/app/components/StrapiCard';
import { StrapiMaterialCard } from '@/app/components/StrapiMaterialCard';
import { StrapiAdvantageCard } from '@/app/components/StrapiAdvantageCard';
import CanopiesSeo from '@/app/components/CanopiesSeo';

export const StrapiCanopiesPage: React.FC = () => {
  const { products, loading: productsLoading, error: productsError } = useProducts('canopies');
  const { materials, loading: materialsLoading, error: materialsError } = useMaterials();
  const { advantages, loading: advantagesLoading, error: advantagesError } = useCompanyAdvantages();

  if (productsLoading || materialsLoading || advantagesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (productsError || materialsError || advantagesError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Ошибка загрузки данных</p>
          <p className="text-gray-600">
            {productsError || materialsError || advantagesError}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <CanopiesSeo />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Навесы на заказ
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Качественные навесы из дерева, металла и ткани для вашего участка
              </p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Наши проекты навесов
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Выберите готовый проект или закажите индивидуальный навес по вашим размерам
              </p>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <StrapiCard
                    key={product.id}
                    product={product}
                    categorySlug="canopies"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Товары не найдены</p>
              </div>
            )}
          </div>
        </div>

        {/* Materials Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Материалы для навесов
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Мы используем только качественные материалы для создания долговечных конструкций
              </p>
            </div>

            {materials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {materials.map((material) => (
                  <StrapiMaterialCard
                    key={material.id}
                    material={material}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Материалы не найдены</p>
              </div>
            )}
          </div>
        </div>

        {/* Company Advantages Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Наши преимущества в качестве, опыте и индивидуальном подходе
              </p>
            </div>

            {advantages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advantages.map((advantage) => (
                  <StrapiAdvantageCard
                    key={advantage.id}
                    advantage={advantage}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Преимущества не найдены</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
