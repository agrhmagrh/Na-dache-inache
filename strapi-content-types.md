# Strapi Content Types Configuration

Этот файл содержит описание всех Content Types, которые необходимо создать в Strapi CMS для работы с сайтом.

## 1. Product (Продукты)

**Collection Type**: `products`

### Fields:
- `title` (Text) - Название товара
- `slug` (UID) - Уникальный URL-адрес
- `price` (Number) - Цена
- `description` (Rich Text) - Подробное описание
- `shortDescription` (Text) - Краткое описание
- `image` (Media) - Главное изображение
- `gallery` (Media) - Галерея изображений
- `category` (Relation) - Связь с Category
- `material` (Relation) - Связь с Material
- `shape` (Enumeration) - Форма: rectangle, square, arched, gable, leanTo, hexagon, octagon, round, japanese
- `type` (Enumeration) - Тип: carport, terrace, entrance, open, closed, bbq, bioclimatic, fabric, classic
- `size` (Text) - Размер (например: "4x6 м")
- `areaM2` (Number) - Площадь в квадратных метрах
- `isActive` (Boolean) - Активен ли товар
- `isFeatured` (Boolean) - Рекомендуемый товар
- `seoTitle` (Text) - SEO заголовок
- `seoDescription` (Text) - SEO описание

## 2. Category (Категории)

**Collection Type**: `categories`

### Fields:
- `name` (Text) - Название категории
- `slug` (UID) - Уникальный URL-адрес
- `description` (Rich Text) - Описание категории
- `image` (Media) - Изображение категории
- `isActive` (Boolean) - Активна ли категория

## 3. Material (Материалы)

**Collection Type**: `materials`

### Fields:
- `name` (Text) - Название материала
- `slug` (UID) - Уникальный URL-адрес
- `description` (Rich Text) - Описание материала
- `image` (Media) - Изображение материала
- `isActive` (Boolean) - Активен ли материал

## 4. Company Advantage (Преимущества компании)

**Collection Type**: `company-advantages`

### Fields:
- `title` (Text) - Заголовок преимущества
- `description` (Rich Text) - Описание преимущества
- `image` (Media) - Изображение
- `imagePosition` (Text) - CSS класс для позиционирования изображения
- `order` (Number) - Порядок сортировки
- `isActive` (Boolean) - Активно ли преимущество

## 5. Page Content (Контент страниц)

**Collection Type**: `page-contents`

### Fields:
- `title` (Text) - Заголовок страницы
- `slug` (UID) - Уникальный URL-адрес
- `content` (Rich Text) - Содержимое страницы
- `seoTitle` (Text) - SEO заголовок
- `seoDescription` (Text) - SEO описание
- `isActive` (Boolean) - Активна ли страница

## 6. Site Settings (Настройки сайта)

**Single Type**: `site-settings`

### Fields:
- `siteName` (Text) - Название сайта
- `siteDescription` (Text) - Описание сайта
- `logo` (Media) - Логотип
- `phone` (Text) - Телефон
- `email` (Email) - Email
- `whatsappLink` (Text) - Ссылка на WhatsApp
- `telegramLink` (Text) - Ссылка на Telegram
- `address` (Text) - Адрес
- `workingHours` (Text) - Часы работы

## Настройка API Permissions

Для каждого Content Type необходимо настроить разрешения:

### Public Role:
- `find` - разрешено
- `findOne` - разрешено

### Authenticated Role:
- Все операции разрешены

## Настройка Media Library

Убедитесь, что Media Library настроена для загрузки изображений:
- Поддерживаемые форматы: jpg, jpeg, png, webp
- Максимальный размер файла: 10MB
- Автоматическое создание превью

## Примеры данных

### Категории:
- canopies (Навесы)
- pavilions (Беседки)
- pergolas (Перголы)
- pantries (Хоз. помещения)

### Материалы:
- wood (Дерево)
- metal (Металл)
- fabric (Ткань)
- composite (ДПК)

### Формы товаров:
- rectangle (Прямоугольный)
- square (Квадратный)
- arched (Арочный)
- gable (Двухскатный)
- leanTo (Односкатный)
- hexagon (Шестигранный)
- octagon (Восьмигранный)
- round (Круглый)
- japanese (Японский)

### Типы товаров:
- carport (Автонавес)
- terrace (Терраса)
- entrance (Крыльцо)
- open (Открытая)
- closed (Закрытая)
- bbq (С барбекю)
- bioclimatic (Биоклиматическая)
- fabric (С тканью)
- classic (Классическая)
