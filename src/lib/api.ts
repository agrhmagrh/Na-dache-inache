import { strapi, formatStrapiResponse, getStrapiImageUrl } from './strapi';
import {
  StrapiResponse,
  StrapiProduct,
  StrapiCategory,
  StrapiMaterial,
  StrapiCompanyAdvantage,
  StrapiPageContent,
  StrapiSiteSettings,
  FormattedStrapiProduct,
  FormattedStrapiCategory,
  FormattedStrapiMaterial,
  FormattedStrapiCompanyAdvantage,
  FormattedStrapiPageContent,
  FormattedStrapiSiteSettings,
} from '@/types/strapi';

// API Query parameters
export interface ApiQueryParams {
  populate?: string | string[];
  filters?: Record<string, any>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  locale?: string;
}

// Products API
export const productsApi = {
  // Get all products
  async getAll(params?: ApiQueryParams): Promise<FormattedStrapiProduct[]> {
    try {
      const response = await strapi.find('products', {
        populate: params?.populate || ['image', 'gallery', 'category', 'material'],
        filters: params?.filters,
        sort: params?.sort || ['createdAt:desc'],
        pagination: params?.pagination,
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiProduct[]>(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  // Get product by ID
  async getById(id: number, params?: ApiQueryParams): Promise<FormattedStrapiProduct | null> {
    try {
      const response = await strapi.findOne('products', id, {
        populate: params?.populate || ['image', 'gallery', 'category', 'material'],
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiProduct>(response.data);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      return null;
    }
  },

  // Get product by slug
  async getBySlug(slug: string, params?: ApiQueryParams): Promise<FormattedStrapiProduct | null> {
    try {
      const response = await strapi.find('products', {
        filters: { slug: { $eq: slug } },
        populate: params?.populate || ['image', 'gallery', 'category', 'material'],
        locale: params?.locale,
      });

      const products = formatStrapiResponse<FormattedStrapiProduct[]>(response.data);
      return products.length > 0 ? products[0] : null;
    } catch (error) {
      console.error(`Error fetching product by slug ${slug}:`, error);
      return null;
    }
  },

  // Get products by category
  async getByCategory(categorySlug: string, params?: ApiQueryParams): Promise<FormattedStrapiProduct[]> {
    try {
      const response = await strapi.find('products', {
        filters: { 
          category: { slug: { $eq: categorySlug } },
          isActive: { $eq: true }
        },
        populate: params?.populate || ['image', 'gallery', 'category', 'material'],
        sort: params?.sort || ['createdAt:desc'],
        pagination: params?.pagination,
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiProduct[]>(response.data);
    } catch (error) {
      console.error(`Error fetching products by category ${categorySlug}:`, error);
      return [];
    }
  },

  // Get featured products
  async getFeatured(params?: ApiQueryParams): Promise<FormattedStrapiProduct[]> {
    try {
      const response = await strapi.find('products', {
        filters: { 
          isFeatured: { $eq: true },
          isActive: { $eq: true }
        },
        populate: params?.populate || ['image', 'gallery', 'category', 'material'],
        sort: params?.sort || ['createdAt:desc'],
        pagination: params?.pagination,
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiProduct[]>(response.data);
    } catch (error) {
      console.error('Error fetching featured products:', error);
      return [];
    }
  },
};

// Categories API
export const categoriesApi = {
  // Get all categories
  async getAll(params?: ApiQueryParams): Promise<FormattedStrapiCategory[]> {
    try {
      const response = await strapi.find('categories', {
        populate: params?.populate || ['image'],
        filters: params?.filters || { isActive: { $eq: true } },
        sort: params?.sort || ['name:asc'],
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiCategory[]>(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  // Get category by slug
  async getBySlug(slug: string, params?: ApiQueryParams): Promise<FormattedStrapiCategory | null> {
    try {
      const response = await strapi.find('categories', {
        filters: { slug: { $eq: slug } },
        populate: params?.populate || ['image'],
        locale: params?.locale,
      });

      const categories = formatStrapiResponse<FormattedStrapiCategory[]>(response.data);
      return categories.length > 0 ? categories[0] : null;
    } catch (error) {
      console.error(`Error fetching category by slug ${slug}:`, error);
      return null;
    }
  },
};

// Materials API
export const materialsApi = {
  // Get all materials
  async getAll(params?: ApiQueryParams): Promise<FormattedStrapiMaterial[]> {
    try {
      const response = await strapi.find('materials', {
        populate: params?.populate || ['image'],
        filters: params?.filters || { isActive: { $eq: true } },
        sort: params?.sort || ['name:asc'],
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiMaterial[]>(response.data);
    } catch (error) {
      console.error('Error fetching materials:', error);
      return [];
    }
  },
};

// Company advantages API
export const companyAdvantagesApi = {
  // Get all company advantages
  async getAll(params?: ApiQueryParams): Promise<FormattedStrapiCompanyAdvantage[]> {
    try {
      const response = await strapi.find('company-advantages', {
        populate: params?.populate || ['image'],
        filters: params?.filters || { isActive: { $eq: true } },
        sort: params?.sort || ['order:asc'],
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiCompanyAdvantage[]>(response.data);
    } catch (error) {
      console.error('Error fetching company advantages:', error);
      return [];
    }
  },
};

// Page content API
export const pageContentApi = {
  // Get page content by slug
  async getBySlug(slug: string, params?: ApiQueryParams): Promise<FormattedStrapiPageContent | null> {
    try {
      const response = await strapi.find('page-contents', {
        filters: { 
          slug: { $eq: slug },
          isActive: { $eq: true }
        },
        locale: params?.locale,
      });

      const pages = formatStrapiResponse<FormattedStrapiPageContent[]>(response.data);
      return pages.length > 0 ? pages[0] : null;
    } catch (error) {
      console.error(`Error fetching page content by slug ${slug}:`, error);
      return null;
    }
  },
};

// Site settings API
export const siteSettingsApi = {
  // Get site settings
  async get(): Promise<FormattedStrapiSiteSettings | null> {
    try {
      const response = await strapi.find('site-settings', {
        populate: ['logo'],
      });

      const settings = formatStrapiResponse<FormattedStrapiSiteSettings[]>(response.data);
      return settings.length > 0 ? settings[0] : null;
    } catch (error) {
      console.error('Error fetching site settings:', error);
      return null;
    }
  },
};

// Utility functions
export const apiUtils = {
  // Get full image URL
  getImageUrl: getStrapiImageUrl,
  
  // Format price
  formatPrice: (price: number): string => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(price);
  },
  
  // Generate slug from title
  generateSlug: (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  },
};
