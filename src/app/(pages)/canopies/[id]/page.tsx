import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FormBlock from "@/app/HomeSections/FormBlock";
import PopularCategories from "@/app/HomeSections/PopularCategories";
import ProductTabs from "@/app/components/ProductTabs";
import PavilionGallery from "@/app/components/PavilionGallery";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import {
  CANOPY_PRODUCTS,
  SHAPE_LABEL,
  TYPE_LABEL,
  type CanopyShape,
  type CanopyType,
} from "@/app/contstants/canopiesCatalog";
import { productsApi, apiUtils } from "@/app/api/lib/api";

export async function generateStaticParams() {
  try {
    // Try to get products from API first
    const apiProducts = await productsApi.getByCategory('canopies');
    if (apiProducts.length > 0) {
      return apiProducts.map((p) => ({ id: String(p.id) }));
    }
  } catch (error) {
    console.error('Error generating static params from API:', error);
  }
  
  // Fallback to static products
  return CANOPY_PRODUCTS.map((p) => ({ id: String(p.id) }));
}

export default async function CanopyDetailsPage({ params }: any) {
  const { id } = await params;
  
  // Try to get product from API first
  let product = null;
  let isFromApi = false;
  
  try {
    product = await productsApi.getById(id);
    if (product) {
      isFromApi = true;
    }
  } catch (error) {
    console.error('Error fetching product from API:', error);
  }
  
  // Fallback to static data
  if (!product) {
    product = CANOPY_PRODUCTS.find((p) => String(p.id) === id);
    if (!product) return notFound();
  }

  // Prepare gallery images
  const gallery = isFromApi 
    ? [
        apiUtils.getImageUrl((product as any).image.url),
        ...((product as any).gallery?.map((img: any) => apiUtils.getImageUrl(img.url)) || []),
        ...((product as any).additionalImages?.map((img: any) => apiUtils.getImageUrl(img.url)) || [])
      ]
    : [(product as any).image, "/img/navesa-1.jpg", "/img/navesa-2.jpg"];

  // Get similar products
  let similar = [];
  try {
    if (isFromApi) {
      const allProducts = await productsApi.getByCategory('canopies');
      similar = allProducts.filter((p) => p.id !== product.id).slice(0, 4);
    } else {
      similar = CANOPY_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
    }
  } catch (error) {
    console.error('Error fetching similar products:', error);
    similar = CANOPY_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
  }

  return (
    <main className="bg-gray-light">
      <section className="max-w-screen-xl m-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* Sidebar placeholder for symmetry */}
        <aside className="hidden md:block col-span-3">
          <div className="bg-white border border-gray-additional rounded p-4 sticky top-4">
            <div className="font-semibold mb-2">Фильтр</div>
            <div className="text-sm text-gray-500">Используйте фильтры на странице каталога</div>
            <Link href="/canopies" className="mt-3 inline-block text-orange">Вернуться в каталог</Link>
          </div>
        </aside>

        {/* Content */}
        <div className="col-span-12 md:col-span-9">
          <Breadcrumbs
            items={[
              { label: "Навесы", href: "/canopies" },
              { label: `${SHAPE_LABEL[product.shape as CanopyShape]} навес ${product.title.toUpperCase()}` },
            ]}
          />
          <div className="grid grid-cols-12 gap-4">
            {/* Gallery */}
            <div className="col-span-12 lg:col-span-7">
              <PavilionGallery images={gallery} alt={product.title} />
            </div>

            {/* Info card */}
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-white rounded p-5 border border-gray-additional">
                <h1 className="text-base md:text-lg font-semibold text-black mb-3">
                  {SHAPE_LABEL[product.shape as CanopyShape]} навес {product.title.toUpperCase()}
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
                    <span className="text-gray-additional">Форма навеса:</span>{" "}
                    <span className="font-semibold text-black">{SHAPE_LABEL[product.shape as CanopyShape].toLowerCase()}</span>
                  </div>
                  <div>
                    <span className="text-gray-additional">Назначение:</span>{" "}
                    <span className="font-semibold text-black">{TYPE_LABEL[(isFromApi ? (product as any).type : (product as any).kind) as CanopyType].toLowerCase()}</span>
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
                    <li>Навес (полный комплект для сборки)</li>
                    <li>Гидроизоляция фундамента</li>
                    <li>Винтовые сваи (опционально)</li>
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
              isFromApi && (product as any).description ? (
                <div dangerouslySetInnerHTML={{ __html: (product as any).description }} />
              ) : (
                <>
                  Навесы — практичное решение для защиты автомобиля, террасы или крыльца
                  от осадков и солнца. Мы поможем подобрать оптимальную конструкцию по
                  размерам, форме и назначению, с учетом особенностей участка.
                </>
              )
            }
          />

          {/* Similar */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Похожие навесы</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similar.map((p) => (
                <article key={p.id} className="bg-white shadow rounded overflow-hidden">
                  <div className="relative h-40">
                    <Image 
                      src={isFromApi ? apiUtils.getImageUrl((p as any).image.url) : (p as any).image} 
                      alt={isFromApi ? ((p as any).image.alternativeText || p.title) : p.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="bg-gray-product text-white p-4">
                    <div className="font-semibold">{p.price.toLocaleString("ru-RU")} руб.</div>
                    <div className="text-sm text-gray-200">{p.title}</div>
                    <button className="mt-3 w-full bg-orange text-white py-2">
                      <Link href={`/canopies/${p.id}`}>Перейти</Link>
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


