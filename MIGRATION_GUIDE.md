# Руководство по миграции на Strapi CMS

Этот документ описывает пошаговый процесс миграции существующего проекта на Strapi CMS.

## Этапы миграции

### 1. Подготовка Strapi

#### 1.1 Установка и настройка Strapi

```bash
# Создание нового проекта Strapi
npx create-strapi-app@latest nadache-strapi --quickstart
cd nadache-strapi
npm run develop
```

#### 1.2 Создание Content Types

Создайте следующие Content Types в админ-панели Strapi (http://localhost:1337/admin):

**Product (products)**
- title: Text
- slug: UID (target: title)
- price: Number
- description: Rich Text
- shortDescription: Text
- image: Media (Single)
- gallery: Media (Multiple)
- category: Relation (Many-to-One with Category)
- material: Relation (Many-to-One with Material)
- shape: Enumeration (rectangle, square, arched, gable, leanTo, hexagon, octagon, round, japanese)
- type: Enumeration (carport, terrace, entrance, open, closed, bbq, bioclimatic, fabric, classic)
- size: Text
- areaM2: Number
- isActive: Boolean (default: true)
- isFeatured: Boolean (default: false)
- seoTitle: Text
- seoDescription: Text

**Category (categories)**
- name: Text
- slug: UID (target: name)
- description: Rich Text
- image: Media (Single)
- isActive: Boolean (default: true)

**Material (materials)**
- name: Text
- slug: UID (target: name)
- description: Rich Text
- image: Media (Single)
- isActive: Boolean (default: true)

**Company Advantage (company-advantages)**
- title: Text
- description: Rich Text
- image: Media (Single)
- imagePosition: Text
- order: Number
- isActive: Boolean (default: true)

**Page Content (page-contents)**
- title: Text
- slug: UID (target: title)
- content: Rich Text
- seoTitle: Text
- seoDescription: Text
- isActive: Boolean (default: true)

**Site Settings (site-settings) - Single Type**
- siteName: Text
- siteDescription: Text
- logo: Media (Single)
- phone: Text
- email: Email
- whatsappLink: Text
- telegramLink: Text
- address: Text
- workingHours: Text

#### 1.3 Настройка API Permissions

В Settings > Users & Permissions Plugin > Roles > Public:

- products: find, findOne ✓
- categories: find, findOne ✓
- materials: find, findOne ✓
- company-advantages: find, findOne ✓
- page-contents: find, findOne ✓
- site-settings: find ✓

#### 1.4 Создание API Token

1. Settings > API Tokens
2. Create new token
3. Name: "Frontend Access"
4. Token type: Read-only
5. Copy token

### 2. Настройка Next.js проекта

#### 2.1 Переменные окружения

Создайте `.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_token_here
```

#### 2.2 Проверка интеграции

Запустите проект и проверьте работу:

```bash
npm run dev
```

### 3. Импорт данных

#### 3.1 Создание скрипта импорта

Создайте файл `scripts/import-data.js`:

```javascript
const { createStrapiClient } = require('@strapi/sdk-js');

const strapi = createStrapiClient({
  url: 'http://localhost:1337',
  apiToken: 'your_token_here',
});

// Импорт категорий
const categories = [
  { name: 'Навесы', slug: 'canopies', description: 'Качественные навесы на заказ' },
  { name: 'Беседки', slug: 'pavilions', description: 'Деревянные беседки для дачи' },
  { name: 'Перголы', slug: 'pergolas', description: 'Современные перголы' },
  { name: 'Хоз. помещения', slug: 'pantries', description: 'Помещения хозяйственного назначения' }
];

// Импорт материалов
const materials = [
  { 
    name: 'Дерево', 
    slug: 'wood', 
    description: 'Навесы из натурального дерева придают вашему участку уют и натуральность...' 
  },
  { 
    name: 'Металл', 
    slug: 'metal', 
    description: 'Металлические навесы обладают прочностью и долговечностью...' 
  },
  { 
    name: 'Ткань', 
    slug: 'fabric', 
    description: 'Навесы с тканевым навесом обеспечивают легкость и воздушность...' 
  }
];

// Импорт товаров (пример для навесов)
const canopies = [
  {
    title: 'Навес №1',
    slug: 'canopy-1',
    price: 189900,
    description: 'Качественный односкатный навес для автомобиля',
    shortDescription: 'Односкатный навес 3x6 м',
    size: '3x6 м',
    areaM2: 18,
    shape: 'leanTo',
    type: 'carport',
    isActive: true,
    isFeatured: true
  },
  // ... остальные товары
];

async function importData() {
  try {
    // Импорт категорий
    console.log('Импорт категорий...');
    for (const category of categories) {
      await strapi.create('categories', { data: category });
      console.log(`Категория "${category.name}" создана`);
    }

    // Импорт материалов
    console.log('Импорт материалов...');
    for (const material of materials) {
      await strapi.create('materials', { data: material });
      console.log(`Материал "${material.name}" создан`);
    }

    // Импорт товаров
    console.log('Импорт товаров...');
    for (const product of canopies) {
      await strapi.create('products', { data: product });
      console.log(`Товар "${product.title}" создан`);
    }

    console.log('Импорт завершен успешно!');
  } catch (error) {
    console.error('Ошибка импорта:', error);
  }
}

importData();
```

#### 3.2 Загрузка изображений

1. Загрузите изображения в Media Library Strapi
2. Обновите товары, добавив ссылки на изображения

### 4. Обновление компонентов

#### 4.1 Замена статических компонентов

Замените импорты в существующих компонентах:

```tsx
// Было
import { CANOPY_PRODUCTS } from '@/app/contstants/canopiesCatalog';

// Стало
import { useProducts } from '@/hooks';
```

#### 4.2 Обновление страниц

Обновите страницы для использования динамических данных:

```tsx
// Пример обновления страницы навесов
import { StrapiCanopiesPage } from './StrapiCanopiesPage';

export default function CanopiesPage() {
  return <StrapiCanopiesPage />;
}
```

### 5. Тестирование

#### 5.1 Проверка API

```bash
# Проверка доступности API
curl -H "Authorization: Bearer YOUR_TOKEN" \
     http://localhost:1337/api/products

# Проверка конкретного товара
curl -H "Authorization: Bearer YOUR_TOKEN" \
     http://localhost:1337/api/products/1?populate=*
```

#### 5.2 Проверка фронтенда

1. Откройте http://localhost:3111
2. Проверьте загрузку товаров
3. Проверьте детальные страницы
4. Проверьте фильтрацию по категориям

### 6. Развертывание

#### 6.1 Strapi в продакшене

```bash
# Сборка Strapi
npm run build
npm run start

# Или с PM2
pm2 start ecosystem.config.js
```

#### 6.2 Next.js в продакшене

```bash
# Сборка Next.js
npm run build
npm run start
```

#### 6.3 Переменные окружения

Обновите переменные для продакшена:

```env
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain.com
STRAPI_API_TOKEN=your_production_token
```

### 7. Мониторинг

#### 7.1 Логи

Настройте мониторинг логов:
- Strapi логи
- Next.js логи
- API ошибки

#### 7.2 Производительность

- Кэширование API ответов
- Оптимизация изображений
- CDN для статических файлов

## Полезные команды

### Strapi

```bash
# Запуск в режиме разработки
npm run develop

# Сборка для продакшена
npm run build
npm run start

# Сброс базы данных
npm run strapi database:reset
```

### Next.js

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build
npm run start

# Очистка кэша
npm run clean
```

## Решение проблем

### Ошибка CORS

Добавьте в `config/middlewares.js`:

```javascript
module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:3111', 'https://your-domain.com']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### Ошибка загрузки изображений

Проверьте настройки Media Library в `config/plugins.js`:

```javascript
module.exports = {
  upload: {
    config: {
      sizeLimit: 10 * 1024 * 1024, // 10MB
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
    },
  },
};
```

### Проблемы с API токенами

1. Проверьте правильность токена
2. Убедитесь в правильности URL Strapi
3. Проверьте настройки permissions

## Заключение

После выполнения всех этапов миграции:

1. ✅ Strapi CMS настроен и работает
2. ✅ Все Content Types созданы
3. ✅ Данные импортированы
4. ✅ Next.js интегрирован с Strapi
5. ✅ Компоненты обновлены
6. ✅ Проект развернут в продакшене

Теперь вы можете управлять всем контентом через админ-панель Strapi, а сайт будет автоматически получать обновленные данные.
