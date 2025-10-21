'use client';

import { apiUtils } from '@/app/api/lib/api';

export interface StrapiImageData {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: any;
    small?: any;
    medium?: any;
    large?: any;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: any;
  documentId?: string;
  createdAt: string;
  updatedAt: string;
}

export class StrapiImageUtils {
  /**
   * Get the best available image URL for a given size
   */
  static getImageUrl(image: StrapiImageData | null, size: 'thumbnail' | 'small' | 'medium' | 'large' | 'original' = 'medium'): string | null {
    if (!image) return null;

    // Try to get the requested size first
    if (size !== 'original' && image.formats?.[size]?.url) {
      return apiUtils.getImageUrl(image.formats[size].url);
    }

    // Fallback to original image
    if (image.url) {
      return apiUtils.getImageUrl(image.url);
    }

    return null;
  }

  /**
   * Get all available image sizes for an image
   */
  static getAvailableSizes(image: StrapiImageData | null): string[] {
    if (!image) return [];

    const sizes = ['original'];
    if (image.formats) {
      if (image.formats.thumbnail) sizes.push('thumbnail');
      if (image.formats.small) sizes.push('small');
      if (image.formats.medium) sizes.push('medium');
      if (image.formats.large) sizes.push('large');
    }

    return sizes;
  }

  /**
   * Get responsive image sources for Next.js Image component
   */
  static getResponsiveSources(image: StrapiImageData | null): {
    src: string;
    width: number;
    height: number;
    alt: string;
  } | null {
    if (!image) return null;

    const url = this.getImageUrl(image, 'medium') || this.getImageUrl(image, 'original');
    if (!url) return null;

    return {
      src: url,
      width: image.width,
      height: image.height,
      alt: image.alternativeText || image.name || 'Изображение'
    };
  }

  /**
   * Filter images by document ID (for additional images)
   */
  static filterImagesByDocumentId(images: StrapiImageData[], documentId: string): StrapiImageData[] {
    return images.filter(image => image.documentId === documentId);
  }

  /**
   * Get images for a specific product
   */
  static getProductImages(product: any, additionalImages: StrapiImageData[] = []): StrapiImageData[] {
    const images: StrapiImageData[] = [];

    // Add main product image if exists
    if (product.image) {
      images.push(product.image);
    }

    // Add gallery images if exists
    if (product.gallery && Array.isArray(product.gallery)) {
      images.push(...product.gallery);
    }

    // Add additional images by document ID
    if (product.documentId) {
      const productAdditionalImages = this.filterImagesByDocumentId(additionalImages, product.documentId);
      images.push(...productAdditionalImages);
    }

    return images;
  }

  /**
   * Get image dimensions for responsive display
   */
  static getImageDimensions(image: StrapiImageData | null, maxWidth: number = 600): { width: number; height: number } {
    if (!image) return { width: 400, height: 300 };

    const aspectRatio = image.width / image.height;
    const width = Math.min(maxWidth, image.width);
    const height = Math.round(width / aspectRatio);

    return { width, height };
  }

  /**
   * Check if image is landscape or portrait
   */
  static isLandscape(image: StrapiImageData | null): boolean {
    if (!image) return true;
    return image.width > image.height;
  }

  /**
   * Get image file size in human readable format
   */
  static getFileSize(image: StrapiImageData | null): string {
    if (!image) return '0 KB';

    const sizeInKB = image.size;
    if (sizeInKB < 1024) {
      return `${sizeInKB} KB`;
    } else {
      return `${(sizeInKB / 1024).toFixed(1)} MB`;
    }
  }
}
