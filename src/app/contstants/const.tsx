import { BiPhone } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";


export const linkWhatsapp: string = "https://api.whatsapp.com/send?phone=79856309336"
export const linkPhone: string = "tel:79856309336"

export const solutions = [
    { name: "Беседки", href: "/pavilions" },
    {
      name: "Навесы",
      href: "/canopies",
    },
    {
      name: "Перголы",
      href: "/pergols",
    },
    {
      name: "Помещения хоз. назначения",
      href: "/pantries",
    },
  ];
  export const callsToAction = [
    { name: "Написать Whatsapp", target: "_blank", href: linkWhatsapp, icon: BsWhatsapp },
    { name: "Позвонить", target: "_contain", href: linkPhone, icon: BiPhone },
  ];
