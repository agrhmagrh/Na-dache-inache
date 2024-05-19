import Image from "next/image";
import FormBlock from "../../HomeSections/FormBlock";
import ButtonModal from "@/app/components/ButtonModal";

export default function Pavilions() {
  return (
    <main>
      <section className="bg-gray-dark h-[700px] bg-[url(/img/hoz-banner.jpg)] bg-top bg-no-repeat bg-cover">
        <div className="max-w-screen-xl m-auto flex items-center justify-end h-full p-1">
          <div className="md:w-[500px] bg-white p-3  flex flex-col">
            <h1 className="md:text-4xl text-xl p-5 pb-2">
              Индивидуальные помещения хозяйственного назначения для дачи
            </h1>
            <span className="md:text-2xl p-5 pt-2 pb-10">
              Создание пространства для комфорта и хранения
            </span>
            <ButtonModal />
          </div>
        </div>
      </section>
      <section className="offers-block bg-gray-light relative pb-20">
        <div className="content-offers max-w-screen-xl m-auto z-10 relative">
          <div className="title flex items-center justify-center md:p-20 p-10">
            <h3 className="relative font-bold md:text-4xl text-2xl md:leading-9 z-10 md:h-[40px] bg-gray-light">
              Виды помещений хозяйственного назначения
            </h3>
            <div className="title-border"></div>
          </div>
          <div className="offers-cards-wrapper bg-white grid md:grid-cols-2 grid-cols-1 gap-5 p-10 px-10 justify-center">
            <div
              className={
                "col-span-1 relative bg-[url('/img/hoz-1.jpg')] bg-cover bg-center min-h-[400px]"
              }
            >
              <div className="absolute top-1/2 text-nowrap m-auto md:px-10 p-5 min-w-[250px] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center bg-black-70 text-white">
                Сараи и кладовые
              </div>
              <div className="absolute bottom-0 px-2 py-4 bg-gray-product text-white">
                Предназначены для хранения садовых инструментов, инвентаря,
                семян, удобрений и других необходимых материалов.
              </div>
            </div>
            <div
              className={
                "col-span-1 relative bg-[url('/img/hoz-2.jpg')] bg-cover bg-center min-h-[400px]"
              }
            >
              <div className="absolute top-1/2 text-nowrap m-auto md:px-10 p-5 min-w-[250px] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center bg-black-70 text-white">
                Бытовки и домики для персонала{" "}
              </div>
              <div className="absolute bottom-0 px-2 py-4 bg-gray-product text-white">
                Используются для временного проживания или отдыха на участке, а
                также для размещения садовых работников или дачников.
              </div>
            </div>
            <div
              className={
                "col-span-1 relative bg-[url('/img/hoz-3.jpg')] bg-cover bg-center min-h-[400px]"
              }
            >
              <div className="absolute top-1/2 text-nowrap m-auto md:px-10 p-5 min-w-[250px] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center bg-black-70 text-white">
                Беседки и веранды
              </div>
              <div className="absolute bottom-0 px-2 py-4 bg-gray-product text-white">
                Создают комфортное пространство для отдыха и общения с семьей и
                друзьями на свежем воздухе.
              </div>
            </div>
            <div
              className={
                "col-span-1 relative bg-[url('/img/hoz-4.jpg')] bg-cover bg-center min-h-[400px]"
              }
            >
              <div className="absolute top-1/2 text-nowrap m-auto md:px-10 p-5 min-w-[250px] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center bg-black-70 text-white">
                Теплицы и оранжереи
              </div>
              <div className="absolute bottom-0 px-2 py-4 bg-gray-product text-white">
                Используются для выращивания растений, цветов и овощей в течение
                всего года.
              </div>
            </div>
          </div>
          <div className="offers-cards-info bg-gray-dark text-white text-xl p-12 pt-8">
            <h3 className="py-3 text-2xl text-orange">Предложения по цене</h3>
            <p className="md:text-lg text-base text-gray-additional">
              Стоимость индивидуальных помещений хозяйственного назначения для
              дачи может варьироваться в зависимости от выбранных материалов,
              размеров, сложности конструкции и других факторов. Наша компания
              предлагает разнообразные варианты помещений по доступным ценам, а
              также готова обсудить индивидуальные условия и предложения для
              каждого клиента. Мы гарантируем высокое качество изготовления и
              удовлетворение вашего запроса в пределах вашего бюджета.
            </p>
          </div>
        </div>
        <div className="middle-block absolute m-auto w-full h-[40%] z-0 top-1/3 bg-gray-dark-block"></div>
      </section>

      <section className="bg-gray-dark-block p-5">
        <div className="m-auto max-w-screen-xl py-20">
          <div className="examples-block-title text-white font-bold md:text-3xl text-xl relative xl:px-0 px-5">
            <h4 className="bg-gray-dark-block block mt-4 py-2 relative z-10">
              Почему следует выбрать нашу компанию
            </h4>
            <div className="absolute border w-[200px] h-[70px] border-gray-additional z-0 top-[-10px]"></div>
          </div>
          <div className="text-gray-additional text-lg py-10 px-5 xl:px-0">
            Выбирая нашу компанию для создания индивидуальных помещений
            хозяйственного назначения для вашей дачи, вы получаете:
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="flex flex-col">
              <div className="text-white flex flex-col gap-3 p-2 md:order-last">
                <span className="text-orange text-2xl">
                  Профессионализм и опыт
                </span>
                <span className="text-lg">
                  Наша команда специалистов имеет богатый опыт в создании
                  качественных помещений на заказ и готова воплотить в жизнь
                  ваши идеи и предпочтения.
                </span>
              </div>
              <div className="min-h-[576px] bg-gray-dark mb-10 bg-[url(/img/handsome.jpg)] bg-cover bg-[-300px]"></div>
            </div>
            <div className="flex flex-col">
              <div className="text-white flex flex-col gap-3 p-2">
                <span className="text-orange text-2xl">
                  Индивидуальный подход
                </span>
                <span className="text-lg">
                  Мы учитываем все ваши пожелания и особенности вашего участка,
                  чтобы создать идеальное пространство для вашего хозяйства и
                  отдыха.
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
            воплотить в жизнь ваши мечты о функциональном и удобном помещении
            хозяйственного назначения для вашей дачи.
          </div>
        </div>
      </section>
      <FormBlock></FormBlock>
    </main>
  );
}
