import React, { useMemo } from 'react';

// Типы
interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Компоненты иконок
const DeliveryIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const PaymentIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
  </svg>
);

const QualityIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const SupportIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

// Компонент карточки
const OrderCard: React.FC<CardData> = ({ icon, title, description }) => (
  <div className='bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center justify-center min-h-[280px] hover:shadow-xl transition-shadow duration-300'>
    <div className='bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md mb-6 border-2 border-gray-100'>
      <div className="text-gray-700">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const OrderBlock: React.FC = () => {
  // Мемоизированные данные карточек
  const cards = useMemo<CardData[]>(() => [
    {
      icon: <DeliveryIcon />,
      title: 'Быстрая доставка',
      description: 'Мы доставляем заказы в кратчайшие сроки.',
    },
    {
      icon: <PaymentIcon />,
      title: 'Удобная оплата',
      description: 'Оплачивайте удобным для вас способом.',
    },
    {
      icon: <QualityIcon />,
      title: 'Высокое качество',
      description: 'Мы гарантируем качество нашей продукции.',
    },
    {
      icon: <SupportIcon />,
      title: 'Поддержка 24/7',
      description: 'Мы всегда готовы помочь вам с любыми вопросами.',
    },
  ], []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className='text-center text-3xl font-bold mb-12 text-gray-800'>
          Беседка вашей мечты под ключ!
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {cards.map((card, index) => (
            <OrderCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderBlock;