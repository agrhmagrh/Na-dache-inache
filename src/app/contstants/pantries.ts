export interface PantryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface AdvantageItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: string;
}

export const PANTRIES_DATA: PantryItem[] = [
  {
    id: 1,
    title: "Сараи и кладовые",
    description: "Предназначены для хранения садовых инструментов, инвентаря, семян, удобрений и других необходимых материалов.",
    image: "/img/hoz-1.jpg"
  },
  {
    id: 2,
    title: "Бытовки и домики для персонала",
    description: "Используются для временного проживания или отдыха на участке, а также для размещения садовых работников или дачников.",
    image: "/img/hoz-2.jpg"
  },
  {
    id: 3,
    title: "Беседки и веранды",
    description: "Создают комфортное пространство для отдыха и общения с семьей и друзьями на свежем воздухе.",
    image: "/img/hoz-3.jpg"
  },
  {
    id: 4,
    title: "Теплицы и оранжереи",
    description: "Используются для выращивания растений, цветов и овощей в течение всего года.",
    image: "/img/hoz-4.jpg"
  }
];

export const ADVANTAGES_DATA: AdvantageItem[] = [
  {
    id: 1,
    title: "Профессионализм и опыт",
    description: "Наша команда специалистов имеет богатый опыт в создании качественных помещений на заказ и готова воплотить в жизнь ваши идеи и предпочтения.",
    image: "/img/handsome.jpg",
    imagePosition: "bg-[-300px]"
  },
  {
    id: 2,
    title: "Индивидуальный подход",
    description: "Мы учитываем все ваши пожелания и особенности вашего участка, чтобы создать идеальное пространство для вашего хозяйства и отдыха.",
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