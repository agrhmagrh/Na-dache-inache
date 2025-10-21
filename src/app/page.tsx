import type { Metadata } from 'next';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./HomeSections/Banner";
import OffersBlock from "./HomeSections/OffersBlock";
import CustomersChoice from "./HomeSections/CustomersChoice";
import WarrantyBlock from "./HomeSections/WarrantyBlock";
import VideoBlock from "./HomeSections/VideoBlock";
import ReviewsBlock from "./HomeSections/ReviewsBlock";
import PopularCategories from "./HomeSections/PopularCategories";
import LinksBlock from "./HomeSections/LinksBlock";
import FormBlock from "./HomeSections/FormBlock";
import OrderBlock from "./HomeSections/OrderBlock";

export const metadata: Metadata = {
  title: 'На даче иначе - Строительство современных конструкций для дома и дачи',
  description: 'Строительство современных конструкций для дома и дачи. Возможность работы по каталогу готовых решений и по индивидуальному проекту. Работаем по Москве и Московской области.',
  keywords: 'строительство, конструкции, дом, дача, навесы, беседки, перголы, Москва, Московская область',
  openGraph: {
    title: 'На даче иначе - Строительство современных конструкций',
    description: 'Строительство современных конструкций для дома и дачи',
    type: 'website',
  },
};

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header isMain={true} />
      <main className="main bg-gray-light">
        <Banner />
        <OrderBlock />
        <OffersBlock />
        <CustomersChoice />
        <WarrantyBlock />
        <VideoBlock />
        <LinksBlock />
        <FormBlock />
        <ReviewsBlock />
        <PopularCategories />
      </main>
      <Footer />
    </>
  );
}
