'use client';

import React from 'react';
import { useProductBySlug, useProducts } from '@/hooks/useProducts';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { apiUtils } from '@/app/api/lib/api';
import { StrapiImageUtils } from '@/app/components/StrapiImageUtils';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import ProductTabs from '@/app/components/ProductTabs';
import PavilionGallery from '@/app/components/PavilionGallery';
import FormBlock from '@/app/HomeSections/FormBlock';
import PopularCategories from '@/app/HomeSections/PopularCategories';

export const StrapiPergolaDetailPage: React.FC = () => {
  const params = useParams();
  const slug = params?.id as string;
  
  const { product, loading, error } = useProductBySlug(slug);
  const { products: similarProducts } = useProducts('pergols');

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
          <Link href="/pergols" className="mt-4 inline-block bg-orange text-white px-6 py-2 rounded">
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
            <Link href="/pergols" className="inline-block text-orange hover:underline">
              ← Вернуться в каталог
            </Link>
          </div>
        </aside>

        {/* Content */}
        <div className="col-span-12 md:col-span-9">
          <Breadcrumbs
            items={[
              { label: "Перголы", href: "/pergols" },
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
                    <li>• Каркас, крепеж, кровельный материал</li>
                    <li>• Опоры и анкера</li>
                    <li>• Доп. опции: подсветка, шторы, остекление</li>
                  </ul>
                  <button className="text-black mt-2 hover:underline">
                    Читать подробнее
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
                    Пергола формирует уютную зону отдыха и защищает от солнца и
                    осадков. Подберем решение по стилю, бюджету и требованиям
                    участка. Возможна индивидуальная доработка проекта.
                  </p>
                </div>
              )
            }
          />

          {/* Similar Products */}
          {similar.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Похожие перголы</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similar.map((p) => {
                  const productImages = StrapiImageUtils.getProductImages(p, p.additionalImages || []);
                  const imageUrl = productImages[0] ? StrapiImageUtils.getImageUrl(productImages[0], 'medium') : null;
                  
                  return (
                    <article key={p.id} className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-40">
                        {imageUrl ? (
                          <Image 
                            src={imageUrl} 
                            alt={p.title} 
                            fill 
                            className="object-cover" 
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">Нет фото</span>
                          </div>
                        )}
                      </div>
                      <div className="bg-gray-product text-white p-4">
                        <div className="font-semibold">{apiUtils.formatPrice(p.price)}</div>
                        <div className="text-sm text-gray-200 mb-3">{p.title}</div>
                        <Link 
                          href={`/pergols/${p.slug}`}
                          className="block w-full bg-orange text-white py-2 text-center font-semibold hover:bg-orange-600 transition-colors"
                        >
                          Перейти
                        </Link>
                      </div>
                    </article>
                  );
                })}
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