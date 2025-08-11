import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FormBlock from "@/app/HomeSections/FormBlock";
import PopularCategories from "@/app/HomeSections/PopularCategories";
import ProductTabs from "@/app/components/ProductTabs";
import PavilionGallery from "@/app/components/PavilionGallery";
import {
  PERGOLA_PRODUCTS,
  SHAPE_LABEL,
  TYPE_LABEL,
} from "@/app/contstants/pergolsCatalog";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return PERGOLA_PRODUCTS.map((p) => ({ id: String(p.id) }));
}

export default function PergolaDetailsPage({ params }: Props) {
  const product = PERGOLA_PRODUCTS.find((p) => String(p.id) === params.id);
  if (!product) return notFound();

  const gallery = [product.image, "/img/pergola-1.jpg", "/img/pergola-2.jpg"]; // простая заглушка
  const similar = PERGOLA_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="bg-gray-light">
      <section className="max-w-screen-xl m-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* Sidebar placeholder for symmetry */}
        <aside className="hidden md:block col-span-3">
          <div className="bg-white border border-gray-additional rounded p-4 sticky top-4">
            <div className="font-semibold mb-2">Фильтр</div>
            <div className="text-sm text-gray-500">Используйте фильтры на странице каталога</div>
            <Link href="/pergols" className="mt-3 inline-block text-orange">Вернуться в каталог</Link>
          </div>
        </aside>

        {/* Content */}
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-12 gap-4">
            {/* Gallery */}
            <div className="col-span-12 lg:col-span-7">
              <PavilionGallery images={gallery} alt={product.title} />
            </div>

            {/* Info card */}
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-white rounded p-5 border border-gray-additional">
                <h1 className="text-base md:text-lg font-semibold text-black mb-3">
                  {SHAPE_LABEL[product.shape]} пергола {product.title.toUpperCase()}
                </h1>

                <div className="space-y-1.5 text-sm mb-4">
                  <div>
                    <span className="text-gray-additional">Внешние размеры:</span>{" "}
                    <span className="font-semibold text-black">{product.size}</span>
                  </div>
                  <div>
                    <span className="text-gray-additional">Площадь:</span>{" "}
                    <span className="font-semibold text-black">{product.areaM2} м2</span>
                  </div>
                  <div>
                    <span className="text-gray-additional">Форма:</span>{" "}
                    <span className="font-semibold text-black">{SHAPE_LABEL[product.shape].toLowerCase()}</span>
                  </div>
                  <div>
                    <span className="text-gray-additional">Тип:</span>{" "}
                    <span className="font-semibold text-black">{TYPE_LABEL[product.kind].toLowerCase()}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-additional">Цена за комплект</div>
                <div className="text-3xl font-semibold text-black mt-1">
                  {product.price.toLocaleString("ru-RU")} руб.
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <button className="bg-orange text-white py-2 font-semibold">Заказать</button>
                  <button className="bg-gray-dark text-white py-2 font-semibold">Консультация</button>
                </div>

                <div className="mt-5">
                  <div className="font-semibold text-black mb-1">Комплектация:</div>
                  <ul className="space-y-1 text-sm text-gray-additional">
                    <li>Каркас, крепеж, кровельный материал</li>
                    <li>Опоры и анкера</li>
                    <li>Доп. опции: подсветка, шторы, остекление</li>
                  </ul>
                  <button className="text-black mt-2">Читать подробнее</button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <ProductTabs
            className="mt-6"
            description={
              <>
                Пергола формирует уютную зону отдыха и защищает от солнца и осадков.
                Подберем решение по стилю, бюджету и требованиям участка. Возможна
                индивидуальная доработка проекта.
              </>
            }
          />

          {/* Similar */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Похожие перголы</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similar.map((p) => (
                <article key={p.id} className="bg-white shadow rounded overflow-hidden">
                  <div className="relative h-40">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="bg-gray-product text-white p-4">
                    <div className="font-semibold">{p.price.toLocaleString("ru-RU")} руб.</div>
                    <div className="text-sm text-gray-200">{p.title}</div>
                    <button className="mt-3 w-full bg-orange text-white py-2">
                      <Link href={`/pergols/${p.id}`}>Перейти</Link>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <FormBlock />
      <PopularCategories />
    </main>
  );
}


