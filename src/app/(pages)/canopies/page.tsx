import Image from "next/image";
import FormBlock from "../../HomeSections/FormBlock";
import { CgIfDesign } from "react-icons/cg";
import { TfiHummer } from "react-icons/tfi";
import { RiCustomerServiceLine } from "react-icons/ri";
import ButtonModal from "@/app/components/ButtonModal";
import LightImage from "@/app/components/LightImage";
import CanopyAdvantage from "@/app/components/CanopyAdvantage";
import CanopyMaterialCard from "@/app/components/CanopyMaterialCard";
import AdvantageCard from "@/app/components/AdvantageCard";
import { 
  CANOPIES_IMAGES, 
  CANOPY_MATERIALS, 
  COMPANY_ADVANTAGES,
  type CanopyAdvantage as CanopyAdvantageType 
} from "@/app/contstants/canopies";

// Данные о преимуществах навесов
const CANOPY_ADVANTAGES: CanopyAdvantageType[] = [
  {
    id: 1,
    icon: CgIfDesign,
    title: "Защита от погоды",
    description: "Навес обеспечивает надежную защиту от солнца, дождя и других погодных условий, позволяя вам наслаждаться отдыхом на свежем воздухе в любую погоду."
  },
  {
    id: 2,
    icon: RiCustomerServiceLine,
    title: "Расширение пространства",
    description: "Навес создает дополнительное пространство на вашем участке, которое можно использовать для отдыха, барбекю, хранения садовых инструментов и других нужд."
  },
  {
    id: 3,
    icon: TfiHummer,
    title: "Индивидуальный дизайн",
    description: "Заказывая навес по индивидуальному проекту, вы можете выбрать дизайн, размер, форму и другие детали, которые отражают ваш стиль и соответствуют архитектуре вашего дома и участка."
  }
];

export const metadata = {
  title: 'Индивидуальные навесы для дачи | Защищенное пространство под ключ',
  description: 'Создаем качественные навесы для дачи из дерева, металла и ткани. Индивидуальный дизайн, защита от погоды и расширение пространства.',
  keywords: 'навесы для дачи, индивидуальные навесы, деревянные навесы, металлические навесы, тканевые навесы',
};

export default function Canopies() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-dark min-h-[500px] md:h-[700px] bg-[url(/img/navesa-6.jpg)] bg-top bg-no-repeat bg-cover relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-screen-xl m-auto flex items-center justify-end h-full relative z-10">
          <div className="w-full xl:w-[500px] xl:h-[350px] bg-white p-5 flex flex-col shadow-xl rounded-lg">
            <h1 className="md:text-4xl text-xl p-5 pb-2 font-bold">
              Индивидуальные навесы для дачи
            </h1>
            <p className="md:text-2xl p-5 pt-2 pb-10 text-gray-700">
              Создание защищенного пространства под ключ
            </p>
            <ButtonModal />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="offers-block bg-gray-light relative pb-20">
        <div className="content-offers max-w-screen-xl m-auto z-10 relative">
          <header className="title flex items-center justify-center md:p-20 p-10">
            <h2 className="relative font-bold md:text-4xl text-2xl md:leading-9 z-10 md:h-[40px] bg-gray-light">
              Наши проекты
            </h2>
            <div className="title-border"></div>
          </header>
          
          <div className="offers-cards-wrapper bg-white grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 p-5 md:p-10 xl:px-40 justify-center rounded-lg shadow-lg">
            {CANOPIES_IMAGES.map((canopy) => (
              <div key={canopy.id} className="col-span-1 m-auto h-full">
                <LightImage url={canopy.url} alt={canopy.alt} />
              </div>
            ))}
          </div>
          
          <div className="offers-cards-info bg-gray-dark text-white text-xl p-12 pt-8 rounded-lg">
            <h3 className="py-3 text-2xl text-orange font-semibold">
              Преимущества выбора индивидуальных навесов
            </h3>
            <p className="text-lg text-gray-additional leading-relaxed">
              Выбор индивидуального навеса для вашей дачи предоставляет множество преимуществ, делая ваш отдых более комфортным и защищенным:
            </p>
            <div className="xl:flex pt-4 gap-5">
              {CANOPY_ADVANTAGES.map((advantage) => (
                <CanopyAdvantage
                  key={advantage.id}
                  icon={advantage.icon}
                  title={advantage.title}
                  description={advantage.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="middle-block absolute m-auto w-full h-[40%] z-0 top-1/3 bg-gray-dark-block"></div>
      </section>

      {/* Materials Section */}
      <section className="bg-gray-light">
        <div className="max-w-screen-xl m-auto flex flex-col gap-10 xl:p-10 xl:py-20 p-5">
          <header className="title flex items-center justify-center md:p-20 pb-5">
            <h2 className="relative font-bold md:text-4xl text-2xl md:leading-9 z-10 md:h-[40px] bg-gray-light">
              Разнообразие выбора и материалы
            </h2>
            <div className="title-border"></div>
          </header>
          
          <p className="text-lg text-center">
            Выбор индивидуального навеса для дачи предоставляет широкие возможности для создания уникального и функционального пространства. Вот некоторые из популярных вариантов:
          </p>
          
          {CANOPY_MATERIALS.map((material) => (
            <CanopyMaterialCard
              key={material.id}
              name={material.name}
              description={material.description}
              image={material.image}
              imageAlt={material.imageAlt}
            />
          ))}
        </div>
      </section>

      {/* Company Advantages Section */}
      <section className="bg-gray-dark-block p-5">
        <div className="m-auto max-w-screen-xl py-20">
          <header className="examples-block-title text-white font-bold text-3xl relative xl:px-0 px-5">
            <h2 className="bg-gray-dark-block block mt-4 py-2 relative z-10">
              Почему следует выбрать нашу компанию
            </h2>
            <div className="absolute border w-[200px] h-[70px] border-gray-additional z-0 top-[-10px]"></div>
          </header>
          
          <p className="text-gray-additional text-lg py-10 px-5 xl:px-0">
            Выбирая нашу компанию для создания индивидуального навеса для вашей дачи, вы получаете:
          </p>
          
          <div className="grid md:grid-cols-3 gap-5">
            {COMPANY_ADVANTAGES.map((advantage, index) => (
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
            Выбирая нас, вы выбираете надежного партнера, который поможет воплотить в жизнь ваши мечты о комфортном и стильном навесе для вашей дачи.
          </p>
        </div>
      </section>
      
      <FormBlock />
    </main>
  );
}
