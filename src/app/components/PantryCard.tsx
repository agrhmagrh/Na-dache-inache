import { type PantryItem } from "@/app/contstants/pantries";

interface PantryCardProps extends Pick<PantryItem, 'title' | 'description' | 'image'> {}

export default function PantryCard({ title, description, image }: PantryCardProps) {
  return (
    <article 
      className="col-span-1 relative bg-cover bg-center min-h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      style={{ backgroundImage: `url(${image})` }}
      role="article"
      aria-labelledby={`pantry-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="absolute top-1/2 text-nowrap m-auto md:px-10 p-5 min-w-[250px] -translate-x-1/2 -translate-y-1/2 left-1/2 text-center bg-black/70 text-white backdrop-blur-sm rounded-lg group-hover:bg-black/80 transition-colors duration-300">
        <h3 id={`pantry-title-${title.replace(/\s+/g, '-').toLowerCase()}`} className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="absolute bottom-0 px-2 py-4 bg-gray-product text-white w-full">
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </article>
  );
} 