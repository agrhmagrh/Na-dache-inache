/**
 * Примеры использования Strapi интеграции
 * Этот файл содержит примеры кода для работы с динамическими данными из Strapi
 */

import React from 'react';
import { 
  useProducts, 
  useProduct, 
  useProductBySlug, 
  useFeaturedProducts,
  useCategories,
  useMaterials,
  useCompanyAdvantages,
  useSiteSettings
} from '@/hooks';
import { productsApi, categoriesApi, apiUtils } from '@/lib/api';
import { StrapiCard } from '@/app/components/StrapiCard';
import { StrapiMaterialCard } from '@/app/components/StrapiMaterialCard';
import { StrapiAdvantageCard } from '@/app/components/StrapiAdvantageCard';

// Пример 1: Список товаров с фильтрацией по категории
export const ProductsListExample: React.FC = () => {
  const { products, loading, error } = useProducts('canopies');

  if (loading) return <div>Загрузка товаров...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <StrapiCard
          key={product.id}
          product={product}
          categorySlug="canopies"
        />
      ))}
    </div>
  );
};

// Пример 2: Детальная страница товара
export const ProductDetailExample: React.FC<{ slug: string }> = ({ slug }) => {
  const { product, loading, error } = useProductBySlug(slug);

  if (loading) return <div>Загрузка товара...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!product) return <div>Товар не найден</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="text-2xl font-bold text-blue-600 mb-4">
        {apiUtils.formatPrice(product.price)}
      </div>
      <p className="text-gray-600 mb-6">{product.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <span className="font-semibold">Размер:</span> {product.size}
        </div>
        <div>
          <span className="font-semibold">Площадь:</span> {product.areaM2} м²
        </div>
        <div>
          <span className="font-semibold">Форма:</span> {product.shape}
        </div>
        <div>
          <span className="font-semibold">Тип:</span> {product.type}
        </div>
      </div>
    </div>
  );
};

// Пример 3: Рекомендуемые товары
export const FeaturedProductsExample: React.FC = () => {
  const { products, loading, error } = useFeaturedProducts();

  if (loading) return <div>Загрузка рекомендуемых товаров...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        Рекомендуемые товары
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <StrapiCard
            key={product.id}
            product={product}
            categorySlug={product.category.slug}
          />
        ))}
      </div>
    </section>
  );
};

// Пример 4: Список категорий
export const CategoriesListExample: React.FC = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return <div>Загрузка категорий...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <nav className="flex space-x-4">
      {categories.map((category) => (
        <a
          key={category.id}
          href={`/${category.slug}`}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {category.name}
        </a>
      ))}
    </nav>
  );
};

// Пример 5: Материалы
export const MaterialsListExample: React.FC = () => {
  const { materials, loading, error } = useMaterials();

  if (loading) return <div>Загрузка материалов...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        Материалы
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <StrapiMaterialCard
            key={material.id}
            material={material}
          />
        ))}
      </div>
    </section>
  );
};

// Пример 6: Преимущества компании
export const CompanyAdvantagesExample: React.FC = () => {
  const { advantages, loading, error } = useCompanyAdvantages();

  if (loading) return <div>Загрузка преимуществ...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">
        Почему выбирают нас
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((advantage) => (
          <StrapiAdvantageCard
            key={advantage.id}
            advantage={advantage}
          />
        ))}
      </div>
    </section>
  );
};

// Пример 7: Настройки сайта
export const SiteSettingsExample: React.FC = () => {
  const { settings, loading, error } = useSiteSettings();

  if (loading) return <div>Загрузка настроек...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!settings) return <div>Настройки не найдены</div>;

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{settings.siteName}</h3>
            <p className="text-gray-300">{settings.siteDescription}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <p className="text-gray-300 mb-2">
              <a href={`tel:${settings.phone}`} className="hover:text-white">
                {settings.phone}
              </a>
            </p>
            <p className="text-gray-300 mb-2">
              <a href={`mailto:${settings.email}`} className="hover:text-white">
                {settings.email}
              </a>
            </p>
            {settings.address && (
              <p className="text-gray-300">{settings.address}</p>
            )}
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Связь</h4>
            <div className="space-y-2">
              <a
                href={settings.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white"
              >
                WhatsApp
              </a>
              <a
                href={settings.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Пример 8: Прямое использование API (без хуков)
export const DirectApiUsageExample: React.FC = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Получение товаров с дополнительными параметрами
        const data = await productsApi.getAll({
          populate: ['image', 'category', 'material'],
          filters: { isActive: { $eq: true } },
          sort: ['price:asc'],
          pagination: { page: 1, pageSize: 10 }
        });
        setProducts(data);
      } catch (error) {
        console.error('Ошибка загрузки товаров:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h2>Товары (прямое API)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-blue-600 font-bold">
              {apiUtils.formatPrice(product.price)}
            </p>
            <p className="text-sm text-gray-600">{product.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Пример 9: Поиск товаров
export const ProductSearchExample: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [searching, setSearching] = React.useState(false);

  const handleSearch = async (term: string) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setSearching(true);
      const results = await productsApi.getAll({
        filters: {
          $or: [
            { title: { $containsi: term } },
            { description: { $containsi: term } },
            { shortDescription: { $containsi: term } }
          ],
          isActive: { $eq: true }
        },
        populate: ['image', 'category']
      });
      setSearchResults(results);
    } catch (error) {
      console.error('Ошибка поиска:', error);
    } finally {
      setSearching(false);
    }
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      
      {searching && <div className="mt-4 text-center">Поиск...</div>}
      
      {searchResults.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">
            Результаты поиска ({searchResults.length})
          </h3>
          <div className="space-y-4">
            {searchResults.map((product: any) => (
              <div key={product.id} className="border p-4 rounded-lg">
                <h4 className="font-semibold">{product.title}</h4>
                <p className="text-blue-600 font-bold">
                  {apiUtils.formatPrice(product.price)}
                </p>
                <p className="text-sm text-gray-600">{product.size}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
