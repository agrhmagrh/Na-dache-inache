export type PergolaShape = "rectangle" | "square" | "arched";

export type PergolaType = "bioclimatic" | "fabric" | "classic";

export interface PergolaProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
  shape: PergolaShape;
  kind: PergolaType;
  size: string; // e.g. 3x4 м
  areaM2: number;
}

export const SHAPE_LABEL: Record<PergolaShape, string> = {
  rectangle: "Прямоугольная",
  square: "Квадратная",
  arched: "Арочная",
};

export const TYPE_LABEL: Record<PergolaType, string> = {
  bioclimatic: "Биоклиматическая",
  fabric: "С тканью",
  classic: "Классическая",
};

export const PERGOLA_PRODUCTS: PergolaProductItem[] = [
  {
    id: 1,
    title: "Пергола №1",
    price: 289_900,
    image: "/img/pergola-1.jpg",
    shape: "rectangle",
    kind: "classic",
    size: "3x4 м",
    areaM2: 12,
  },
  {
    id: 2,
    title: "Пергола №2",
    price: 315_500,
    image: "/img/pergola-2.jpg",
    shape: "square",
    kind: "fabric",
    size: "4x4 м",
    areaM2: 16,
  },
  {
    id: 3,
    title: "Пергола №3",
    price: 349_000,
    image: "/img/pergola-3.jpg",
    shape: "arched",
    kind: "classic",
    size: "3x5 м",
    areaM2: 15,
  },
  {
    id: 4,
    title: "Пергола №4",
    price: 379_900,
    image: "/img/pergola-4.jpg",
    shape: "rectangle",
    kind: "bioclimatic",
    size: "3x6 м",
    areaM2: 18,
  },
  {
    id: 5,
    title: "Пергола №5",
    price: 305_000,
    image: "/img/pergola-5.jpg",
    shape: "square",
    kind: "classic",
    size: "3x3 м",
    areaM2: 9,
  },
  {
    id: 6,
    title: "Пергола №6",
    price: 398_000,
    image: "/img/pergola-6.jpg",
    shape: "arched",
    kind: "fabric",
    size: "4x6 м",
    areaM2: 24,
  },
];


