import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Навесы для дачи - Каталог с ценами | На даче иначе',
  description: 'Каталог навесов для дачи с ценами. Автонавесы, террасы и крыльцо. Защита от дождя и солнца. Работаем по Москве и Московской области.',
  keywords: 'навесы каталог, навесы цены, автонавес, терраса, крыльцо, защита от дождя, дача, навесы москва, навесы московская область',
  openGraph: {
    title: 'Навесы для дачи - Каталог с ценами',
    description: 'Каталог навесов для дачи с ценами. Автонавесы, террасы и крыльцо.',
    type: 'website',
    url: 'https://nadache-inache.ru/canopies',
    images: [
      {
        url: '/img/hoz-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Каталог навесов для дачи',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Навесы для дачи - Каталог с ценами',
    description: 'Каталог навесов для дачи с ценами. Автонавесы, террасы и крыльцо.',
    images: ['/img/hoz-banner.jpg'],
  },
  alternates: {
    canonical: 'https://nadache-inache.ru/canopies',
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

export default function CanopiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
