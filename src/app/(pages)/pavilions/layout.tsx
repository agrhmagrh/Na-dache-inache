import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Беседки для дачи - Каталог с ценами | На даче иначе',
  description: 'Каталог беседок для дачи с ценами. Открытые, закрытые беседки и с барбекю. Различные формы: прямоугольные, квадратные, шестигранные, восьмигранные, круглые, японские. Работаем по Москве и Московской области.',
  keywords: 'беседки каталог, беседки цены, открытая беседка, закрытая беседка, беседка с барбекю, шестигранная беседка, восьмигранная беседка, круглая беседка, японская беседка, дача, беседки москва, беседки московская область',
  openGraph: {
    title: 'Беседки для дачи - Каталог с ценами',
    description: 'Каталог беседок для дачи с ценами. Открытые, закрытые беседки и с барбекю.',
    type: 'website',
    url: 'https://nadache-inache.ru/pavilions',
    images: [
      {
        url: '/img/pavi-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Каталог беседок для дачи',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Беседки для дачи - Каталог с ценами',
    description: 'Каталог беседок для дачи с ценами. Открытые, закрытые беседки и с барбекю.',
    images: ['/img/pavi-banner.jpg'],
  },
  alternates: {
    canonical: 'https://nadache-inache.ru/pavilions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  authors: [{ name: 'На даче иначе' }],
  creator: 'На даче иначе',
  publisher: 'На даче иначе',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function PavilionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
