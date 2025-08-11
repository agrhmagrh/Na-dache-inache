import type { Metadata } from 'next';
import Image from "next/image";
import FormBlock from "../../HomeSections/FormBlock";
import { CgIfDesign } from "react-icons/cg";
import { TfiHummer } from "react-icons/tfi";
import { RiCustomerServiceLine } from "react-icons/ri";
import ButtonModal from "@/app/components/ButtonModal";
import LightImage from "@/app/components/LightImage";
import Link from "next/link";
import PergolsCatalogClient from "@/app/components/PergolsCatalogClient";

export const metadata: Metadata = {
  title: 'Перголы для дачи - Индивидуальные конструкции | На даче иначе',
  description: 'Создание индивидуальных пергол для дачи. Защита от солнца и дождя, уютное пространство для отдыха. Работаем по Москве и Московской области.',
  keywords: 'перголы, дача, защита от солнца, индивидуальные конструкции, дерево, металл, ткань',
  openGraph: {
    title: 'Перголы для дачи - Индивидуальные конструкции',
    description: 'Создание индивидуальных пергол для дачи. Защита от солнца и дождя.',
    type: 'website',
  },
};

// Константы для данных
const PERGOLA_IMAGES = [
  { url: "/img/pergola-1.jpg", alt: "Пергола проект 1" },
  { url: "/img/pergola-2.jpg", alt: "Пергола проект 2" },
  { url: "/img/pergola-3.jpg", alt: "Пергола проект 3" },
  { url: "/img/pergola-4.jpg", alt: "Пергола проект 4" },
  { url: "/img/pergola-5.jpg", alt: "Пергола проект 5" },
  { url: "/img/pergola-6.jpg", alt: "Пергола проект 6" },
] as const;

const ADVANTAGES = [
  {
    icon: CgIfDesign,
    title: "Защита от солнца",
    description: "Пергола обеспечивает надежную защиту от палящего солнца, что позволяет вам наслаждаться свежим воздухом на вашей даче даже в самые жаркие дни.",
  },
  {
    icon: RiCustomerServiceLine,
    title: "Уютное пространство для отдыха",
    description: "Пергола создает уютное пространство для отдыха и общения с семьей и друзьями. Вы можете наслаждаться природой, проводить время на свежем воздухе и отдыхать в уютной обстановке.",
  },
  {
    icon: TfiHummer,
    title: "Долговечность и надежность",
    description: "Индивидуальные перголы изготавливаются из качественных материалов и имеют прочную конструкцию, что обеспечивает их долговечность и надежность на долгие годы.",
  },
] as const;

const MATERIALS = [
  {
    image: "/img/derevo.jpg",
    title: "Дерево",
    description: "Перголы из натурального дерева придают вашей даче естественный и стильный вид. Они могут быть выполнены из различных пород дерева, таких как сосна, ель, дуб, кедр и другие.",
    alt: "Деревянная пергола",
  },
  {
    image: "/img/metal.jpg",
    title: "Металл",
    description: "Металлические перголы обладают современным и прочным дизайном. Они могут быть изготовлены из стали, алюминия или других металлических сплавов и подходят для различных стилей оформления.",
    alt: "Металлическая пергола",
  },
  {
    image: "/img/pergola-tkan.jpg",
    title: "Ткань",
    description: "Перголы с тканевым навесом обеспечивают легкость и воздушность. Они могут быть выполнены из водоотталкивающих материалов и предоставляют защиту от солнца и дождя.",
    alt: "Пергола с тканевым навесом",
  },
] as const;

const COMPANY_ADVANTAGES = [
  {
    title: "Профессионализм и опыт",
    description: "Наша команда специалистов имеет богатый опыт в создании качественных пергол на заказ и готова воплотить в жизнь ваши идеи и предпочтения.",
    image: "bg-[url(/img/handsome.jpg)]",
    imagePosition: "bg-[-300px]",
    order: "md:order-last",
  },
  {
    title: "Индивидуальный подход",
    description: "Мы учитываем все ваши пожелания и особенности вашего участка, чтобы создать идеальное пространство для вашего отдыха и развлечений.",
    image: "bg-[url(/img/quality.jpg)]",
    imagePosition: "",
    order: "",
  },
  {
    title: "Качество и гарантия",
    description: "Мы используем только высококачественные материалы и гарантируем долговечность и надежность наших конструкций на долгие годы.",
    image: "bg-[url(/img/garanty.jpg)]",
    imagePosition: "bg-[-270px]",
    order: "md:order-last",
  },
] as const;

