import { client, formatStrapiResponse, getStrapiImageUrl, getImagesByDocumentIds } from "./strapi";
import {
  FormattedStrapiProduct,
  FormattedStrapiCategory,
  FormattedStrapiMaterial,
  FormattedStrapiCompanyAdvantage,
  FormattedStrapiPageContent,
  FormattedStrapiSiteSettings,
} from "@/types/strapi";

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
const products = client.collection("products");
// Products API
export const productsApi = {
  // Get all products
  async getAll(params?: ApiQueryParams): Promise<FormattedStrapiProduct[]> {
    try {
      const response = await products.find({
        populate: params?.populate || [
          "image",
          "gallery",
          "category",
          "material",
        ],
        filters: params?.filters,
        sort: params?.sort || ["createdAt:desc"],
        pagination: params?.pagination,
        locale: params?.locale,
      });

      const productsData = formatStrapiResponse<FormattedStrapiProduct[]>(response.data);
      
      // Get document IDs for fetching additional images
      const documentIds = productsData.map((product: FormattedStrapiProduct) => product.id.toString());
      
      // Fetch additional images from files API
      const imagesMap = await getImagesByDocumentIds(documentIds);
      
      // Add additional images to each product
      const productsWithImages = productsData.map((product: FormattedStrapiProduct) => ({
        ...product,
        additionalImages: imagesMap.get(product.id.toString()) || []
      }));
      
      return productsWithImages;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },

  // Get product by ID
  async getById(
    id: string,
    params?: ApiQueryParams
  ): Promise<FormattedStrapiProduct | null> {
    try {
      const response = await products.findOne(id, {
        populate: params?.populate || [
          "image",
          "gallery",
          "category",
          "material",
        ],
        locale: params?.locale,
      });

      const product = formatStrapiResponse<FormattedStrapiProduct>(response.data);
      
      // Fetch additional images from files API
      const imagesMap = await getImagesByDocumentIds([id]);
      
      // Add additional images to product
      return {
        ...product,
        additionalImages: imagesMap.get(id) || []
      };
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      return null;
    }
  },

  // Get product by slug
  async getBySlug(
    slug: string,
    params?: ApiQueryParams
  ): Promise<FormattedStrapiProduct | null> {
    try {
      const response = await products.find({
        populate: params?.populate || [
          "image",
          "gallery",
          "category",
          "material",
        ],
        filters: {
          ...(params?.filters || {}),
          slug: { $eq: slug },
        },
        locale: params?.locale,
      });

      const items = formatStrapiResponse<FormattedStrapiProduct[]>(
        response.data
      );

      if (items.length === 0) return null;
      
      const product = items[0];
      
      // Fetch additional images from files API
      const imagesMap = await getImagesByDocumentIds([product.id.toString()]);
      
      // Add additional images to product
      return {
        ...product,
        additionalImages: imagesMap.get(product.id.toString()) || []
      };
    } catch (error) {
      console.error(`Error fetching product by slug ${slug}:`, error);
      return null;
    }
  },

  // Get products by category slug
  async getByCategory(
    categorySlug: string,
    params?: ApiQueryParams
  ): Promise<FormattedStrapiProduct[]> {
    try {
      const response = await products.find({
        populate: params?.populate || [
          "image",
          "gallery",
          "category",
          "materials",
        ],
        filters: {
          ...(params?.filters || {}),
          category: {
            slug: { $eq: categorySlug },
          },
        },
        sort: params?.sort || ["createdAt:desc"],
        pagination: params?.pagination,
        locale: params?.locale,
      });

      const productsData = formatStrapiResponse<FormattedStrapiProduct[]>(response.data);
      
      // Get document IDs for fetching additional images
      const documentIds = productsData.map((product: FormattedStrapiProduct) => product.id.toString());
      
      // Fetch additional images from files API
      const imagesMap = await getImagesByDocumentIds(documentIds);
      
      // Add additional images to each product
      const productsWithImages = productsData.map((product: FormattedStrapiProduct) => ({
        ...product,
        additionalImages: imagesMap.get(product.id.toString()) || []
      }));
      
      return productsWithImages;
    } catch (error) {
      console.error(
        `Error fetching products by category ${categorySlug}:`,
        error
      );
      return [];
    }
  },
};

// Categories API
const categories = client.collection("categories");
export const categoriesApi = {
  // Get all categories
  async getAll(params?: ApiQueryParams): Promise<FormattedStrapiCategory[]> {
    try {
      const response = await categories.find({
        populate: params?.populate || ["image"],
        filters: params?.filters,
        sort: params?.sort || ["order:asc"],
        pagination: params?.pagination,
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiCategory[]>(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  },

  // Get category by ID
  async getById(
    id: string,
    params?: ApiQueryParams
  ): Promise<FormattedStrapiCategory | null> {
    try {
      const response = await categories.findOne(id, {
        populate: params?.populate || ["image"],
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiCategory>(response.data);
    } catch (error) {
      console.error(`Error fetching category ${id}:`, error);
      return null;
    }
  },

  // Get category by slug
  async getBySlug(
    slug: string,
    params?: ApiQueryParams
  ): Promise<FormattedStrapiCategory | null> {
    try {
      const response = await categories.find({
        populate: params?.populate || ["image"],
        filters: {
          ...(params?.filters || {}),
          slug: { $eq: slug },
        },
        locale: params?.locale,
      });

      const items = formatStrapiResponse<FormattedStrapiCategory[]>(
        response.data
      );
      return items.length > 0 ? items[0] : null;
    } catch (error) {
      console.error(`Error fetching category by slug ${slug}:`, error);
      return null;
    }
  },
};

// Materials API
const materials = client.collection("materials");
export const materialsApi = {
  // Get all materials
  async getAll(params?: ApiQueryParams): Promise<FormattedStrapiMaterial[]> {
    try {
      const response = await materials.find({
        populate: params?.populate || ["image"],
        filters: params?.filters || { isActive: { $eq: true } },
        sort: params?.sort || ["name:asc"],
        pagination: params?.pagination,
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiMaterial[]>(response.data);
    } catch (error) {
      console.error("Error fetching materials:", error);
      return [];
    }
  },

  // Get material by ID
  async getById(
    id: string,
    params?: ApiQueryParams
  ): Promise<FormattedStrapiMaterial | null> {
    try {
      const response = await materials.findOne(id, {
        populate: params?.populate || ["image"],
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiMaterial>(response.data);
    } catch (error) {
      console.error(`Error fetching material ${id}:`, error);
      return null;
    }
  },

  // Get material by slug
  async getBySlug(
    slug: string,
    params?: ApiQueryParams
  ): Promise<FormattedStrapiMaterial | null> {
    try {
      const response = await materials.find({
        populate: params?.populate || ["image"],
        filters: {
          ...(params?.filters || {}),
          slug: { $eq: slug },
        },
        locale: params?.locale,
      });

      const items = formatStrapiResponse<FormattedStrapiMaterial[]>(
        response.data
      );

      return items.length > 0 ? items[0] : null;
    } catch (error) {
      console.error(`Error fetching material by slug ${slug}:`, error);
      return null;
    }
  },
};

// Company Advantages API
const companyAdvantages = client.collection("company-advantages");
export const companyAdvantagesApi = {
  // Get all company advantages
  async getAll(
    params?: ApiQueryParams
  ): Promise<FormattedStrapiCompanyAdvantage[]> {
    try {
      const response = await companyAdvantages.find({
        populate: params?.populate || ["image"],
        filters: params?.filters || { isActive: { $eq: true } },
        sort: params?.sort || ["order:asc"],
        pagination: params?.pagination,
        locale: params?.locale,
      });

      return formatStrapiResponse<FormattedStrapiCompanyAdvantage[]>(
        response.data
      );
    } catch (error) {
      console.error("Error fetching company advantages:", error);
      return [];
    }
  },
};

// Page Content API
const pageContents = client.collection("page-contents");
export const pageContentApi = {
  // Get page content by slug
  async getBySlug(
    slug: string,
    params?: ApiQueryParams
  ): Promise<FormattedStrapiPageContent | null> {
    try {
      const response = await pageContents.find({
        filters: {
          slug: { $eq: slug },
          isActive: { $eq: true },
        },
        locale: params?.locale,
      });

      const pages = formatStrapiResponse<FormattedStrapiPageContent[]>(
        response.data
      );
      return pages.length > 0 ? pages[0] : null;
    } catch (error) {
      console.error(`Error fetching page content by slug ${slug}:`, error);
      return null;
    }
  },
};

// Site settings API
const siteSettings = client.collection("site-settings");
export const siteSettingsApi = {
  // Get site settings
  async get(): Promise<FormattedStrapiSiteSettings | null> {
    try {
      const response = await siteSettings.find({
        populate: ["logo"],
      });

      const settings = formatStrapiResponse<FormattedStrapiSiteSettings[]>(
        response.data
      );
      return settings.length > 0 ? settings[0] : null;
    } catch (error) {
      console.error("Error fetching site settings:", error);
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
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(price);
  },

  // Generate slug from title
  generateSlug: (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  },
};
