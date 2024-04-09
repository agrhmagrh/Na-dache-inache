import Image from "next/image";
import Link from "next/link";

const imagesData = [
  { src: "/img/Image-1.png", alt: "Беседка осенью" },
  { src: "/img/Image-2.png", alt: "Беседка летом" },
  { src: "/img/Image-3.png", alt: "Беседка весной" },
];

const linksData = [
  {
    title: "Мягкие окна",
    link: "https://oknakant.ru/myagkie-okna-dlya-besedki/",
  },
  {
    title: "Уличные шторы",
    link: "https://oknakant.ru/razdvizhnye-myagkie-okna/",
  },
  {
    title: "Чехлы для мебели и техники",
    link: "https://oknakant.ru/shtory-i-chehly/",
  },
];

const images = imagesData.map(({ src, alt }, i) => {
  return <Image width={200} height={200} key={i} src={src} alt={alt}></Image>;
});
const links = linksData.map(({ title, link }, i) => {
  return (
    <div
      key={i}
      className="link-item w-full flex items-center justify-center font-medium text-4xl text-white h-28 bg-gray-dark-block"
    >
      <Link
        target="_blank"
        href={link}
        className="w-full h-full flex items-center justify-center"
      >
        {title}
      </Link>
    </div>
  );
});

export default function LinksBlock() {
  return (
    <section className="bg-white">
      <div className="wrapper-block max-w-screen-2xl m-auto p-10 grid grid-cols-12 gap-20 ">
        <div className="decription-wrapper col-span-7  ">
          <div className="decription text-gray-dark text-4xl py-10 font-medium text-wrap">
            Для большего комфорта и приятного время препровождения в построенных
            сооружениях мы предлагаем:
          </div>
          <div className="description-images flex justify-between gap-5">
            {images}
          </div>
        </div>
        <div className="links-wrapper flex flex-col justify-between gap-5 col-span-5">
          {links}
        </div>
      </div>
    </section>
  );
}
