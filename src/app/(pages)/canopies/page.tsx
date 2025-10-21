"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormBlock from "../../HomeSections/FormBlock";
import PopularCategories from "../../HomeSections/PopularCategories";
import CanopiesSeo from "../../components/CanopiesSeo";
import Breadcrumbs from "../../components/Breadcrumbs";
import {
  CANOPY_PRODUCTS as PRODUCTS,
  SHAPE_LABEL,
  TYPE_LABEL,
  type CanopyShape,
  type CanopyType,
} from "@/app/contstants/canopiesCatalog";

interface FiltersState {
  shapes: Set<CanopyShape>;
  kinds: Set<CanopyType>;
}

export default function CanopiesCatalogPage() {
  const [filters, setFilters] = useState<FiltersState>({
    shapes: new Set<CanopyShape>(),
    kinds: new Set<CanopyType>(),
  });

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const byShape = filters.shapes.size === 0 || filters.shapes.has(p.shape);
      const byKind = filters.kinds.size === 0 || filters.kinds.has(p.kind);
      return byShape && byKind;
    });
  }, [filters]);

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
                {(Object.keys(TYPE_LABEL) as Array<keyof typeof TYPE_LABEL>).map((k) => (
                  <label key={k} className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-orange"
                      checked={filters.kinds.has(k)}
                      onChange={() => toggleKind(k)}
                    />
                    <span>{TYPE_LABEL[k]}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <div className="text-sm text-gray-600 mb-2">Форма</div>
              <div className="flex flex-col gap-2">
                {(Object.keys(SHAPE_LABEL) as Array<keyof typeof SHAPE_LABEL>).map((s) => (
                  <label key={s} className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-orange"
                      checked={filters.shapes.has(s)}
                      onChange={() => toggleShape(s)}
                    />
                    <span>{SHAPE_LABEL[s]}</span>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Список навесов">
            {filtered.map((p) => (
              <article key={p.id} className="bg-white shadow rounded overflow-hidden" role="listitem">
                <div className="h-44 relative">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>

                <div className="bg-gray-product text-white p-4">
                  <div className="font-semibold">{p.price.toLocaleString("ru-RU")} руб.</div>
                  <div className="text-sm text-gray-200">{p.title}</div>
                  <div className="mt-3 text-xs text-gray-200">
                    Форма: {SHAPE_LABEL[p.shape]} • Назначение: {TYPE_LABEL[p.kind]}
                  </div>
                  <div className="text-xs text-gray-200">Площадь: {p.areaM2} м²</div>
                  <Link href={`/canopies/${p.id}`} className="mt-4 block w-full bg-orange text-white py-2 text-center hover:opacity-90">
                    Перейти
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FormBlock />
      <PopularCategories />
    </main>
  );
}
