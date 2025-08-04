import { type AdvantageItem } from "@/app/contstants/pavilions";

interface PavilionAdvantageProps extends Omit<AdvantageItem, 'id'> {}

export default function PavilionAdvantage({ icon: Icon, title, description }: PavilionAdvantageProps) {
  return (
    <article className="flex flex-col gap-2 pb-2">
      <div className="flex gap-2 items-center">
        <span className="text-[60px] text-orange">
          <Icon />
        </span>
        <h4 className="text-2xl font-semibold">{title}</h4>
      </div>
      <p className="text-base text-gray-additional leading-relaxed">
        {description}
      </p>
    </article>
  );
} 