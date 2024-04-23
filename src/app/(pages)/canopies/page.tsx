"use client";
import Image from "next/image";

import { createPortal } from "react-dom";
import Modal from "../../components/Modal";
import { useState } from "react";
import FormBlock from "../../HomeSections/FormBlock";
import { CgIfDesign } from "react-icons/cg";
import { TfiHummer } from "react-icons/tfi";
import { RiCustomerServiceLine } from "react-icons/ri";

export default function Pavilions() {
  let [isOpen, setIsOpen] = useState(false);

  const pavilions = [
    { url: "/img/navesa-1.jpg" },
    { url: "/img/navesa-2.jpg" },
    { url: "/img/navesa-3.jpg" },
    { url: "/img/navesa-4.jpg" },
    { url: "/img/navesa-5.jpg" },
    { url: "/img/navesa-6.jpg" },
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <main>
      <section className="bg-gray-dark h-[700px] bg-[url(/img/navesa-6.jpg)] bg-top bg-no-repeat bg-cover">
        <div className="max-w-screen-xl m-auto flex items-center justify-end h-full">
          <div className="w-[500px] h-[350px] bg-white p-5  flex flex-col">
            <h1 className="text-4xl p-5 pb-2">
              Индивидуальные навесы для дачи
            </h1>
            <span className="text-2xl p-5 pt-2 pb-10">
              Создание защищенного пространства под ключ
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
          <div className="offers-cards-wrapper bg-white grid grid-cols-3 gap-2 p-10 px-40 justify-center">
            {pavilions.map((bg, i) => {
              return (
                <div key={i} className="col-span-1">
                  <Image width={310} height={310} src={bg.url} alt="" />
                </div>
              );
            })}
          </div>
          <div className="offers-cards-info bg-gray-dark text-white text-xl p-12 pt-8">
            <h3 className="py-3 text-2xl text-orange">
              Преимущества выбора индивидуальных навесов
            </h3>
            <p className="text-lg text-gray-additional">
              Выбор индивидуального навеса для вашей дачи предоставляет
              множество преимуществ, делая ваш отдых более комфортным и
              защищенным:
            </p>
            <div className="flex pt-4 gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <span className="text-[60px]">
                    <CgIfDesign></CgIfDesign>
                  </span>
                  <h4 className="text-2xl">Защита от погоды</h4>
                </div>
                <span className="text-base text-gray-additional">
                  Навес обеспечивает надежную защиту от солнца, дождя и других
                  погодных условий, позволяя вам наслаждаться отдыхом на свежем
                  воздухе в любую погоду.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <span className="text-[60px]">
                    <RiCustomerServiceLine></RiCustomerServiceLine>
                  </span>
                  <h4 className="text-2xl">Расширение пространства</h4>
                </div>
                <span className="text-base text-gray-additional">
                  Навес создает дополнительное пространство на вашем участке,
                  которое можно использовать для отдыха, барбекю, хранения
                  садовых инструментов и других нужд.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <span className="text-[60px]">
                    <TfiHummer></TfiHummer>
                  </span>
                  <h4 className="text-2xl">Индивидуальный дизайн</h4>
                </div>
                <span className="text-base text-gray-additional">
                  Заказывая навес по индивидуальному проекту, вы можете выбрать
                  дизайн, размер, форму и другие детали, которые отражают ваш
                  стиль и соответствуют архитектуре вашего дома и участка.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-block absolute m-auto w-full h-[40%] z-0 top-1/3 bg-gray-dark-block"></div>
      </section>
      <section>
        <div className="max-w-screen-xl m-auto flex flex-col gap-10 p-10 py-20">
          <div className="title flex items-center justify-center p-20 pb-5 ">
            <h3 className="relative font-bold text-4xl leading-9 z-10 h-[40px] bg-white">
              Разнообразие выбора и материалы
            </h3>
            <div className="title-border"></div>
          </div>
          <div className="text-lg">
            Выбор индивидуального навеса для дачи предоставляет широкие
            возможности для создания уникального и функционального пространства.
            Вот некоторые из популярных вариантов:
          </div>
          <div className="flex  gap-5 items-center bg-gray-product text-white p-10">
            <Image
              className="rounded"
              src={"/img/derevo.jpg"}
              alt="Дерево беседка"
              width={200}
              height={200}
            ></Image>
            <div>
              <h4 className="text-2xl text-orange font-bold">Дерево</h4>
              <span className="text-lg">
                Навесы из натурального дерева придают вашему участку уют и
                натуральность. Они могут быть выполнены из различных пород
                дерева, таких как сосна, ель, дуб, кедр и другие.

              </span>
            </div>
          </div>
          <div className="flex  gap-5 items-center bg-gray-product text-white p-10">
            <Image
              className="rounded"
              src={"/img/metal.jpg"}
              alt="Дерево беседка"
              width={200}
              height={200}
            ></Image>
            <div>
              <h4 className="text-2xl text-orange font-bold">Металл</h4>
              <span className="text-lg">
                Металлические навесы обладают прочностью и долговечностью. Они
                могут быть изготовлены из стали, алюминия или других
                металлических сплавов и подходят для различных стилей
                оформления.

              </span>
            </div>
          </div>
          <div className="flex  gap-5 items-center bg-gray-product text-white p-10">
            <Image
              className="rounded"
              src={"/img/plastic.jpg"}
              alt="Дерево беседка"
              width={200}
              height={200}
            ></Image>
            <div>
              <h4 className="text-2xl text-orange font-bold">Ткань</h4>
              <span className="text-lg">
                Навесы с тканевым навесом обеспечивают легкость и воздушность.
                Они могут быть выполнены из водоотталкивающих материалов и
                предоставляют защиту от солнца и дождя.

              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-dark-block p-5">

        <div className="m-auto max-w-screen-xl py-20">
          <div className="examples-block-title text-white font-bold text-3xl relative">
            <h4 className="bg-gray-dark-block block mt-4 py-2 relative z-10">
              Почему следует выбрать нашу компанию
            </h4>
            <div className="absolute border w-[200px] h-[70px] border-gray-additional z-0 top-[-10px]"></div>
          </div>
          <div className="text-gray-additional text-lg py-10">
            Выбирая нашу компанию для создания индивидуального навеса для вашей

            дачи, вы получаете:
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <div className="min-h-[576px] bg-gray-dark mb-10 bg-[url(/img/handsome.jpg)] bg-cover bg-[-300px]"></div>

              <div className="text-white flex flex-col gap-3">
                <span className="text-orange text-2xl">
                  Профессионализм и опыт
                </span>
                <span className="text-lg">
                  Наша команда специалистов имеет многолетний опыт в создании
                  качественных навесов на заказ и готова воплотить в жизнь ваши
                  идеи и предпочтения.

                </span>
              </div>
            </div>
            <div>
              <div className="text-white flex flex-col gap-3">
                <span className="text-orange text-2xl">
                  Индивидуальный подход
                </span>
                <span className="text-lg">
                  Мы учитываем все ваши пожелания и особенности вашего участка,
                  чтобы создать идеальное пространство для вашего отдыха и
                  развлечений.
                </span>
              </div>
              <div className="min-h-[576px] bg-gray-dark mt-10 bg-[url(/img/quality.jpg)] bg-cover"></div>
            </div>
            <div>
              <div className="min-h-[576px] bg-gray-dark mb-10 bg-[url(/img/garanty.jpg)] bg-cover bg-[-270px]"></div>

              <div className="text-white flex flex-col gap-3">
                <span className="text-orange text-2xl">
                  Качество и гарантия
                </span>
                <span className="text-lg">
                  Мы используем только высококачественные материалы и
                  гарантируем долговечность и надежность наших конструкций на
                  долгие годы.
                </span>
              </div>
            </div>
          </div>
          <div className="text-lg pt-10 text-white">
            Выбирая нас, вы выбираете надежного партнера, который поможет
            воплотить в жизнь ваши мечты о комфортном и стильном навесе для
            вашей дачи.
          </div>

        </div>
      </section>
      <FormBlock></FormBlock>
    </main>
  );
}
