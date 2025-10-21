export default function CanopiesSeo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Каталог навесов для дачи",
    "description": "Каталог навесов для дачи с ценами. Автонавесы, террасы и крыльцо для защиты от дождя и солнца.",
    "url": "https://nadache-inache.ru/canopies",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Навес №1 - Односкатный автонавес",
        "description": "Односкатный автонавес для дачи. Площадь 18 м², защита от дождя и солнца.",
        "image": "https://nadache-inache.ru/img/navesa-1.jpg",
        "url": "https://nadache-inache.ru/canopies/1",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "189900",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Навесы"
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Навес №2 - Двухскатная терраса",
        "description": "Двухскатная терраса для дачи. Площадь 24 м², уютное пространство для отдыха.",
        "image": "https://nadache-inache.ru/img/navesa-2.jpg",
        "url": "https://nadache-inache.ru/canopies/2",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "214500",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Навесы"
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Навес №3 - Арочное крыльцо",
        "description": "Арочное крыльцо для дачи. Площадь 8 м², элегантный вход в дом.",
        "image": "https://nadache-inache.ru/img/navesa-3.jpg",
        "url": "https://nadache-inache.ru/canopies/3",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "172000",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Навесы"
      },
      {
        "@type": "Product",
        "position": 4,
        "name": "Навес №4 - Прямоугольная терраса",
        "description": "Прямоугольная терраса для дачи. Площадь 15 м², комфортное пространство.",
        "image": "https://nadache-inache.ru/img/navesa-4.jpg",
        "url": "https://nadache-inache.ru/canopies/4",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "238600",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Навесы"
      },
      {
        "@type": "Product",
        "position": 5,
        "name": "Навес №5 - Квадратный автонавес",
        "description": "Квадратный автонавес для дачи. Площадь 16 м², компактный размер.",
        "image": "https://nadache-inache.ru/img/navesa-5.jpg",
        "url": "https://nadache-inache.ru/canopies/5",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "199400",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Навесы"
      },
      {
        "@type": "Product",
        "position": 6,
        "name": "Навес №6 - Односкатная терраса",
        "description": "Односкатная терраса для дачи. Площадь 28 м², большая площадь для отдыха.",
        "image": "https://nadache-inache.ru/img/navesa-6.jpg",
        "url": "https://nadache-inache.ru/canopies/6",
        "brand": {
          "@type": "Brand",
          "name": "На даче иначе"
        },
        "offers": {
          "@type": "Offer",
          "price": "255000",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "На даче иначе"
          }
        },
        "category": "Навесы"
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
