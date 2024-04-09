"use client";
import { IExamplesCard } from "@/interfaces/ICard";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";

const exampleCardsData: IExamplesCard[][] = [
  [
    {
      src: "/img/Example-1-Zelenograd.png",
      title: "Договор №10877 Зеленоград",
      link: "Беседки",
    },
    {
      src: "/img/Example-3-Moscow.png",
      title: "Договор №10879 Москва",
      link: "Навесы",
    },
    {
      src: "/img/Example-5-Traktorniy.png",
      title: "Договор №10881 п.Тракторный",
      link: "Шторы",
    },
  ],
  [
    {
      src: "/img/Example-2-Chimki.png",
      title: "Договор №10878 Химки",
      link: "Перголы",
    },

    {
      src: "/img/Example-4-Vidnoe.png",
      title: "Договор №10880 Видное",
      link: "Мягкие окна",
    },
  ],
];
const [right, left] = exampleCardsData;

const examplecardsLeft = left.map(({ title, src, link }: IExamplesCard, i) => {
  return (
    <ExampleCard
      key={i}
      title={title}
      src={src}
      link={link}
      direction={"left"}
    ></ExampleCard>
  );
});
const examplecardsRight = right.map(
  ({ title, src, link }: IExamplesCard, i) => {
    return (
      <ExampleCard
        key={i}
        title={title}
        src={src}
        link={link}
        direction={"right"}
      ></ExampleCard>
    );
  }
);

function ExampleCard({ src, link, title, direction }: IExamplesCard) {
  let classes = "example-card flex items-center ";
  if (direction == "right") {
    classes = classes.concat(" ", "flex-row-reverse");
  }

  return (
    <div className={classes}>
      <Image width={425} height={425} src={src} alt=""></Image>
      <div
        className={
          "card-info text-center flex flex-wrap flex-col justify-between h-3/4 border border-white " +
          (direction == "right" ? "border-r-0" : "border-l-0")
        }
      >
        <div className="title text-white font-medium p-10">{title}</div>
        <div className="link pb-10 text-orange font-bold text-2xl">
          <Link href="">{link.toUpperCase()}</Link>
        </div>
      </div>
    </div>
  );
}

export default function ExamplesBlock() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className="examples-block-wrapper bg-gray-dark-block">
      <div className="columns-wrapper max-w-screen-xl m-auto py-28 flex gap-10 justify-between">
        <div className="column-left flex flex-col gap-32">
          <div className="examples-block-title text-white font-bold  text-5xl relative ">
            <h4 className="bg-gray-dark-block block mt-4 py-2 relative z-10">
              Примеры работ
            </h4>
            <div className="absolute border w-[200px] h-[100px] border-gray-additional z-0 top-0"></div>
          </div>
          {examplecardsLeft}
          <div className="example-form-block flex items-center gap-5">
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
            <div className="additional-btn text-gray-additional h-8 text-base flex border-b border-solid border-gray-additional">
              <Link href="/projects">Все примеры работ</Link>
            </div>
          </div>
        </div>
        <div className="column-right flex flex-col gap-32">
          {examplecardsRight}
        </div>
      </div>
    </section>
  );
}
