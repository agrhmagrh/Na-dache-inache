import Link from "next/link";
import { linkWhatsapp, linkTelegeram, linkPhone } from "@/app/contstants/const";
import { TypeDesktopProps, TypeMobileProps } from "@/types";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

export default function Contact({
  type,
}: TypeMobileProps | TypeDesktopProps) {
  return (
    <div
      className={`flex ${type == "desktop" ? "" : "justify-end px-10 col-span-6"} gap-3 col-span-5 justify-end`}
    >
      <Link href={linkWhatsapp}>
        <span className="border p-1 flex items-center text-2xl md:text-md">
          <FaWhatsapp />
        </span>
      </Link>
      <Link href={linkTelegeram}>
        <span className="border p-1 flex items-center text-2xl md:text-md">
          <FaTelegram />
        </span>
      </Link>
      <span className="border p-1 black md:text-sm text-nowrap">
        <a href={linkPhone}>+7 (985) 630-93-36</a>
      </span>
    </div>
  );
}
