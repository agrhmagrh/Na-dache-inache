export interface PavilionImage {
  id: number;
  url: string;
  alt?: string;
}

export interface AdvantageItem {
  id: number;
  icon: React.ComponentType;
  title: string;
  description: string;
}

export interface MaterialItem {
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

export const PAVILIONS_IMAGES: PavilionImage[] = [
  { id: 1, url: "/img/pavilions/1.jpg", alt: "Беседка проект 1" },
  { id: 2, url: "/img/pavilions/2.jpg", alt: "Беседка проект 2" },
  { id: 3, url: "/img/pavilions/10.jpg", alt: "Беседка проект 3" },
  { id: 4, url: "/img/pavilions/4.jpg", alt: "Беседка проект 4" },
  { id: 5, url: "/img/pavilions/5.jpg", alt: "Беседка проект 5" },
  { id: 6, url: "/img/pavilions/6.jpg", alt: "Беседка проект 6" },
  { id: 7, url: "/img/pavilions/7.jpg", alt: "Беседка проект 7" },
  { id: 8, url: "/img/pavilions/8.jpg", alt: "Беседка проект 8" },
  { id: 9, url: "/img/pavilions/9.jpg", alt: "Беседка проект 9" },
];

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: 1,
    name: "Дерево",
    description: "Беседки из дерева придают уют и натуральность вашему участку. Деревянные конструкции могут быть выполнены из таких пород, как сосна, ель, дуб, кедр и другие.",
    image: "/img/derevo.jpg",
    imageAlt: "Деревянная беседка"
  },
  {
    id: 2,
    name: "Металл",
    description: "Металлические беседки обладают прочностью и долговечностью. Они могут быть выполнены из стали, алюминия или других металлических сплавов и отлично подходят для создания современного или классического дизайна.",
    image: "/img/metal.jpg",
    imageAlt: "Металлическая беседка"
  },
  {
    id: 3,
    name: "Древесно-полимерный композит",
    description: "Беседки из ДКП легкие, прочные и легко моются. Они доступны в различных цветах и формах, что делает их отличным выбором для современных и практичных решений.",
    image: "/img/plastic.jpg",
    imageAlt: "Беседка из ДКП"
  }
];

export const COMPANY_ADVANTAGES: CompanyAdvantage[] = [
  {
    id: 1,
    title: "Профессионализм и опыт",
    description: "Наша команда специалистов имеет многолетний опыт в создании качественных беседок на заказ и готова воплотить в жизнь ваши самые смелые идеи.",
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