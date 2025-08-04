import React from 'react';

const OrderBlock: React.FC = () => {
    const cards = [
        {
            icon: '📦',
            title: 'Быстрая доставка',
            description: 'Мы доставляем заказы в кратчайшие сроки.',
        },
        {
            icon: '💳',
            title: 'Удобная оплата',
            description: 'Оплачивайте удобным для вас способом.',
        },
        {
            icon: '⭐',
            title: 'Высокое качество',
            description: 'Мы гарантируем качество нашей продукции.',
        },
        {
            icon: '📞',
            title: 'Поддержка 24/7',
            description: 'Мы всегда готовы помочь вам с любыми вопросами.',
        },
        
    ];

    return (
        <div>
            <h2 className='text-center text-2xl font-medium m-5'>Беседка вашей мечты под ключ!</h2>
            <div className='flex flex-wrap justify-center gap-5'>
                {cards.map((card, index) => (
                    <div
                        key={index}

                        className='bg-gray-dark-block text-gray-light w-1/6 p-5 rounded-lg flex flex-col items-center justify-center'
                    >
                        <div className='rounded bg-gray-light rounded-full text-2xl w-auto'>{card.icon}</div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderBlock;