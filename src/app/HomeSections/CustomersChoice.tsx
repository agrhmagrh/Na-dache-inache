import Image from "next/image";
import Link from "next/link";
import { Links } from "@/routes";

interface ChoiceItem {
  id: number;
  title: string;
  price: string;
  size: string;
  area: string;
  image: string;
  href: string;
}

const ITEMS: ChoiceItem[] = [
  {
    id: 1,
    title: "Проект №1",
    price: "389 993 руб.",
    size: "Внешний вид: 4x4 м",
    area: "Площадь: 16 м2",
    image: "/img/pavilions/1.jpg",
    href: Links.PAVILIONS,
  },
  {
    id: 2,
    title: "Проект №2",
    price: "412 500 руб.",
    size: "Внешний вид: 3x5 м",
    area: "Площадь: 15 м2",
    image: "/img/pavilions/2.jpg",
    href: Links.CANOPIES,
  },
  {
    id: 3,
    title: "Проект №3",
    price: "356 900 руб.",
    size: "Внешний вид: 4x3 м",
    area: "Площадь: 12 м2",
    image: "/img/pavilions/3.jpg",
    href: Links.PERGOLS,
  },
  {
    id: 4,
    title: "Проект №4",
    price: "465 000 руб.",
    size: "Внешний вид: 4x6 м",
    area: "Площадь: 24 м2",
    image: "/img/pavilions/4.jpg",
    href: Links.PANTRIES,
  },
];

function ChoiceCard({ title, price, size, area, image, href }: ChoiceItem) {
  return (
    <article className="bg-gray-product text-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <Image
        className="w-full h-44 object-cover"
        src={image}
        alt={title}
        width={400}
        height={200}
        priority={false}
      />
      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="font-semibold text-lg">{price}</div>
        <div className="text-sm text-gray-200">{title}</div>
        <div className="mt-2 text-sm">
          <div>{size}</div>
          <div>{area}</div>
        </div>
        <Link
          href={href}
          className="mt-auto inline-block bg-orange text-white text-center py-2 rounded hover:opacity-90 transition-opacity"
        >
          Перейти
        </Link>
      </div>
    </article>
  );
}

export default function CustomersChoice() {
  return (
    <section className="bg-gray-light py-16">
      <div className="max-w-screen-xl m-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">Выбор покупателей</h3>
          <p className="text-gray-700">
            Изготовление на заказ по вашим размерам: любая модель или индивидуальный проект
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <ChoiceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}


