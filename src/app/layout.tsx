import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Metrika from "./components/Metrika";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Беседка Лофт",
  description: "Наш сайт предлагает широкий выбор беседок для вашего сада или участка. Мы производим качественные и прочные беседки из дерева, металла и других материалов. У нас вы можете найти беседки различных размеров и дизайнов, которые подойдут для отдыха, барбекю или просто приятного времяпровождения на свежем воздухе. Покупайте у нас беседки и создайте уютное место для приятного отдыха с семьей и друзьями.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={rubik.className}>{children}</body>
        <Metrika />
    </html>
  );
}
