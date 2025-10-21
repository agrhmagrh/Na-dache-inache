export type PavilionShape =
  | "rectangle"
  | "square"
  | "hexagon"
  | "octagon"
  | "round"
  | "japanese";

export type PavilionType = "open" | "closed" | "bbq";

export interface PavilionProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
  shape: PavilionShape;
  kind: PavilionType;
  size: string; // e.g. 4x4 м
  areaM2: number;
}

export const SHAPE_LABEL: Record<PavilionShape, string> = {
  rectangle: "Прямоугольная",
  square: "Квадратная",
  hexagon: "Шестигранная",
  octagon: "Восьмигранная",
  round: "Круглая",
  japanese: "Японская",
};

export const TYPE_LABEL: Record<PavilionType, string> = {
  open: "Открытая",
  closed: "Закрытая",
  bbq: "С барбекю",
};

export const PAVILION_PRODUCTS: PavilionProductItem[] = [
  {
    id: 1,
    title: "Проект №1",
    price: 389_993,
    image: "/img/pavilions/1.jpg",
    shape: "rectangle",
    kind: "open",
    size: "4x4 м",
    areaM2: 16,
  },
  {
    id: 2,
    title: "Проект №2",
    price: 412_500,
    image: "/img/pavilions/2.jpg",
    shape: "square",
    kind: "open",
    size: "3x3 м",
    areaM2: 9,
  },
  {
    id: 3,
    title: "Проект №3",
    price: 459_990,
    image: "/img/pavilions/3.jpg",
    shape: "hexagon",
    kind: "closed",
    size: "4x4 м",
    areaM2: 16,
  },
  {
    id: 4,
    title: "Проект №4",
    price: 525_300,
    image: "/img/pavilions/4.jpg",
    shape: "octagon",
    kind: "open",
    size: "4x4 м",
    areaM2: 16,
  },
  {
    id: 5,
    title: "Проект №5",
    price: 498_000,
    image: "/img/pavilions/5.jpg",
    shape: "round",
    kind: "closed",
    size: "4x4 м",
    areaM2: 16,
  },
  {
    id: 6,
    title: "Проект №6",
    price: 371_900,
    image: "/img/pavilions/6.jpg",
    shape: "japanese",
    kind: "bbq",
    size: "4x4 м",
    areaM2: 16,
  },
  {
    id: 7,
    title: "Проект №7",
    price: 399_500,
    image: "/img/pavilions/7.jpg",
    shape: "rectangle",
    kind: "open",
    size: "5x3 м",
    areaM2: 15,
  },
  {
    id: 8,
    title: "Проект №8",
    price: 612_000,
    image: "/img/pavilions/8.jpg",
    shape: "hexagon",
    kind: "closed",
    size: "4x4 м",
    areaM2: 16,
  },
  {
    id: 9,
    title: "Проект №9",
    price: 455_000,
    image: "/img/pavilions/9.jpg",
    shape: "square",
    kind: "bbq",
    size: "4x4 м",
    areaM2: 16,
  },
  {
    id: 10,
    title: "Проект №10",
    price: 430_000,
    image: "/img/pavilions/10.jpg",
    shape: "octagon",
    kind: "open",
    size: "3x4 м",
    areaM2: 12,
  },
];


