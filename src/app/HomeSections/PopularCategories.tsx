"use client";
import Link from "next/link";
import { useState } from "react";
import { Links } from "@/routes";

const ITEMS = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  title: `Беседка №${i + 1}`,
  href: `/${Links.PAVILIONS}`,
}));

const INITIAL_COUNT = 6;

export default function PopularCategories() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? ITEMS : ITEMS.slice(0, INITIAL_COUNT);

  return (
    <section className="bg-gray-light py-16">
      <div className="max-w-screen-xl m-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">Популярные категории беседок</h3>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {visible.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="inline-block bg-gray-product text-white px-6 py-3 rounded-sm hover:opacity-90"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((s) => !s)}
          className={expanded
            ? "px-6 py-3 text-gray-800 hover:text-orange"
            : "bg-orange text-white px-6 py-3 rounded-sm hover:opacity-90"}
          aria-label={expanded ? "Скрыть категории" : "Показать еще категории"}
        >
          {expanded ? "Скрыть" : "Показать еще"}
        </button>
      </div>
    </section>
  );
}


