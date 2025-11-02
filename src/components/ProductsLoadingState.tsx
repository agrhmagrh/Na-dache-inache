import React from 'react';

interface ProductsLoadingStateProps {
  loading: boolean;
  error: string | null;
  children: React.ReactNode;
}

export default function ProductsLoadingState({ loading, error, children }: ProductsLoadingStateProps) {
  if (loading) {
    return (
      <div className="col-span-12 md:col-span-9 order-1 md:order-2">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto mb-4"></div>
            <p className="text-gray-600">Загружаем товары...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-span-12 md:col-span-9 order-1 md:order-2">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">⚠️</div>
            <p className="text-gray-600 mb-4">Ошибка загрузки товаров</p>
            <p className="text-sm text-gray-500">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-orange text-white px-4 py-2 rounded hover:opacity-90"
            >
              Попробовать снова
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}