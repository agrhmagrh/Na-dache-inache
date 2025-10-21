import { strapi } from "@strapi/client";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
const apiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export const client = strapi({
  baseURL: `${strapiUrl}/api`,
  auth: apiToken,
});

// Cache for files with TTL
interface FileCacheItem {
  data: any[];
  timestamp: number;
}

const fileCache = new Map<string, FileCacheItem>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Get files with caching
export const getFilesWithCache = async (): Promise<any[]> => {
  const cacheKey = 'all_files';
  const now = Date.now();
  
  // Check if we have valid cached data
  const cached = fileCache.get(cacheKey);
  if (cached && (now - cached.timestamp) < CACHE_TTL) {
    return cached.data;
  }
  
  try {
    const files = await client.files.find();
    const filesData = formatStrapiResponse<any[]>(files);
    
    // Update cache
    fileCache.set(cacheKey, {
      data: filesData,
      timestamp: now
    });
    
    return filesData;
  } catch (error) {
    console.error('Error fetching files:', error);
    // Return cached data if available, even if expired
    return cached?.data || [];
  }
};

// Get images for specific document IDs
export const getImagesByDocumentIds = async (documentIds: string[]): Promise<Map<string, any[]>> => {
  const files = await getFilesWithCache();
  const imagesMap = new Map<string, any[]>();
  
  // Group files by documentId
  files.forEach(file => {
    if (file.documentId && documentIds.includes(file.documentId)) {
      if (!imagesMap.has(file.documentId)) {
        imagesMap.set(file.documentId, []);
      }
      imagesMap.get(file.documentId)!.push(file);
    }
  });
  
  return imagesMap;
};


// Helper function to get full image URL
export const getStrapiImageUrl = (
  imageUrl: string | null | undefined
): string => {
  if (!imageUrl) return "";

  // If it's already a full URL, return as is
  if (imageUrl.startsWith("http")) {
    return imageUrl;
  }

  // Debug logging
  if (process.env.NODE_ENV === 'development') {
    console.log('Strapi URL:', strapiUrl);
    console.log('Image URL:', imageUrl);
    console.log('Full URL:', `${strapiUrl}${imageUrl}`);
  }

  // Otherwise, prepend the Strapi URL
  return `${strapiUrl}${imageUrl}`;
};

// Helper function to format Strapi response
export const formatStrapiResponse = <T>(data: any): T => {
  if (Array.isArray(data)) {
    return data.map(formatStrapiResponse) as T;
  }

  if (data && typeof data === "object") {
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
