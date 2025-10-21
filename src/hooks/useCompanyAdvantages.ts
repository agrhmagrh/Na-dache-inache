import { useState, useEffect } from 'react';
import { companyAdvantagesApi } from '@/app/api/lib/api';
import { FormattedStrapiCompanyAdvantage } from '@/types/strapi';

export const useCompanyAdvantages = () => {
  const [advantages, setAdvantages] = useState<FormattedStrapiCompanyAdvantage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdvantages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await companyAdvantagesApi.getAll();
        setAdvantages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки преимуществ');
      } finally {
        setLoading(false);
      }
    };

    fetchAdvantages();
  }, []);

  return { advantages, loading, error };
};
