'use client';

import React, { useState } from 'react';
import { useProductBySlug, useProducts } from '@/hooks/useProducts';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { apiUtils } from '@/app/api/lib/api';
import { StrapiImageUtils } from '@/app/components/StrapiImageUtils';
import { StrapiCard } from '@/app/components/StrapiCard';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import ProductTabs from '@/app/components/ProductTabs';
import PavilionGallery from '@/app/components/PavilionGallery';
import FormBlock from '@/app/HomeSections/FormBlock';
import PopularCategories from '@/app/HomeSections/PopularCategories';

export const StrapiPantryDetailPage: React.FC = () => {
  const params = useParams();
  const slug = params?.id as string;
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  
  const { product, loading, error } = useProductBySlug(slug);
  const { products: similarProducts } = useProducts('pantries');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto mb-4"></div>
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
          <Link href="/pantries" className="mt-4 inline-block bg-orange text-white px-6 py-2 rounded">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  // Prepare gallery images
  const productImages = StrapiImageUtils.getProductImages(product, product.additionalImages || []);
  const gallery = productImages
    .map(img => StrapiImageUtils.getImageUrl(img, 'large'))
    .filter((url): url is string => Boolean(url));
  
  // Get similar products (exclude current product)
  const similar = similarProducts.filter(p => p.id !== product.id).slice(0, 4);

  // Extract text from rich text description
  const getDescriptionText = (description: any) => {
    if (!description) return '';
    
    if (typeof description === 'string') return description;
    
    if (Array.isArray(description)) {
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
        .join(' ');
    }
    
    return '';
  };

  const descriptionText = getDescriptionText(product.description);

  return (
    <main className="bg-gray-light">
      <section className="max-w-screen-xl m-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="hidden md:block col-span-3">
          <div className="bg-white border border-gray-additional rounded p-4 sticky top-4">
            <div className="font-semibold mb-2">Навигация</div>
            <div className="text-sm text-gray-500 mb-3">Используйте фильтры на странице каталога</div>
            <Link href="/pantries" className="inline-block text-orange hover:underline">
              ← Вернуться в каталог
            </Link>
          </div>
        </aside>

        {/* Content */}
        <div className="col-span-12 md:col-span-9">
          <Breadcrumbs
            items={[
              { label: "Хозблоки", href: "/pantries" },
              { label: product.title },
            ]}
          />
          
          <div className="grid grid-cols-12 gap-4">
            {/* Gallery */}
            <div className="col-span-12 lg:col-span-7">
              {gallery.length > 0 ? (
                <PavilionGallery images={gallery} alt={product.title} />
              ) : (
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <span className="text-gray-500">Нет изображений</span>
                </div>
              )}
            </div>

            {/* Info card */}
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-white rounded p-5 border border-gray-additional">
                <h1 className="text-base md:text-lg font-semibold text-black mb-3">
                  {product.title}
                </h1>

                <div className="space-y-1.5 text-sm mb-4">
                  <div>
                    <span className="text-gray-additional">Внешние размеры:</span>{" "}
                    <span className="font-semibold text-black">{product.size}</span>
                  </div>
                  <div>
                    <span className="text-gray-additional">Площадь:</span>{" "}
                    <span className="font-semibold text-black">{product.areaM2} м²</span>
                  </div>
                  <div>
                    <span className="text-gray-additional">Форма:</span>{" "}
                    <span className="font-semibold text-black">{product.shape}</span>
                  </div>
                  <div>
                    <span className="text-gray-additional">Тип:</span>{" "}
                    <span className="font-semibold text-black">{product.type}</span>
                  </div>
                  {product.material && (
                    <div>
                      <span className="text-gray-additional">Материал:</span>{" "}
                      <span className="font-semibold text-black">{product.material.name}</span>
                    </div>
                  )}
                </div>

                <div className="text-sm text-gray-additional">Цена за комплект</div>
                <div className="text-3xl font-semibold text-black mt-1">
                  {apiUtils.formatPrice(product.price)}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <button className="bg-orange text-white py-2 font-semibold hover:bg-orange-600 transition-colors">
                    Заказать
                  </button>
                  <button className="bg-gray-dark text-white py-2 font-semibold hover:bg-gray-700 transition-colors">
                    Консультация
                  </button>
                </div>

                <div className="mt-5">
                  <div className="font-semibold text-black mb-1">Комплектация:</div>
                  <ul className="space-y-1 text-sm text-gray-additional">
                    <li>• Хозблок (полный комплект для сборки)</li>
                    <li>• Кровельный материал</li>
                    <li>• Крепежные элементы</li>
                    <li>• Инструкция по сборке</li>
                  </ul>
                  
                  {/* Expandable details section */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isDetailsExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="space-y-3 text-sm text-gray-additional">
                        <div>
                          <div className="font-semibold text-black mb-1">Подробная комплектация:</div>
                          <ul className="space-y-1 ml-2">
                            <li>• Каркас из бруса 100x50 мм</li>
                            <li>• Обшивка вагонкой или имитацией бруса</li>
                            <li>• Кровельное покрытие (ондулин/профлист)</li>
                            <li>• Половая доска 32 мм</li>
                            <li>• Дверь с замком и петлями</li>
                            <li>• Крепежные элементы</li>
                            <li>• Инструкция по сборке</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="font-semibold text-black mb-1">Технические характеристики:</div>
                          <ul className="space-y-1 ml-2">
                            <li>• Снеговая нагрузка: до 200 кг/м²</li>
                            <li>• Ветровая нагрузка: до 25 м/с</li>
                            <li>• Влажность древесины: не более 20%</li>
                            <li>• Антисептическая обработка</li>
                            <li>• Гарантия на конструкцию: 1 год</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="font-semibold text-black mb-1">Дополнительные опции:</div>
                          <ul className="space-y-1 ml-2">
                            <li>• Окно для естественного освещения</li>
                            <li>• Полки и стеллажи</li>
                            <li>• Утепление для зимнего использования</li>
                            <li>• Электропроводка и освещение</li>
                            <li>• Дополнительная дверь</li>
                            <li>• Вентиляционные решетки</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="font-semibold text-black mb-1">Услуги:</div>
                          <ul className="space-y-1 ml-2">
                            <li>• Бесплатный выезд замерщика</li>
                            <li>• Проект хозблока</li>
                            <li>• Доставка по Москве и области</li>
                            <li>• Профессиональная сборка</li>
                            <li>• Подготовка основания</li>
                            <li>• Гарантийное обслуживание</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
                    className="text-black mt-2 hover:underline focus:outline-none transition-colors duration-200 flex items-center gap-1"
                  >
                    {isDetailsExpanded ? 'Скрыть подробности' : 'Читать подробнее'}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isDetailsExpanded ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <ProductTabs
            className="mt-6"
            description={
              descriptionText ? (
                <div className="prose max-w-none">
                  <p>{descriptionText}</p>
                </div>
              ) : (
                <div className="prose max-w-none">
                  <p>
                    Хозблок — практичное решение для хранения инструментов, садового инвентаря и других необходимых вещей. 
                    Мы предлагаем качественные конструкции различных размеров и назначений, 
                    которые помогут организовать пространство на вашем участке.
                  </p>
                </div>
              )
            }
          />

          {/* Similar Products */}
          {similar.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Похожие хозблоки</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similar.map((product) => (
                  <StrapiCard
                    key={product.id}
                    product={product}
                    categorySlug="pantries"
                    additionalImages={product.additionalImages}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      <FormBlock />
      <PopularCategories />
    </main>
  );
};