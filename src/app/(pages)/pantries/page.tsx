import FormBlock from "../../HomeSections/FormBlock";
import ButtonModal from "@/app/components/ButtonModal";
import PantryCard from "@/app/components/PantryCard";
import AdvantageCard from "@/app/components/AdvantageCard";
import { PANTRIES_DATA, ADVANTAGES_DATA } from "@/app/contstants/pantries";

export const metadata = {
  title:
    "Помещения хозяйственного назначения для дачи | Индивидуальные решения",
  description:
    "Создаем качественные помещения хозяйственного назначения для дачи: сараи, бытовки, беседки, теплицы. Индивидуальный подход и гарантия качества.",
  keywords:
    "помещения хозяйственного назначения, сараи, бытовки, беседки, теплицы, дача, индивидуальные решения",
};

export default function Pantries() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-dark min-h-[500px] md:h-[700px] bg-[url(/img/hoz-banner.jpg)] bg-top bg-no-repeat bg-cover relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-screen-xl m-auto flex items-center justify-end h-full p-1 relative z-10">
          <div className="w-full md:w-[500px] bg-white p-3 flex flex-col shadow-xl rounded-lg">
            <h1 className="md:text-4xl text-xl p-5 pb-2 font-bold">
              Индивидуальные помещения хозяйственного назначения для дачи
            </h1>
            <p className="md:text-2xl p-5 pt-2 pb-10 text-gray-700">
              Создание пространства для комфорта и хранения
            </p>
            <ButtonModal />
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="offers-block bg-gray-light relative pb-20">
        <div className="content-offers max-w-screen-xl m-auto z-10 relative">
          <header className="title flex items-center justify-center md:p-20 p-10">
            <h2 className="relative font-bold md:text-4xl text-2xl md:leading-9 z-10 md:h-[40px] bg-gray-light">
              Виды помещений хозяйственного назначения
            </h2>
            <div className="title-border"></div>
          </header>

          <div className="offers-cards-wrapper bg-white grid md:grid-cols-2 grid-cols-1 gap-5 p-5 md:p-10 justify-center rounded-lg shadow-lg">
            {PANTRIES_DATA.map((pantry) => (
              <PantryCard
                key={pantry.id}
                title={pantry.title}
                description={pantry.description}
                image={pantry.image}
              />
            ))}
          </div>

          <div className="offers-cards-info bg-gray-dark text-white text-xl p-12 pt-8 rounded-lg">
            <h3 className="py-3 text-2xl text-orange font-semibold">
              Предложения по цене
            </h3>
            <p className="md:text-lg text-base text-gray-additional leading-relaxed">
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

      {/* Advantages Section */}
      <section className="bg-gray-dark-block p-5">
        <div className="m-auto max-w-screen-xl py-20">
          <header className="examples-block-title text-white font-bold md:text-3xl text-xl relative xl:px-0 px-5">
            <h2 className="bg-gray-dark-block block mt-4 py-2 relative z-10">
              Почему следует выбрать нашу компанию
            </h2>
            <div className="absolute border w-[200px] h-[70px] border-gray-additional z-0 top-[-10px]"></div>
          </header>

          <p className="text-gray-additional text-lg py-10 px-5 xl:px-0">
            Выбирая нашу компанию для создания индивидуальных помещений
            хозяйственного назначения для вашей дачи, вы получаете:
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {ADVANTAGES_DATA.map((advantage, index) => (
              <AdvantageCard
                key={advantage.id}
                title={advantage.title}
                description={advantage.description}
                image={advantage.image}
                imagePosition={advantage.imagePosition}
                isReversed={index % 2 === 0}
              />
            ))}
          </div>

          <p className="text-lg pt-10 text-white leading-relaxed">
            Выбирая нас, вы выбираете надежного партнера, который поможет
            воплотить в жизнь ваши мечты о функциональном и удобном помещении
            хозяйственного назначения для вашей дачи.
          </p>
        </div>
      </section>

      <FormBlock />
    </main>
  );
}
