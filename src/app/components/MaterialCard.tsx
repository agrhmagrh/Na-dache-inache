import Image from "next/image";
import { type MaterialItem } from "@/app/contstants/pavilions";

interface MaterialCardProps extends Omit<MaterialItem, 'id'> {}

export default function MaterialCard({ name, description, image, imageAlt }: MaterialCardProps) {
  return (
    <article className="grid grid-cols-8 sm:grid-rows-2 grid-rows-4 gap-x-5 items-center bg-gray-product text-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        className="rounded col-span-2 xl:row-span-4 row-span-1 object-cover"
        src={image}
        alt={imageAlt}
        width={200}
        height={200}
        priority={false}
      />
      <h4 className="text-2xl text-orange font-bold col-span-6 row-span-1">
        {name}
      </h4>
      <p className="text-lg xl:row-span-2 xl:col-span-6 col-span-8 row-span-3 leading-relaxed">
        {description}
      </p>
    </article>
  );
} 