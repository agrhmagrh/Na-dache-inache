import { type AdvantageItem } from "@/app/contstants/pantries";

interface AdvantageCardProps extends Pick<AdvantageItem, 'title' | 'description' | 'image' | 'imagePosition'> {
  isReversed?: boolean;
}

export default function AdvantageCard({ title, description, image, imagePosition, isReversed }: AdvantageCardProps) {
  return (
    <article className="flex flex-col" role="article">
      <div className={`text-white flex flex-col gap-3 p-2 ${isReversed ? 'md:order-last' : ''}`}>
        <h3 className="text-orange text-2xl font-semibold">{title}</h3>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
      <div 
        className={`min-h-[576px] bg-gray-dark ${isReversed ? 'mb-10' : 'mt-10'} bg-cover rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${imagePosition}`}
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={`Изображение для ${title}`}
      >
      </div>
    </article>
  );
} 