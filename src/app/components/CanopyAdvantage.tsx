import { type CanopyAdvantage } from "@/app/contstants/canopies";

interface CanopyAdvantageProps extends Omit<CanopyAdvantage, 'id'> {}

export default function CanopyAdvantage({ icon: Icon, title, description }: CanopyAdvantageProps) {
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