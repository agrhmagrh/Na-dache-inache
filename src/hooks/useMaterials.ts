import { useState, useEffect } from 'react';
import { materialsApi } from '@/app/api/lib/api';
import { FormattedStrapiMaterial } from '@/types/strapi';

export const useMaterials = () => {
  const [materials, setMaterials] = useState<FormattedStrapiMaterial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await materialsApi.getAll();
        setMaterials(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки материалов');
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  return { materials, loading, error };
};
