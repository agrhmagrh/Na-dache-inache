export type CanopyShape =
  | "rectangle"
  | "square"
  | "arched"
  | "gable"
  | "leanTo";

export type CanopyType = "carport" | "terrace" | "entrance";

export interface CanopyProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
  shape: CanopyShape;
  kind: CanopyType;
  size: string; // e.g. 4x6 м
  areaM2: number;
}

export const SHAPE_LABEL: Record<CanopyShape, string> = {
  rectangle: "Прямоугольный",
  square: "Квадратный",
  arched: "Арочный",
  gable: "Двухскатный",
  leanTo: "Односкатный",
};

export const TYPE_LABEL: Record<CanopyType, string> = {
  carport: "Автонавет",
  terrace: "Терраса",
  entrance: "Крыльцо",
};

export const CANOPY_PRODUCTS: CanopyProductItem[] = [
  {
    id: 1,
    title: "Навес №1",
    price: 189_900,
    image: "/img/navesa-1.jpg",
    shape: "leanTo",
    kind: "carport",
    size: "3x6 м",
    areaM2: 18,
  },
  {
    id: 2,
    title: "Навес №2",
    price: 214_500,
    image: "/img/navesa-2.jpg",
    shape: "gable",
    kind: "terrace",
    size: "4x6 м",
    areaM2: 24,
  },
  {
    id: 3,
    title: "Навес №3",
    price: 172_000,
    image: "/img/navesa-3.jpg",
    shape: "arched",
    kind: "entrance",
    size: "2x4 м",
    areaM2: 8,
  },
  {
    id: 4,
    title: "Навес №4",
    price: 238_600,
    image: "/img/navesa-4.jpg",
    shape: "rectangle",
    kind: "terrace",
    size: "3x5 м",
    areaM2: 15,
  },
  {
    id: 5,
    title: "Навес №5",
    price: 199_400,
    image: "/img/navesa-5.jpg",
    shape: "square",
    kind: "carport",
    size: "4x4 м",
    areaM2: 16,
  },
  {
    id: 6,
    title: "Навес №6",
    price: 255_000,
    image: "/img/navesa-6.jpg",
    shape: "leanTo",
    kind: "terrace",
    size: "4x7 м",
    areaM2: 28,
  },
];


