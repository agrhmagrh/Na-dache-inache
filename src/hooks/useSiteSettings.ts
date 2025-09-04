import { useState, useEffect } from 'react';
import { siteSettingsApi, FormattedStrapiSiteSettings } from '@/lib/api';

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<FormattedStrapiSiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await siteSettingsApi.get();
        setSettings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки настроек сайта');
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading, error };
};