export default function PergolasPage(): JSX.Element {
  return (
    <main>
      {/* Hero секция */}
      <section className="bg-gray-dark h-[700px] bg-[url(/img/pergola-banner.jpg)] bg-top bg-no-repeat bg-cover" aria-label="Главный баннер">
        <div className="max-w-screen-xl m-auto flex items-center justify-end h-full p-1">
          <div className="xl:w-[500px] xl:h-[350px] bg-white p-3 flex flex-col">
            <h1 className="md:text-4xl text-xl p-5 pb-2">
              Индивидуальные перголы для дачи
            </h1>
            <p className="md:text-2xl p-5 pt-2 pb-10">
              Создание идеального укрытия от солнца и дождя
            </p>
            <ButtonModal />
            <Link href="#catalog" className="text-orange px-5 pt-4">К выбору пергол</Link>
          </div>
        </div>
      </section>

      {/* Каталог пергол */}
      <section id="catalog" className="bg-gray-light relative pb-20" aria-label="Каталог пергол">
        <PergolsCatalogClient />
      </section>

      {/* Секция проектов (сохраняем ниже каталога) */}
      <section className="offers-block bg-gray-light relative pb-20" aria-label="Наши проекты">
        <div className="content-offers max-w-screen-xl m-auto z-10 relative">
          <div className="title flex items-center justify-center md:p-20 p-10">
            <h2 className="relative font-bold md:text-4xl text-2xl md:leading-9 z-10 md:h-[40px] bg-gray-light">
              Наши проекты
            </h2>
            <div className="title-border" aria-hidden="true"></div>
          </div>
          
          <div className="offers-cards-wrapper bg-white grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 p-10 xl:px-40 px-10 justify-center">
            {PERGOLA_IMAGES.map((image, index) => (
              <div key={index} className="col-span-1 m-auto h-full">
                <LightImage url={image.url} />
              </div>
            ))}
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
              {ADVANTAGES.map((advantage, index) => (
                <div key={index} className="flex flex-col gap-2 pb-2">
                  <div className="flex gap-2 items-center">
                    <span className="text-[60px]" aria-hidden="true">
                      <advantage.icon />
                    </span>
                    <h4 className="text-2xl">{advantage.title}</h4>
                  </div>
                  <p className="text-base text-gray-additional">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="middle-block absolute m-auto w-full h-[40%] z-0 top-1/3 bg-gray-dark-block" aria-hidden="true"></div>
      </section>

      {/* Секция материалов */}
      <section aria-label="Разнообразие выбора и материалы">
        <div className="max-w-screen-xl m-auto flex flex-col gap-10 xl:p-10 xl:py-20 p-5">
          <div className="title flex items-center justify-center md:p-20 pb-5">
            <h2 className="relative font-bold md:text-4xl text-2xl md:leading-9 z-10 md:h-[40px] bg-white">
              Разнообразие выбора и материалы
            </h2>
            <div className="title-border" aria-hidden="true"></div>
          </div>
          
          <p className="text-lg">
            Выбор индивидуальной перголы для дачи предоставляет широкие
            возможности для создания уникального и стильного пространства. Вот
            некоторые из популярных вариантов:
          </p>

          {MATERIALS.map((material, index) => (
            <article key={index} className="grid grid-cols-8 sm:grid-rows-2 grid-rows-4 gap-x-5 items-center bg-gray-product text-white p-10">
              <Image
                className="rounded col-span-2 xl:row-span-4 row-span-1"
                src={material.image}
                alt={material.alt}
                width={200}
                height={200}
              />
              <h3 className="text-2xl text-orange font-bold col-span-6 row-span-1">
                {material.title}
              </h3>
              <p className="text-lg xl:row-span-2 xl:col-span-6 col-span-8 row-span-3">
                {material.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Секция преимуществ компании */}
      <section className="bg-gray-dark-block p-5" aria-label="Почему следует выбрать нашу компанию">
        <div className="m-auto max-w-screen-xl py-20">
          <div className="examples-block-title text-white font-bold text-3xl relative xl:px-0 px-5">
            <h2 className="bg-gray-dark-block block mt-4 py-2 relative z-10">
              Почему следует выбрать нашу компанию
            </h2>
            <div className="absolute border w-[200px] h-[70px] border-gray-additional z-0 top-[-10px]" aria-hidden="true"></div>
          </div>
          
          <p className="text-gray-additional text-lg py-10 px-5 xl:px-0">
            Выбирая нашу компанию для создания индивидуальной перголы для вашей
            дачи, вы получаете:
          </p>
          
          <div className="grid md:grid-cols-3 gap-5">
            {COMPANY_ADVANTAGES.map((advantage, index) => (
              <article key={index} className="flex flex-col">
                <div className={`text-white flex flex-col gap-3 p-2 ${advantage.order}`}>
                  <h3 className="text-orange text-2xl">
                    {advantage.title}
                  </h3>
                  <p className="text-lg">
                    {advantage.description}
                  </p>
                </div>
                <div 
                  className={`min-h-[576px] bg-gray-dark mb-10 ${advantage.image} bg-cover ${advantage.imagePosition}`}
                  aria-hidden="true"
                ></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <FormBlock />
    </main>
  );
}
