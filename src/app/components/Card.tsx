import type { IOffersCard } from "@/interfaces/ICard";
import Link from "next/link";
import Image from "next/image";

export default function Card({ link, title, src, columns, widthParent = 0}: IOffersCard,) {
  const width = widthParent / 3 * columns
  
const classes = "card relative" + (columns > 1 ? " col-span-" + columns : "")  

  return (
    <div className={classes}>
      <Image className={"w-full scale-10"} width={width} height={0}  src={src} alt={title}></Image>
      <Link className="absolute top-1/2 text-nowrap m-auto px-10 py-5 min-w-[250px] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center bg-black-70 text-white text-sm md:text-base" href={link}>{title.toUpperCase()}</Link>
    </div>
  );
}

