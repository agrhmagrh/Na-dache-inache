"use client";
import Image from "next/image";

import { createPortal } from "react-dom";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Pavilions() {
  let [isOpen, setIsOpen] = useState(false);

  const pavilions = [
    { url: "/img/pavilions/1.jpg" },
    { url: "/img/pavilions/2.jpg" },
    { url: "/img/pavilions/3.jpg" },
    { url: "/img/pavilions/4.jpg" },
    { url: "/img/pavilions/5.jpg" },
    { url: "/img/pavilions/6.jpg" },
    { url: "/img/pavilions/7.jpg" },
    { url: "/img/pavilions/8.jpg" },
    { url: "/img/pavilions/9.jpg" },
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <main>
      <section className="bg-gray-dark h-[700px]">
        <div className="max-w-screen-xl m-auto flex items-center justify-end h-full">
          <div className="w-[500px] h-[350px] bg-white p-5  flex flex-col">
            <h1 className="text-4xl p-5 pb-2">
              Индивидуальные беседки для дачи
            </h1>
            <span className="text-2xl p-5 pt-2 pb-10">
              Воплощение вашего идеального уголка отдыха
            </span>
            <div className="submit text-center text-white bg-orange m-3 text-2xl h-14  px-8">
              <input
                onClick={openModal}
                className="block w-full h-full cursor-pointer"
                type="submit"
                value="Связаться с нами"
              />
              {isOpen &&
                createPortal(
                  <Modal isOpen={isOpen} onClose={() => closeModal()} />,
                  document.body
                )}
            </div>
          </div>
        </div>
      </section>
      <section className="offers-block bg-gray-light relative pb-20">
        <div className="content-offers max-w-screen-xl m-auto z-10 relative">
          <div className="title flex items-center justify-center p-20 ">
            <h3 className="relative font-bold text-4xl leading-9 z-10 h-[40px] bg-gray-light">
              Наши проекты
            </h3>
            <div className="title-border"></div>
          </div>
          <div className="offers-cards-wrapper bg-white grid grid-cols-3 gap-2">
            {pavilions.map((bg, i) => {
              return (
                <div key={i} className="col-span-1">
                  <Image width={310} height={310} src={bg.url} alt="" />
                </div>
              );
            })}
          </div>
          <div className="offers-cards-info bg-gray-dark text-white text-xl p-12 pt-8">
            <h3 className="py-3">Преимущества выбора индивидуальных беседок</h3>
            <p>
              Приобретение индивидуальной беседки для вашей дачи - это не только
              способ создать уютное пространство для отдыха, но и инвестиция в
              комфорт и удовлетворение вашего вкуса. Вот несколько преимуществ,
              которые предлагает выбор индивидуальных беседок:
            </p>
            <p>
              - Уникальный дизайн: Беседка, созданная по индивидуальному
              заказу, позволит вам воплотить в жизнь свои уникальные идеи и
              предпочтения в дизайне. Вы сможете выбрать форму, размер, цвет и
              другие детали, которые отражают ваш стиль и характер. <br />
              - Подход к вашим потребностям: Индивидуальные беседки строятся с учетом
              ваших пожеланий и особенностей участка. Это позволяет создать
              идеальное пространство, которое соответствует вашим потребностям и
              желаниям. <br /> - Качество материалов и изготовления: При заказе
              индивидуальной беседки вы можете выбрать качественные материалы и
              доверить ее изготовление опытным профессионалам. Это гарантирует
              долговечность и надежность вашей беседки на долгие годы.
            </p>
          </div>
        </div>
        <div className="middle-block absolute m-auto w-full h-[40%] z-0 top-1/3 bg-gray-dark-block"></div>
      </section>
    </main>
  );
}
