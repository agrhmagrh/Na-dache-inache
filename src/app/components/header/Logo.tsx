import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <div className="logo bg-white  col-span-1 md:p-2 p-0">
      <Link href={"/"}>
        <Image
          width={144}
          height={70}
          src="/img/Logo.png"
          alt="На даче иначе!"
        ></Image>
      </Link>
    </div>
  );
}
