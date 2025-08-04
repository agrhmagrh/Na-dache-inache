import FormBlock from "../../HomeSections/FormBlock";
import { CgIfDesign } from "react-icons/cg";
import { TfiHummer } from "react-icons/tfi";
import { RiCustomerServiceLine } from "react-icons/ri";
import ButtonModal from "@/app/components/ButtonModal";
import LightImage from "@/app/components/LightImage";
import MaterialCard from "@/app/components/MaterialCard";
import PavilionAdvantage from "@/app/components/PavilionAdvantage";
import AdvantageCard from "@/app/components/AdvantageCard";
import { 
  PAVILIONS_IMAGES, 
  MATERIALS_DATA, 
  COMPANY_ADVANTAGES,
  type AdvantageItem 
} from "@/app/contstants/pavilions";

// Данные о преимуществах беседок
const PAVILION_ADVANTAGES: AdvantageItem[] = [
  {
    id: 1,
    icon: CgIfDesign,
    title: "Уникальный дизайн",
    description: "Беседка, созданная по индивидуальному заказу, позволит вам воплотить в жизнь свои уникальные идеи и предпочтения в дизайне. Вы сможете выбрать форму, размер, цвет и другие детали, которые отражают ваш стиль и характер."
  },
  {
    id: 2,
    icon: RiCustomerServiceLine,
    title: "Подход к вашим потребностям",
    description: "Индивидуальные беседки строятся с учетом ваших пожеланий и особенностей участка. Это позволяет создать идеальное пространство, которое соответствует вашим потребностям и желаниям."
  },
  {
    id: 3,
    icon: TfiHummer,
    title: "Качество материалов и изготовления",
    description: "При заказе индивидуальной беседки вы можете выбрать качественные материалы и доверить ее изготовление опытным профессионалам. Это гарантирует долговечность и надежность вашей беседки на долгие годы."
  }
];

export const metadata = {
  title: 'Индивидуальные беседки для дачи | Создание идеального уголка отдыха',
  description: 'Создаем уникальные беседки для дачи из дерева, металла и ДКП. Индивидуальный дизайн, качественные материалы и профессиональное изготовление.',
  keywords: 'беседки для дачи, индивидуальные беседки, деревянные беседки, металлические беседки, ДКП беседки',
};

export default function Pavilions() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-dark min-h-[500px] md:h-[700px] bg-[url(/img/pavi-banner.jpg)] bg-top bg-no-repeat bg-cover relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-screen-xl m-auto flex items-center justify-end h-full p-3 relative z-10">
          <div className="w-full xl:w-[500px] xl:h-[350px] bg-white p-5 flex flex-col shadow-xl rounded-lg">
            <h1 className="md:text-4xl text-xl p-5 pb-2 font-bold">
              Индивидуальные беседки для дачи
            </h1>
            <p className="md:text-2xl p-5 pt-2 pb-10 text-gray-700">
              Воплощение вашего идеального уголка отдыха
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
            {PAVILIONS_IMAGES.map((pavilion) => (
              <div key={pavilion.id} className="col-span-1 m-auto h-full">
                <LightImage url={pavilion.url} alt={pavilion.alt} />
              </div>
            ))}
          </div>
          
          <div className="offers-cards-info bg-gray-dark text-white text-xl p-12 pt-8 rounded-lg">
            <h3 className="py-3 text-2xl text-orange font-semibold">
              Преимущества выбора индивидуальных беседок
            </h3>
            <p className="text-lg text-gray-additional leading-relaxed">
              Приобретение индивидуальной беседки для вашей дачи - это не только способ создать уютное пространство для отдыха, но и инвестиция в комфорт и удовлетворение вашего вкуса. Вот несколько преимуществ, которые предлагает выбор индивидуальных беседок:
            </p>
            <div className="xl:flex pt-4 gap-5">
              {PAVILION_ADVANTAGES.map((advantage) => (
                <PavilionAdvantage
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
          <header className="text-center">
            <h2 className="text-3xl font-bold text-gray-dark mb-4">
              Материалы для беседок
            </h2>
            <p className="text-lg text-gray-600">
              Выберите материал, который лучше всего подходит для вашего участка и стиля
            </p>
          </header>
          
          {MATERIALS_DATA.map((material) => (
            <MaterialCard
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
      <section className="bg-gray-dark-block">
        <div className="m-auto max-w-screen-xl py-20">
          <header className="examples-block-title text-white font-bold text-3xl relative xl:px-0 px-5">
            <h2 className="bg-gray-dark-block block mt-4 py-2 relative z-10">
              Почему следует выбрать нашу компанию
            </h2>
            <div className="absolute border w-[200px] h-[70px] border-gray-additional z-0 top-[-10px]"></div>
          </header>
          
          <p className="text-gray-additional text-lg py-10 px-5 xl:px-0">
            Выбирая нашу компанию для создания индивидуальной беседки для вашей дачи, вы получаете:
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
        </div>
      </section>
      
      <FormBlock />
    </main>
  );
}
