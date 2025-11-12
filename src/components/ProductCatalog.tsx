'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useProducts } from '@/hooks/useProducts';
import { StrapiCard } from '../app/components/StrapiCard';
import ProductsLoadingState from './ProductsLoadingState';
import Breadcrumbs from '../app/components/Breadcrumbs';
import Pagination from './Pagination';

interface FilterOption {
  key: string;
  label: string;
}

interface ProductCatalogProps {
  categorySlug: string;
  title: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  breadcrumbLabel: string;
  typeFilters?: FilterOption[];
  shapeFilters?: FilterOption[];
  seoComponent?: React.ComponentType;
}

interface FiltersState {
  types: Set<string>;
  shapes: Set<string>;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  categorySlug,
  title,
  heroImage,
  heroTitle,
  heroSubtitle,
  heroButtonText,
  breadcrumbLabel,
  typeFilters = [],
  shapeFilters = [],
  seoComponent: SeoComponent,
}) => {
  const { products, loading, error } = useProducts(categorySlug);
  const [filters, setFilters] = useState<FiltersState>({
    types: new Set<string>(),
    shapes: new Set<string>(),
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter products
  const filtered = products.filter((p) => {
    const byType = filters.types.size === 0 || filters.types.has(p.type);
    const byShape = filters.shapes.size === 0 || filters.shapes.has(p.shape);
    return byType && byShape;
  });

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }, [filtered, currentPage]);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const toggleType = (type: string) => {
    setFilters((prev) => {
      const next = new Set(prev.types);
      next.has(type) ? next.delete(type) : next.add(type);
      return { ...prev, types: next };
    });
  };

  const toggleShape = (shape: string) => {
    setFilters((prev) => {
      const next = new Set(prev.shapes);
      next.has(shape) ? next.delete(shape) : next.add(shape);
      return { ...prev, shapes: next };
    });
  };

  const resetFilters = () =>
    setFilters({ types: new Set<string>(), shapes: new Set<string>() });

  return (
    <main className="bg-gray-light">
      {SeoComponent && <SeoComponent />}
      
      {/* Hero banner */}
      <section 
        className="bg-cover bg-center" 
        style={{ backgroundImage: `url('${heroImage}')` }}
        aria-label="Главный баннер"
      >
        <div className="bg-black/40">
          <div className="max-w-screen-xl m-auto px-6 py-12 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">
              {heroTitle}
            </h1>
            <p className="md:text-xl mb-6">
              {heroSubtitle}
            </p>
            <a
              href="#catalog"
              className="inline-block bg-orange text-white px-6 py-3 rounded-sm hover:opacity-90"
            >
              {heroButtonText}
            </a>
          </div>
        </div>
      </section>

      {/* Catalog with filters */}
      <section id="catalog" className="max-w-screen-xl m-auto px-6 py-10 grid grid-cols-12 gap-6" aria-label={`Каталог ${title.toLowerCase()}`}>
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 order-2 md:order-1">
          <div className="bg-white border border-gray-additional rounded p-4 sticky top-4">
            <div className="font-semibold mb-4">Фильтр</div>

            {typeFilters.length > 0 && (
              <div className="mb-5">
                <div className="text-sm text-gray-600 mb-2">Тип</div>
                <div className="flex flex-col gap-2">
                  {typeFilters.map((filter) => (
                    <label key={filter.key} className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="accent-orange"
                        checked={filters.types.has(filter.key)}
                        onChange={() => toggleType(filter.key)}
                      />
                      <span>{filter.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {shapeFilters.length > 0 && (
              <div className="mb-5">
                <div className="text-sm text-gray-600 mb-2">Форма</div>
                <div className="flex flex-col gap-2">
                  {shapeFilters.map((filter) => (
                    <label key={filter.key} className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="accent-orange"
                        checked={filters.shapes.has(filter.key)}
                        onChange={() => toggleShape(filter.key)}
                      />
                      <span>{filter.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

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
        <ProductsLoadingState loading={loading} error={error}>
          <div className="col-span-12 md:col-span-9 order-1 md:order-2">
            <Breadcrumbs items={[{ label: breadcrumbLabel }]} />
            <h2 className="text-2xl font-bold mb-6">{title}</h2>

            {filtered.length === 0 && !loading && !error ? (
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
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label={`Список ${title.toLowerCase()}`}>
                  {paginatedProducts.map((product) => (
                    <StrapiCard
                      key={product.id}
                      product={product}
                      categorySlug={categorySlug}
                      additionalImages={product.additionalImages}
                    />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </ProductsLoadingState>
      </section>
    </main>
  );
};