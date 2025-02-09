import { Links } from "@/routes";
import { BiPhone } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

export const linkWhatsapp: string =
  "https://api.whatsapp.com/send?phone=79856309336";
export const linkPhone: string = "tel:79856309336";

export const solutions = [
  { name: "Беседки", href: Links.PAVILIONS },
  {
    name: "Навесы",
    href: Links.CANOPIES,
  },
  {
    name: "Перголы",
    href: Links.PERGOLS,
  },
  {
    name: "Помещения хоз. назначения",
    href: Links.PANTRIES,
  },
];
export const callsToAction = [
  {
    name: "Написать Whatsapp",
    target: "_blank",
    href: linkWhatsapp,
    icon: BsWhatsapp,
  },
  { name: "Позвонить", target: "_contain", href: linkPhone, icon: BiPhone },
];

export const text = {
  NotFound:
    "Страница отсутствует, но мы уже можем предложить вам другие наши уникальные решения",
  Description: `Наша компания специализируемся на строительстве современных
            конструкций из дерева, таких как беседки, навесы, перголы и т.д. Мы
            знаем, что такое индивидуальный подход к клиенту! Мы используем
            только высококачественные материалы и технологии, чем и обеспечиваем
            долговечность изготовленных конструкций. Наша команда профессионалов
            готова помочь вам в каждом шаге на пути к созданию своей собственной
            беседки или навеса и обеспечить высокое качество услуг. Наша цель –
            сделать процесс строительства максимально простым и комфортным, что
            позволит наслаждаться новой постройкой в течение долгого времени!`,
};
