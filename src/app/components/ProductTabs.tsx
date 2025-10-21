"use client";

import { useState } from "react";

type Props = {
  description: React.ReactNode;
  className?: string;
};

const TABS = [
  "Описание товара",
  "Характеристики",
  "Цветовая палитра",
  "Комплектация",
] as const;

export default function ProductTabs({ description, className }: Props) {
  const [active, setActive] = useState<number>(0);

  const renderContent = () => {
    switch (active) {
      case 0:
        return description;
      case 1:
        return (
          <>
            Для примера: каркас из прочной стали, крыша из поликарбоната,
            устойчивость к ветровым нагрузкам до 20 м/с. Габариты, вес и
            варианты комплектации уточняются при заказе.
          </>
        );
      case 2:
        return (
          <>
            Базовые цвета: графит, коричневый, белый, бежевый. Возможна покраска
            по каталогу RAL под заказ.
          </>
        );
      case 3:
        return (
          <>
            В стандарт входит: комплект крепежа, элементы каркаса, кровельный
            материал. Дополнительно: настил пола, освещение, остекление.
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      <div className="border border-gray-additional rounded-sm overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-additional text-sm">
          {TABS.map((label, idx) => (
            <button
              key={label}
              onClick={() => setActive(idx)}
              className={`py-2 px-3 font-medium transition-colors ${
                active === idx
                  ? "bg-orange text-white"
                  : "bg-white text-black hover:bg-gray-light"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white p-4 mt-2 text-sm text-gray-700 leading-6 border border-gray-additional rounded">
        {renderContent()}
      </div>
    </div>
  );
}


