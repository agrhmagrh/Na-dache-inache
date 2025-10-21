export interface CanopyImage {
  id: number;
  url: string;
  alt?: string;
}

export interface CanopyAdvantage {
  id: number;
  icon: React.ComponentType;
  title: string;
  description: string;
}

export interface CanopyMaterial {
  id: number;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface CompanyAdvantage {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: string;
}

export const CANOPIES_IMAGES: CanopyImage[] = [
  { id: 1, url: "/img/navesa-1.jpg", alt: "Навес проект 1" },
  { id: 2, url: "/img/navesa-2.jpg", alt: "Навес проект 2" },
  { id: 3, url: "/img/navesa-3.jpg", alt: "Навес проект 3" },
  { id: 4, url: "/img/navesa-4.jpg", alt: "Навес проект 4" },
  { id: 5, url: "/img/navesa-5.jpg", alt: "Навес проект 5" },
  { id: 6, url: "/img/navesa-6.jpg", alt: "Навес проект 6" },
];

export const CANOPY_MATERIALS: CanopyMaterial[] = [
  {
    id: 1,
    name: "Дерево",
    description: "Навесы из натурального дерева придают вашему участку уют и натуральность. Они могут быть выполнены из различных пород дерева, таких как сосна, ель, дуб, кедр и другие.",
    image: "/img/derevo.jpg",
    imageAlt: "Деревянный навес"
  },
  {
    id: 2,
    name: "Металл",
    description: "Металлические навесы обладают прочностью и долговечностью. Они могут быть изготовлены из стали, алюминия или других металлических сплавов и подходят для различных стилей оформления.",
    image: "/img/metal.jpg",
    imageAlt: "Металлический навес"
  },
  {
    id: 3,
    name: "Ткань",
    description: "Навесы с тканевым навесом обеспечивают легкость и воздушность. Они могут быть выполнены из водоотталкивающих материалов и предоставляют защиту от солнца и дождя.",
    image: "/img/plastic.jpg",
    imageAlt: "Тканевый навес"
  }
];

export const COMPANY_ADVANTAGES: CompanyAdvantage[] = [
  {
    id: 1,
    title: "Профессионализм и опыт",
    description: "Наша команда специалистов имеет многолетний опыт в создании качественных навесов на заказ и готова воплотить в жизнь ваши идеи и предпочтения.",
    image: "/img/handsome.jpg",
    imagePosition: "bg-[-300px]"
  },
  {
    id: 2,
    title: "Индивидуальный подход",
    description: "Мы учитываем все ваши пожелания и особенности вашего участка, чтобы создать идеальное пространство для вашего отдыха и развлечений.",
    image: "/img/quality.jpg",
    imagePosition: ""
  },
  {
    id: 3,
    title: "Качество и гарантия",
    description: "Мы используем только высококачественные материалы и гарантируем долговечность и надежность наших конструкций на долгие годы.",
    image: "/img/garanty.jpg",
    imagePosition: "bg-[-270px]"
  }
]; 