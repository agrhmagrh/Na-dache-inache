import { useState, useEffect } from 'react';
import { categoriesApi } from '@/app/api/lib/api';
import { FormattedStrapiCategory } from '@/types/strapi';

export const useCategories = () => {
  const [categories, setCategories] = useState<FormattedStrapiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await categoriesApi.getAll();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки категорий');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export const useCategory = (slug: string) => {
  const [category, setCategory] = useState<FormattedStrapiCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await categoriesApi.getBySlug(slug);
        setCategory(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки категории');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCategory();
    }
  }, [slug]);

  return { category, loading, error };
};
