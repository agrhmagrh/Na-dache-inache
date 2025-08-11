"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PAVILION_PRODUCTS } from "@/app/contstants/pavilionsCatalog";

const STORAGE_KEY = "recently_viewed_pavilions";
const MAX_ITEMS = 12; // store a bit more to keep history
const DISPLAY_LIMIT = 4; // show only the last 4 excluding current

type RecentlyViewedProps = {
  currentId: number;
};

export default function RecentlyViewed({ currentId }: RecentlyViewedProps) {
  const [ids, setIds] = useState<number[]>([]);

  // Save current product to localStorage and load list
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list: number[] = raw ? JSON.parse(raw) : [];
      const next = [currentId, ...list.filter((id) => id !== currentId)].slice(0, MAX_ITEMS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      // Do not show current item in the list
      setIds(next.filter((id) => id !== currentId));
    } catch {
      // ignore storage errors
    }
  }, [currentId]);

  const items = useMemo(() => {
    if (!ids.length) return [];
    const map = new Map(PAVILION_PRODUCTS.map((p) => [p.id, p] as const));
    return ids
      .slice(0, DISPLAY_LIMIT)
      .map((id) => map.get(id))
      .filter(Boolean);
  }, [ids]);

  if (items.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Недавно вы смотрели</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((p) => (
          <article key={p!.id} className="bg-white shadow rounded overflow-hidden">
            <div className="relative h-40">
              <Image src={p!.image} alt={p!.title} fill className="object-cover" />
            </div>
            <div className="bg-gray-product text-white p-4">
              <div className="font-semibold">{p!.price.toLocaleString("ru-RU")} руб.</div>
              <div className="text-sm text-gray-200">{p!.title}</div>
              <Link href={`/pavilions/${p!.id}`} className="mt-3 block w-full bg-orange text-white py-2 text-center">
                Перейти
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


