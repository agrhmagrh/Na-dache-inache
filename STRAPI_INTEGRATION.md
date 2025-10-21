# Интеграция с Strapi CMS

Этот документ описывает настройку интеграции проекта с Strapi CMS для управления контентом.

## Предварительные требования

1. Node.js 18+ 
2. Strapi CMS установлен и настроен
3. База данных (PostgreSQL, MySQL, SQLite)

## Настройка Strapi

### 1. Установка Strapi

```bash
npx create-strapi-app@latest my-strapi-project --quickstart
cd my-strapi-project
npm run develop
```

### 2. Создание Content Types

Создайте следующие Content Types в админ-панели Strapi согласно файлу `strapi-content-types.md`:

- **Product** (products)
- **Category** (categories) 
- **Material** (materials)
- **Company Advantage** (company-advantages)
- **Page Content** (page-contents)
- **Site Settings** (site-settings) - Single Type

### 3. Настройка API Permissions

В разделе Settings > Users & Permissions Plugin > Roles:

**Public Role:**
- products: find, findOne
- categories: find, findOne
- materials: find, findOne
- company-advantages: find, findOne
- page-contents: find, findOne
- site-settings: find

### 4. Создание API Token

1. Перейдите в Settings > API Tokens
2. Создайте новый токен с правами Read
3. Скопируйте токен для использования в проекте

## Настройка Next.js проекта

### 1. Переменные окружения

Создайте файл `.env.local` в корне проекта:

```env
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here

# For production
# NEXT_PUBLIC_STRAPI_URL=https://your-strapi-instance.com
```

### 2. Установка зависимостей

Зависимости уже установлены в проекте:
- `@strapi/sdk-js` - для работы с Strapi API

## Структура интеграции

### API Layer
- `src/lib/strapi.ts` - конфигурация Strapi клиента
- `src/lib/api.ts` - API методы для работы с данными
- `src/types/strapi.ts` - TypeScript типы для Strapi

### Hooks
- `src/hooks/useProducts.ts` - хуки для работы с товарами
- `src/hooks/useCategories.ts` - хуки для работы с категориями
- `src/hooks/useMaterials.ts` - хуки для работы с материалами
- `src/hooks/useCompanyAdvantages.ts` - хуки для преимуществ
- `src/hooks/useSiteSettings.ts` - хуки для настроек сайта

### Components
- `src/app/components/StrapiCard.tsx` - карточка товара
- `src/app/components/StrapiMaterialCard.tsx` - карточка материала
- `src/app/components/StrapiAdvantageCard.tsx` - карточка преимущества

### Pages
- `src/app/(pages)/canopies/StrapiCanopiesPage.tsx` - страница навесов
- `src/app/(pages)/canopies/[id]/StrapiCanopyDetailPage.tsx` - детальная страница

## Миграция данных

### 1. Импорт существующих данных

Создайте скрипт для импорта данных из статических файлов в Strapi:

```javascript
// scripts/import-data.js
const { productsApi, categoriesApi, materialsApi } = require('./src/lib/api');

// Импорт категорий
const categories = [
  { name: 'Навесы', slug: 'canopies' },
  { name: 'Беседки', slug: 'pavilions' },
  { name: 'Перголы', slug: 'pergolas' },
  { name: 'Хоз. помещения', slug: 'pantries' }
];

// Импорт материалов
const materials = [
  { name: 'Дерево', slug: 'wood', description: '...' },
  { name: 'Металл', slug: 'metal', description: '...' },
  { name: 'Ткань', slug: 'fabric', description: '...' }
];

// Импорт товаров
const products = [
  // Данные из canopiesCatalog.ts, pavilionsCatalog.ts, etc.
];
```

### 2. Загрузка изображений

1. Загрузите изображения в Media Library Strapi
2. Обновите ссылки на изображения в товарах

## Использование

### В компонентах

```tsx
import { useProducts, useCategories } from '@/hooks';

export const MyComponent = () => {
  const { products, loading, error } = useProducts('canopies');
  const { categories } = useCategories();

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      {products.map(product => (
        <StrapiCard key={product.id} product={product} categorySlug="canopies" />
      ))}
    </div>
  );
};
```

### API методы

```tsx
import { productsApi, apiUtils } from '@/lib/api';

// Получение всех товаров
const products = await productsApi.getAll();

// Получение товаров по категории
const canopies = await productsApi.getByCategory('canopies');

// Получение товара по ID
const product = await productsApi.getById(1);

// Получение товара по slug
const product = await productsApi.getBySlug('canopy-1');

// Форматирование цены
const formattedPrice = apiUtils.formatPrice(150000); // "150 000 ₽"

// Получение URL изображения
const imageUrl = apiUtils.getImageUrl('/uploads/image.jpg');
```

## Развертывание

### 1. Strapi в продакшене

```bash
# Сборка Strapi
npm run build
npm run start
```

### 2. Next.js в продакшене

```bash
# Сборка Next.js
npm run build
npm run start
```

### 3. Переменные окружения

Обновите переменные окружения для продакшена:

```env
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-instance.com
STRAPI_API_TOKEN=your_production_api_token
```

## Мониторинг и отладка

### 1. Логи

Включите логирование в Strapi:

```javascript
// config/logger.js
module.exports = {
  level: 'debug',
  exposeInContext: true,
  requests: true,
};
```

### 2. API тестирование

Используйте Postman или curl для тестирования API:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     http://localhost:1337/api/products
```

## Безопасность

1. Используйте HTTPS в продакшене
2. Ограничьте доступ к админ-панели Strapi
3. Регулярно обновляйте API токены
4. Настройте CORS для вашего домена

## Поддержка

При возникновении проблем:

1. Проверьте логи Strapi и Next.js
2. Убедитесь в правильности настроек API permissions
3. Проверьте переменные окружения
4. Убедитесь в доступности Strapi API
