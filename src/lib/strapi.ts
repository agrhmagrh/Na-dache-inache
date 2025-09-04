import { createStrapiClient } from '@strapi/sdk-js';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const apiToken = process.env.STRAPI_API_TOKEN;

// Create Strapi client instance
export const strapi = createStrapiClient({
  url: strapiUrl,
  apiToken: apiToken,
});

// Helper function to get full image URL
export const getStrapiImageUrl = (imageUrl: string | null | undefined): string => {
  if (!imageUrl) return '';
  
  // If it's already a full URL, return as is
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  // Otherwise, prepend the Strapi URL
  return `${strapiUrl}${imageUrl}`;
};

// Helper function to format Strapi response
export const formatStrapiResponse = <T>(data: any): T => {
  if (Array.isArray(data)) {
    return data.map(formatStrapiResponse) as T;
  }
  
  if (data && typeof data === 'object') {
    // Handle Strapi's nested structure
    if (data.data) {
      return formatStrapiResponse(data.data) as T;
    }
    
    // Handle attributes
    if (data.attributes) {
      return {
        id: data.id,
        ...data.attributes,
      } as T;
    }
    
    // Recursively format nested objects
    const formatted: any = {};
    for (const [key, value] of Object.entries(data)) {
      formatted[key] = formatStrapiResponse(value);
    }
    return formatted as T;
  }
  
  return data as T;
};
