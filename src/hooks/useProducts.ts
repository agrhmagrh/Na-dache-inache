import { useState, useEffect } from 'react';
import { productsApi } from '@/app/api/lib/api';
import { FormattedStrapiProduct } from '@/types/strapi';

export const useProducts = (categorySlug?: string) => {
  const [products, setProducts] = useState<FormattedStrapiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let data: FormattedStrapiProduct[];
        if (categorySlug) {
          data = await productsApi.getByCategory(categorySlug);
        } else {
          data = await productsApi.getAll();
        }
        
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки товаров');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  return { products, loading, error };
};

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<FormattedStrapiProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await productsApi.getById(id);
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки товара');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return { product, loading, error };
};

export const useProductBySlug = (slug: string) => {
  const [product, setProduct] = useState<FormattedStrapiProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await productsApi.getBySlug(slug);
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки товара');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  return { product, loading, error };
};

export const useFeaturedProducts = () => {
  const [products, setProducts] = useState<FormattedStrapiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await productsApi.getAll({ filters: { isFeatured: { $eq: true } } });
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки рекомендуемых товаров');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
