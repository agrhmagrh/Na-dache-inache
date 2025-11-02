"use client";
import React, { useState } from "react";
import Image from "next/image";
import FormBlock from "../../HomeSections/FormBlock";
import PopularCategories from "../../HomeSections/PopularCategories";
import CanopiesSeo from "../../components/CanopiesSeo";
import Breadcrumbs from "../../components/Breadcrumbs";
import { StrapiCard } from "../../components/StrapiCard";
import { useProducts } from "@/hooks";

// Define filter types based on common values
type CanopyShape = 'rectangular' | 'square' | 'round' | 'arched' | 'lean-to';
type CanopyType = 'carport' | 'terrace' | 'entrance' | 'garden' | 'commercial';

const SHAPE_LABELS: Record<CanopyShape, string> = {
  'rectangular': 'Прямоугольный',
  'square': 'Квадратный', 
  'round': 'Круглый',
  'arched': 'Арочный',
  'lean-to': 'Односкатный'
};

const TYPE_LABELS: Record<CanopyType, string> = {
  'carport': 'Для автомобиля',
  'terrace': 'Для террасы',
  'entrance': 'Над входом',
  'garden': 'Садовый',
  'commercial': 'Коммерческий'
};

interface FiltersState {
  shapes: Set<CanopyShape>;
  kinds: Set<CanopyType>;
}

export default function CanopiesCatalogPage() {
  const { products, loading, error } = useProducts('canopies');
  const [filters, setFilters] = useState<FiltersState>({
    shapes: new Set<CanopyShape>(),
    kinds: new Set<CanopyType>(),
  });

  // Filter products from API only
  const filtered = products.filter((p) => {
    const byShape = filters.shapes.size === 0 || filters.shapes.has(p.shape as CanopyShape);
    const byKind = filters.kinds.size === 0 || filters.kinds.has(p.type as CanopyType);
    return byShape && byKind;
  });

  const toggleShape = (shape: CanopyShape) => {
    setFilters((prev) => {
      const next = new Set(prev.shapes);
      next.has(shape) ? next.delete(shape) : next.add(shape);
      return { ...prev, shapes: next };
    });
  };

  const toggleKind = (kind: CanopyType) => {
    setFilters((prev) => {
      const next = new Set(prev.kinds);
      next.has(kind) ? next.delete(kind) : next.add(kind);
      return { ...prev, kinds: next };
    });
  };

  const resetFilters = () =>
    setFilters({ shapes: new Set<CanopyShape>(), kinds: new Set<CanopyType>() });

  return (
    <main className="bg-gray-light">
      <CanopiesSeo />
      {/* Hero banner */}
      <section className="bg-[url('/img/hoz-banner.jpg')] bg-cover bg-center" aria-label="Главный баннер">
        <div className="bg-black/40">
          <div className="max-w-screen-xl m-auto px-6 py-12 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">
              Оплатите зимой – получите навес весной без очереди
            </h1>
            <p className="md:text-xl mb-6">
              Закажите сейчас и встречайте весну с готовым навесом
            </p>
            <a
              href="#catalog"
              className="inline-block bg-orange text-white px-6 py-3 rounded-sm hover:opacity-90"
            >
              К выбору навеса
            </a>
          </div>
        </div>
      </section>

      {/* Catalog with filters */}
      <section id="catalog" className="max-w-screen-xl m-auto px-6 py-10 grid grid-cols-12 gap-6" aria-label="Каталог навесов">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 order-2 md:order-1">
          <div className="bg-white border border-gray-additional rounded p-4 sticky top-4">
            <div className="font-semibold mb-4">Фильтр</div>

            <div className="mb-5">
              <div className="text-sm text-gray-600 mb-2">Назначение</div>
              <div className="flex flex-col gap-2">
                {(Object.keys(TYPE_LABELS) as Array<keyof typeof TYPE_LABELS>).map((k) => (
                  <label key={k} className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-orange"
                      checked={filters.kinds.has(k)}
                      onChange={() => toggleKind(k)}
                    />
                    <span>{TYPE_LABELS[k]}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <div className="text-sm text-gray-600 mb-2">Форма</div>
              <div className="flex flex-col gap-2">
                {(Object.keys(SHAPE_LABELS) as Array<keyof typeof SHAPE_LABELS>).map((s) => (
                  <label key={s} className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-orange"
                      checked={filters.shapes.has(s)}
                      onChange={() => toggleShape(s)}
                    />
                    <span>{SHAPE_LABELS[s]}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={resetFilters}
              className="border border-gray-additional text-gray-700 px-4 py-2 w-full hover:bg-gray-50"
            >
              Сбросить фильтр
            </button>

            <div className="mt-6 flex items-center gap-3 p-3 border border-gray-additional rounded">
              <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden">
                <Image src="/img/handsome.jpg" alt="Менеджер" fill className="object-cover" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Александра</div>
                <div className="text-gray-600">Бесплатно помогу с выбором 24/7</div>
                <a href="tel:+74999386359" className="text-orange">+7 (499) 938-63-59</a>
              </div>
            </div>
          </div>
        </aside>

        {/* Products grid */}
        <div className="col-span-12 md:col-span-9 order-1 md:order-2">
          <Breadcrumbs items={[{ label: "Навесы" }]} />
          <h2 className="text-2xl font-bold mb-6">Каталог навесов</h2>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto mb-4"></div>
                <p className="text-gray-600">Загрузка товаров...</p>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <div className="text-red-600 mb-2">Ошибка загрузки</div>
                <p className="text-gray-600 text-sm">{error}</p>
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Товары не найдены</h3>
                <p className="text-gray-600 text-sm">В данный момент навесы недоступны. Попробуйте позже или свяжитесь с нами для получения информации.</p>
                <div className="mt-4">
                  <a href="tel:+74999386359" className="text-orange hover:underline">
                    +7 (499) 938-63-59
                  </a>
                </div>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Нет товаров по выбранным фильтрам</h3>
                <p className="text-gray-600 text-sm mb-4">Попробуйте изменить параметры поиска</p>
                <button
                  onClick={resetFilters}
                  className="bg-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
                >
                  Сбросить фильтры
                </button>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Список навесов">
              {filtered.map((product) => (
                <StrapiCard
                  key={product.id}
                  product={product}
                  categorySlug="canopies"
                  additionalImages={product.additionalImages}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <FormBlock />
      <PopularCategories />
    </main>
  );
}
