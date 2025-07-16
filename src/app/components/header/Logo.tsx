import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <div className="logo bg-white flex items-center justify-center col-span-2 md:p-2 p-0">
      <Link href={"/"}>
        <Image
          width={100}
          height={0}
          src="/img/Logo.png"
          alt="Беседка Лофт"
        ></Image>
      </Link>
    </div>
  );
}
