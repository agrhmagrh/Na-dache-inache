import Link from "next/link";
import Image from "next/image";
import { Links } from "@/routes";

export default function WarrantyBlock() {
  return (
    <section className="bg-gray-light py-10">
      <div className="max-w-screen-xl m-auto px-6">
        <div className="relative grid grid-cols-12 items-stretch border border-gray-300 rounded-md overflow-hidden bg-white">
          {/* Left: Text */}
          <div className="col-span-12 md:col-span-7 bg-orange text-white p-8 md:p-12 relative">
            {/* Decorative circle to imitate curved edge */}
            <div className="hidden md:block absolute -right-40 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gray-light"></div>

            <div className="relative z-10 max-w-xl">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-6xl md:text-7xl font-extrabold leading-none">3</span>
                <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                  года гарантии на все конструкции
                </h3>
              </div>

              <Link
                href={"/" + Links.PAVILIONS}
                className="inline-block bg-white text-black px-6 py-3 rounded shadow-sm hover:shadow transition-shadow"
              >
                Перейти в каталог
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="col-span-12 md:col-span-5 relative h-56 md:h-auto">
            <Image
              src="/img/garanty.jpg"
              alt="Гарантия на конструкции"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


