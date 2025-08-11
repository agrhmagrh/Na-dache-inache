"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewModal, { type Review } from "../components/ReviewModal";

const REVIEWS: Review[] = [
  {
    id: 1,
    title: "Беседка Застекленная Заря 4x4",
    author: "Анна",
    rating: 5,
    fullText:
      "Нашли компанию в интернете, без рекомендаций, ребята отработали на 100%. Менеджер Татьяна все объяснила, рассказала, предложила массу вариантов...\n\nПо способам оплаты, по срокам изготовления и доставки, по качеству сборки — всё отлично. Спасибо!",
  },
  {
    id: 2,
    title: "Беседка Застекленная Заря 4x4",
    author: "Анна",
    rating: 5,
    fullText:
      "Нашли компанию в интернете, без рекомендаций, ребята отработали на 100%... Качеству сборки — высший уровень. Спасибо сборщикам Павлу и Денису.",
  },
  {
    id: 3,
    title: "Беседка Застекленная Заря 4x4",
    author: "Анна",
    rating: 5,
    fullText:
      "Отличный сервис и внимание к деталям. Быстрая доставка, аккуратный монтаж, всё соответствует ожиданиям.",
  },
];

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-1 mb-3" aria-label={`Оценка ${value} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < value ? "text-orange" : "text-gray-400"} />
      ))}
    </div>
  );
}

function ReviewCard({ review, onOpen }: { review: Review; onOpen: (r: Review) => void }) {
  return (
    <article className="bg-gray-product text-white p-6 rounded-md flex flex-col gap-3">
      <h4 className="font-semibold">{review.title}</h4>
      <p className="text-sm text-gray-200">Отзыв оставила {review.author}</p>
      <Stars value={review.rating} />
      <p className="text-sm text-gray-100 line-clamp-6">
        {review.fullText}
      </p>
      <button
        type="button"
        className="mt-auto self-start bg-orange text-white px-4 py-2 rounded hover:opacity-90"
        onClick={() => onOpen(review)}
      >
        Читать подробнее
      </button>
    </article>
  );
}

export default function ReviewsBlock() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<Review | null>(null);

  const open = (r: Review) => {
    setActive(r);
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
    setActive(null);
  };

  return (
    <section className="bg-gray-light py-16">
      <div className="max-w-screen-xl m-auto px-6">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">Что о нас говорят клиенты</h3>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.id} review={r} onOpen={open} />
          ))}
        </div>

        <ReviewModal isOpen={isOpen} onClose={close} review={active} />
      </div>
    </section>
  );
}


