export default function PergolsSeo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Каталог пергол для дачи",
    "description": "Каталог пергол для дачи с ценами. Биоклиматические, с тканью и классические перголы для защиты от солнца и дождя.",
    "url": "https://nadache-inache.ru/pergols",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Пергола №1 - Классическая прямоугольная",
        "description": "Классическая прямоугольная пергола для дачи. Площадь 12 м², защита от солнца и дождя.",
        "image": "https://nadache-inache.ru/img/pergola-1.jpg",
        "url": "https://nadache-inache.ru/pergols/1",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "289900",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Перголы"
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Пергола №2 - С тканью квадратная",
        "description": "Квадратная пергола с тканевым навесом. Площадь 16 м², современный дизайн.",
        "image": "https://nadache-inache.ru/img/pergola-2.jpg",
        "url": "https://nadache-inache.ru/pergols/2",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "315500",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Перголы"
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Пергола №3 - Классическая арочная",
        "description": "Арочная классическая пергола. Площадь 15 м², элегантный дизайн.",
        "image": "https://nadache-inache.ru/img/pergola-3.jpg",
        "url": "https://nadache-inache.ru/pergols/3",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "349000",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Перголы"
      },
      {
        "@type": "Product",
        "position": 4,
        "name": "Пергола №4 - Биоклиматическая прямоугольная",
        "description": "Биоклиматическая прямоугольная пергола. Площадь 18 м², регулируемые ламели.",
        "image": "https://nadache-inache.ru/img/pergola-4.jpg",
        "url": "https://nadache-inache.ru/pergols/4",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "379900",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Перголы"
      },
      {
        "@type": "Product",
        "position": 5,
        "name": "Пергола №5 - Классическая квадратная",
        "description": "Классическая квадратная пергола. Площадь 9 м², компактный размер.",
        "image": "https://nadache-inache.ru/img/pergola-5.jpg",
        "url": "https://nadache-inache.ru/pergols/5",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "305000",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Перголы"
      },
      {
        "@type": "Product",
        "position": 6,
        "name": "Пергола №6 - С тканью арочная",
        "description": "Арочная пергола с тканевым навесом. Площадь 24 м², большая площадь.",
        "image": "https://nadache-inache.ru/img/pergola-6.jpg",
        "url": "https://nadache-inache.ru/pergols/6",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "398000",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Перголы"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
