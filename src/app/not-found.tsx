import OffersBlock from "./HomeSections/OffersBlock";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { text } from "./contstants/const";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="main bg-gray-light">
        <div className="apologies p-10 max-w-screen-xl m-auto font-medium text-4xl">
          {text.NotFound}
        </div>
        <OffersBlock></OffersBlock>
      </main>
      <Footer />
    </>
  );
}
