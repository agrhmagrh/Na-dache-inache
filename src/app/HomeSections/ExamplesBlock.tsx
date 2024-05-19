import { IExamplesCard } from "@/interfaces/ICard";
import Image from "next/image";
import Link from "next/link";
import ModalWrapper from "../shared/ModalWrapper";
import { Links } from "@/routes";

const exampleCardsData: IExamplesCard[][] = [
  [
    {
      src: "/img/Example-1-Zelenograd.png",
      title: "Договор №10877 Зеленоград",
      link: "Беседки",
      href: Links.PAVILIONS,
    },
    {
      src: "/img/Example-3-Moscow.png",
      title: "Договор №10879 Москва",
      link: "Навесы",
      href: Links.CANOPIES,
    },
    {
      src: "/img/Example-5-Traktorniy.png",
      title: "Договор №10881 п.Тракторный",
      link: "Шторы",
      href: "https://oknakant.ru/shtory-i-chehly/",
      target: "_blank",
    },
  ],
  [
    {
      src: "/img/Example-2-Chimki.png",
      title: "Договор №10878 Химки",
      link: "Перголы",
      href: Links.PERGOLS,
    },

    {
      src: "/img/Example-4-Vidnoe.png",
      title: "Договор №10880 Видное",
      link: "Мягкие окна",
      target: "_blank",
      href: "https://oknakant.ru/myagkie-okna-dlya-verandy/",
    },
  ],
];
const [right, left] = exampleCardsData;

const examplecardsLeft = left.map(
  ({ title, src, link, href, target }: IExamplesCard, i) => {
    return (
      <ExampleCard
        key={i}
        title={title}
        src={src}
        link={link}
        direction={"left"}
        href={href}
        target={target}
      ></ExampleCard>
    );
  }
);
const examplecardsRight = right.map(
  ({ title, src, link, href, target }: IExamplesCard, i) => {
    return (
      <ExampleCard
        key={i}
        title={title}
        src={src}
        link={link}
        direction={"right"}
        href={href}
        target={target}
      ></ExampleCard>
    );
  }
);

function ExampleCard({
  src,
  link,
  title,
  direction,
  href,
  target,
}: IExamplesCard) {
  let classes =
    "example-card flex items-center col-span-4 md:col-span-2 relative xl:static p-5 md:p-10";
  if (direction == "right") {
    classes = classes.concat(" ", "flex-row-reverse");
  }

  return (
    <div className={classes}>
      <Image
        className="w-full brightness-50 xl:brightness-100"
        width={425}
        height={425}
        src={src}
        alt=""
      ></Image>
      <div
        className={
          "card-info text-center flex flex-wrap flex-col absolute xl:static top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 xl:-translate-x-0 xl:-translate-y-0 justify-between xl:h-3/4 xl:border border-white " +
          (direction == "right" ? "xl:border-r-0" : "xl:border-l-0")
        }
      >
        <div className="title text-white font-medium p-10">{title}</div>
        <div className="link pb-10 text-orange font-bold text-xl">
          <Link href={href} target={target}>
            {link.toUpperCase()}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ExamplesBlock() {
  return (
    <section className="examples-block-wrapper bg-gray-dark-block">
      <div className="columns-wrapper max-w-screen-xl m-auto py-28 xl:flex grid grid-cols-4 grid-flow-row-dense gap-10 justify-between">
        <div className="column-left xl:flex flex-col xl:gap-32 col-span-4 grid grid-cols-subgrid gap-y-10">
          <div className="examples-block-title text-white font-bold text-5xl relative col-span-4 pl-5">
            <h4 className="bg-gray-dark-block block mt-4 py-2 relative z-10 ">
              Примеры работ
            </h4>
            <div className="absolute border w-[200px] h-[100px] border-gray-additional z-0 top-0"></div>
          </div>
          {examplecardsLeft}
          <div className="example-form-block xl:flex flex-col xl:flex-row items-center gap-5 hidden">
            <ModalWrapper
              className={
                "submit text-center text-white bg-orange m-3 text-2xl h-14 px-8"
              }
            />
            <div className="additional-btn text-gray-additional h-8 text-base flex border-b border-solid border-gray-additional">
              <Link href="/projects">Все примеры работ</Link>
            </div>
          </div>
        </div>

        <div className="column-right xl:flex flex-col xl:gap-32 col-span-4 grid grid-cols-4 gap-y-10">
          {examplecardsRight}
          <div className="example-form-block flex flex-col xl:flex-row items-center gap-5 md:self-center md:col-span-2 col-span-4 xl:hidden">
            <ModalWrapper
              className={
                "submit text-center text-white bg-orange m-3 text-2xl h-14 px-8"
              }
            />
            <div className="additional-btn text-gray-additional h-8 text-base flex border-b border-solid border-gray-additional">
              <Link href="/projects">Все примеры работ</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
