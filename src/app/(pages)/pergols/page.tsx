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
    { url: "/img/pergola-1.jpg" },
    { url: "/img/pergola-2.jpg" },
    { url: "/img/pergola-3.jpg" },
    { url: "/img/pergola-4.jpg" },
    { url: "/img/pergola-5.jpg" },
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <main>
      <section className="bg-gray-dark h-[700px] bg-[url(/img/pergola-banner.jpg)] bg-top bg-no-repeat bg-cover">
        <div className="max-w-screen-xl m-auto flex items-center justify-end h-full p-1">
          <div className="xl:w-[500px] xl:h-[350px] bg-white p-3  flex flex-col">
            <h1 className="md:text-4xl text-xl p-5 pb-2">
              Индивидуальные перголы для дачи
            </h1>
            <span className="md:text-2xl p-5 pt-2 pb-10">
              Создание идеального укрытия от солнца и дождя
            </span>
            <div className="submit text-center text-white bg-orange m-3 text-2xl h-14 px-8">
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
          <div className="title flex items-center justify-center md:p-20 p-10">
            <h3 className="relative font-bold md:text-4xl text-2xl md:leading-9 z-10 md:h-[40px] bg-gray-light">
              Наши проекты
            </h3>
            <div className="title-border"></div>
          </div>
          <div className="offers-cards-wrapper bg-white grid md:grid-cols-3 grid-cols-1 gap-2 p-10 md:px-40 justify-center">
            {pavilions.map((bg, i) => {
              return (
                <div key={i} className="col-span-1 m-auto">
                  <Image width={310} height={310} src={bg.url} alt="" />
                </div>
              );
            })}
          </div>
          <div className="offers-cards-info bg-gray-dark text-white text-xl p-12 pt-8">
            <h3 className="py-3 text-2xl text-orange">
              Преимущества выбора индивидуальных пергол
            </h3>
            <p className="text-lg text-gray-additional">
              Выбор индивидуальной перголы для вашей дачи предоставляет
              множество преимуществ, делая ваш отдых более комфортным и
              приятным:
            </p>
            <div className="xl:flex pt-4 gap-5">
              <div className="flex flex-col gap-2 pb-2">
                <div className="flex gap-2 items-center">
                  <span className="text-[60px]">
                    <CgIfDesign></CgIfDesign>
                  </span>
                  <h4 className="text-2xl">Защита от солнца</h4>
                </div>
                <span className="text-base text-gray-additional">
                  Пергола обеспечивает надежную защиту от палящего солнца, что
                  позволяет вам наслаждаться свежим воздухом на вашей даче даже
                  в самые жаркие дни.
                </span>
              </div>
              <div className="flex flex-col gap-2 pb-2">
                <div className="flex gap-2 items-center">
                  <span className="text-[60px]">
                    <RiCustomerServiceLine></RiCustomerServiceLine>
                  </span>
                  <h4 className="text-2xl">Уютное пространство для отдыха</h4>
                </div>
                <span className="text-base text-gray-additional">
                  Пергола создает уютное пространство для отдыха и общения с
                  семьей и друзьями. Вы можете наслаждаться природой, проводить
                  время на свежем воздухе и отдыхать в уютной обстановке.
                </span>
              </div>
              <div className="flex flex-col gap-2 pb-2">
                <div className="flex gap-2 items-center">
                  <span className="text-[60px]">
                    <TfiHummer></TfiHummer>
                  </span>
                  <h4 className="text-2xl">Долговечность и надежность</h4>
                </div>
                <span className="text-base text-gray-additional">
                  Индивидуальные перголы изготавливаются из качественных
                  материалов и имеют прочную конструкцию, что обеспечивает их
                  долговечность и надежность на долгие годы.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-block absolute m-auto w-full h-[40%] z-0 top-1/3 bg-gray-dark-block"></div>
      </section>
      <section>
        <div className="max-w-screen-xl m-auto flex flex-col gap-10 xl:p-10 xl:py-20 p-5">
          <div className="title flex items-center justify-center md:p-20 pb-5">
            <h3 className="relative font-bold md:text-4xl text-2xl md:leading-9 z-10 md:h-[40px] bg-white">
              Разнообразие выбора и материалы
            </h3>
            <div className="title-border"></div>
          </div>
          <div className="text-lg">
            Выбор индивидуальной перголы для дачи предоставляет широкие
            возможности для создания уникального и стильного пространства. Вот
            некоторые из популярных вариантов:
          </div>

          <div className="grid grid-cols-8 sm:grid-rows-2 grid-rows-4 gap-x-5 items-center bg-gray-product text-white p-10 ">
            <Image
              className="rounded col-span-2 xl:row-span-4 row-span-1"
              src={"/img/derevo.jpg"}
              alt="Дерево беседка"
              width={200}
              height={200}
            ></Image>
            <h4 className="text-2xl text-orange font-bold col-span-6 row-span-1">
              Дерево
            </h4>
            <span className="text-lg xl:row-span-2 xl:col-span-6 col-span-8 row-span-3">
              Перголы из натурального дерева придают вашей даче естественный и
              стильный вид. Они могут быть выполнены из различных пород дерева,
              таких как сосна, ель, дуб, кедр и другие.
            </span>
          </div>
          <div className="grid grid-cols-8 sm:grid-rows-2 grid-rows-4 gap-x-5 items-center bg-gray-product text-white p-10">
            <Image
              className="rounded col-span-2 xl:row-span-4 row-span-1"
              src={"/img/metal.jpg"}
              alt="Дерево беседка"
              width={200}
              height={200}
            ></Image>
            <h4 className="text-2xl text-orange font-bold col-span-6 row-span-1">
              Металл
            </h4>
            <span className="text-lg xl:row-span-2 xl:col-span-6 col-span-8 row-span-3">
              Металлические перголы обладают современным и прочным дизайном. Они
              могут быть изготовлены из стали, алюминия или других металлических
              сплавов и подходят для различных стилей оформления.
            </span>
          </div>
          <div className="grid grid-cols-8 sm:grid-rows-2 grid-rows-4 gap-x-5 items-center bg-gray-product text-white p-10">
            <Image
              className="rounded col-span-2 xl:row-span-4 row-span-1"
              src={"/img/plastic.jpg"}
              alt="Дерево беседка"
              width={200}
              height={200}
            ></Image>
            <h4 className="text-2xl text-orange font-bold col-span-6 row-span-1">
              Ткань
            </h4>
            <span className="text-lg xl:row-span-2 xl:col-span-6 col-span-8 row-span-3">
              Перголы с тканевым навесом обеспечивают легкость и воздушность.
              Они могут быть выполнены из водоотталкивающих материалов и
              предоставляют защиту от солнца и дождя.
            </span>
          </div>
        </div>
      </section>
      <section className="bg-gray-dark-block p-5">
        <div className="m-auto max-w-screen-xl py-20">
          <div className="examples-block-title text-white font-bold text-3xl relative xl:px-0 px-5">
            <h4 className="bg-gray-dark-block block mt-4 py-2 relative z-10">
              Почему следует выбрать нашу компанию
            </h4>
            <div className="absolute border w-[200px] h-[70px] border-gray-additional z-0 top-[-10px]"></div>
          </div>
          <div className="text-gray-additional text-lg py-10 px-5 xl:px-0">
            Выбирая нашу компанию для создания индивидуальной перголы для вашей
            дачи, вы получаете:
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <div className="text-white flex flex-col gap-3 p-2 md:order-last">
                <span className="text-orange text-2xl">
                  Профессионализм и опыт
                </span>
                <span className="text-lg">
                  Наша команда специалистов имеет богатый опыт в создании
                  качественных пергол на заказ и готова воплотить в жизнь ваши
                  идеи и предпочтения.
                </span>
              </div>
              <div className="min-h-[576px] bg-gray-dark mb-10 bg-[url(/img/handsome.jpg)] bg-cover bg-[-300px]"></div>
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
              <div className="text-white flex flex-col gap-3 p-2 md:order-last">
                <span className="text-orange text-2xl">
                  Качество и гарантия
                </span>
                <span className="text-lg">
                  Мы используем только высококачественные материалы и
                  гарантируем долговечность и надежность наших конструкций на
                  долгие годы.
                </span>
              </div>
              <div className="min-h-[576px] bg-gray-dark mb-10 bg-[url(/img/garanty.jpg)] bg-cover bg-[-270px]"></div>
            </div>
          </div>
        </div>
      </section>
      <FormBlock></FormBlock>
    </main>
  );
}
