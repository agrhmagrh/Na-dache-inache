import Image from "next/image";

import FormBlock from "../../HomeSections/FormBlock";
import { CgIfDesign } from "react-icons/cg";
import { TfiHummer } from "react-icons/tfi";
import { RiCustomerServiceLine } from "react-icons/ri";
import ButtonModal from "@/app/components/ButtonModal";
import LightImage from "@/app/components/LightImage";

export default function Pavilions() {

  const pavilions = [
    { url: "/img/navesa-1.jpg" },
    { url: "/img/navesa-2.jpg" },
    { url: "/img/navesa-3.jpg" },
    { url: "/img/navesa-4.jpg" },
    { url: "/img/navesa-5.jpg" },
    { url: "/img/navesa-6.jpg" },
  ];

  return (
    <main>
      <section className="bg-gray-dark h-[700px] bg-[url(/img/navesa-6.jpg)] bg-top bg-no-repeat bg-cover">
        <div className="max-w-screen-xl m-auto flex items-center justify-end h-full">
          <div className="xl:w-[500px] xl:h-[350px] bg-white p-5  flex flex-col">
            <h1 className="md:text-4xl text-xl p-5 pb-2">
              Индивидуальные навесы для дачи
            </h1>
            <span className="md:text-2xl p-5 pt-2 pb-10">
              Создание защищенного пространства под ключ
            </span>
              <ButtonModal />
          </div>
        </div>
      </section>
      <section className="offers-block bg-gray-light relative pb-20">
        <div className="content-offers max-w-screen-xl m-auto z-10 relative">
          <div className="title flex items-center justify-center md:p-20 p-10 ">
            <h3 className="relative font-bold md:text-4xl text-2xl md:leading-9 z-10 md:h-[40px] bg-gray-light">
              Наши проекты
            </h3>
            <div className="title-border"></div>
          </div>
          <div className="offers-cards-wrapper bg-white grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 p-10 xl:px-40 px-10 justify-center">
            {pavilions.map((bg, i) => {
              return (
                <div key={i} className="col-span-1 m-auto h-full">
                  <LightImage url={bg.url}></LightImage>
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
            <div className="xl:flex pt-4 gap-5">
              <div className="flex flex-col gap-2 pb-2">
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
              <div className="flex flex-col gap-2 pb-2">
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
              <div className="flex flex-col gap-2 pb-2">
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
        <div className="max-w-screen-xl m-auto flex flex-col gap-10 xl:p-10 xl:py-20 p-5">
          <div className="title flex items-center justify-center md:p-20 pb-5 ">
            <h3 className="relative font-bold md:text-4xl text-2xl md:leading-9 z-10 md:h-[40px] bg-white">
              Разнообразие выбора и материалы
            </h3>
            <div className="title-border"></div>
          </div>
          <div className="text-lg">
            Выбор индивидуального навеса для дачи предоставляет широкие
            возможности для создания уникального и функционального пространства.
            Вот некоторые из популярных вариантов:
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
              Навесы из натурального дерева придают вашему участку уют и
              натуральность. Они могут быть выполнены из различных пород дерева,
              таких как сосна, ель, дуб, кедр и другие.
            </span>
          </div>
          <div className="grid grid-cols-8 sm:grid-rows-2 grid-rows-4 gap-x-5 items-center bg-gray-product text-white p-10 ">
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
              Металлические навесы обладают прочностью и долговечностью. Они
              могут быть изготовлены из стали, алюминия или других металлических
              сплавов и подходят для различных стилей оформления.
            </span>
          </div>
          <div className="grid grid-cols-8 sm:grid-rows-2 grid-rows-4 gap-x-5 items-center bg-gray-product text-white p-10 ">
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
              Навесы с тканевым навесом обеспечивают легкость и воздушность. Они
              могут быть выполнены из водоотталкивающих материалов и
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
            Выбирая нашу компанию для создания индивидуального навеса для вашей
            дачи, вы получаете:
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="flex flex-col">
              <div className="text-white flex flex-col gap-3 p-2 md:order-last">
                <span className="text-orange text-2xl">
                  Профессионализм и опыт
                </span>
                <span className="text-lg">
                  Наша команда специалистов имеет многолетний опыт в создании
                  качественных навесов на заказ и готова воплотить в жизнь ваши
                  идеи и предпочтения.
                </span>
              </div>
              <div className="min-h-[576px] bg-gray-dark mb-10 bg-[url(/img/handsome.jpg)] bg-cover bg-[-300px]"></div>
            </div>
            <div>
              <div className="text-white flex flex-col gap-3 p-2">
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
            <div className="flex flex-col">
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
