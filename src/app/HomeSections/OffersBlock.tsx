import { IOffersCard, ICardsWrapper } from "@/interfaces/ICard";
import Card from "../components/Card";
import { solutions, text } from "../contstants/const";
const [b, n, p, h] = solutions;

const cardsData: IOffersCard[] = [
  {
    title: "БЕСЕДКИ РАЗЛИЧНЫХ ФОРМ И КОНФИГУРАЦИЙ",
    link: b.href,
    columns: 2,
    src: "/img/Build-1.png",
  },
  {
    title: "НАВЕСЫ ДЛЯ АВТО",
    link: n.href,
    columns: 1,
    src: "/img/Build-2.png",
  },
  {
    title: "ПЕРГОЛЫ",
    link: p.href,
    columns: 1,
    src: "/img/Build-3.png",
  },
  {
    title: "помещения хозяйственного назначения",
    link: h.href,
    columns: 2,
    src: "/img/Build-4.png",
  },
];

function CardsWrapper({ widthParent }: ICardsWrapper) {
  return (
    <div className="offers-cards flex flex-col sm:grid md:grid-cols-3 gap-5 px-10 py-5">
      {cardsData.map(({ title, link, src, columns }: IOffersCard, i) => {
        return (
          <Card
            key={i}
            title={title}
            link={link}
            src={src}
            columns={columns}
            widthParent={widthParent}
          ></Card>
        );
      })}
    </div>
  );
}

export default function OffersBlock({ title }: any) {
  return (
    <section className="offers-block bg-gray-light relative pb-20">
      <div className="content-offers max-w-screen-xl m-auto z-10 relative">
        <div className="title flex items-center justify-center p-20 ">
          <h3 className="relative font-bold text-4xl leading-9 z-10 h-[40px] bg-gray-light">
            {title || "Мы строим"}
          </h3>
          <div className="title-border"></div>
        </div>
        <div className="offers-cards-wrapper bg-white">
          <CardsWrapper />
        </div>
        <div className="offers-cards-info bg-gray-dark text-white md:text-xl p-12 pt-8">
          <p>
              {text.Description}
          </p>
        </div>
      </div>
      <div className="middle-block absolute m-auto w-full h-[40%] z-0 top-1/3 bg-gray-dark-block"></div>
    </section>
  );
}
