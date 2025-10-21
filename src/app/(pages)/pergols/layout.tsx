import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Перголы для дачи - Каталог с ценами | На даче иначе',
  description: 'Каталог пергол для дачи с ценами. Биоклиматические, с тканью и классические перголы. Защита от солнца и дождя. Работаем по Москве и Московской области.',
  keywords: 'перголы каталог, перголы цены, биоклиматическая пергола, пергола с тканью, классическая пергола, защита от солнца, дача, перголы москва, перголы московская область',
  openGraph: {
    title: 'Перголы для дачи - Каталог с ценами',
    description: 'Каталог пергол для дачи с ценами. Биоклиматические, с тканью и классические перголы.',
    type: 'website',
    url: 'https://nadache-inache.ru/pergols',
    images: [
      {
        url: '/img/pergola-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Каталог пергол для дачи',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Перголы для дачи - Каталог с ценами',
    description: 'Каталог пергол для дачи с ценами. Биоклиматические, с тканью и классические перголы.',
    images: ['/img/pergola-banner.jpg'],
  },
  alternates: {
    canonical: 'https://nadache-inache.ru/pergols',
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

export default function PergolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
