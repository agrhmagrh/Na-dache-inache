import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./HomeSections/Banner";
import OffersBlock from "./HomeSections/OffersBlock";
import ExamplesBlock from "./HomeSections/ExamplesBlock";
import LinksBlock from "./HomeSections/LinksBlock";
import FormBlock from "./HomeSections/FormBlock";

export default function Home() {
  return (
    <>
      <Header isMain={true}/>
      <main className="main bg-gray-light">
        <Banner></Banner>
        <OffersBlock></OffersBlock>
        <ExamplesBlock></ExamplesBlock>
        <LinksBlock></LinksBlock>
        <FormBlock></FormBlock>
      </main>
      <Footer />
    </>
  );
}
