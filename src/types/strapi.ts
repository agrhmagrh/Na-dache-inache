// Base Strapi types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiImage {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: string;
  url: string;
}

// Product types
export interface StrapiProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description?: string;
  shortDescription?: string;
  image: StrapiImage;
  gallery?: StrapiImage[];
  category: StrapiCategory;
  material?: StrapiMaterial;
  shape: string;
  type: string;
  size: string;
  areaM2: number;
  isActive: boolean;
  isFeatured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: StrapiImage;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiMaterial {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: StrapiImage;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Company advantage type
export interface StrapiCompanyAdvantage {
  id: number;
  title: string;
  description: string;
  image: StrapiImage;
  imagePosition: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Page content type
export interface StrapiPageContent {
  id: number;
  title: string;
  slug: string;
  content: string;
  seoTitle?: string;
  seoDescription?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Site settings type
export interface StrapiSiteSettings {
  id: number;
  siteName: string;
  siteDescription: string;
  logo?: StrapiImage;
  phone: string;
  email: string;
  whatsappLink: string;
  telegramLink: string;
  address?: string;
  workingHours?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Formatted types (after processing with formatStrapiResponse)
export type FormattedStrapiProduct = Omit<StrapiProduct, 'image' | 'gallery' | 'category' | 'material'> & {
  image: StrapiImage;
  gallery?: StrapiImage[];
  category: StrapiCategory;
  material?: StrapiMaterial;
};

export type FormattedStrapiCategory = StrapiCategory;
export type FormattedStrapiMaterial = StrapiMaterial;
export type FormattedStrapiCompanyAdvantage = StrapiCompanyAdvantage;
export type FormattedStrapiPageContent = StrapiPageContent;
export type FormattedStrapiSiteSettings = StrapiSiteSettings;
