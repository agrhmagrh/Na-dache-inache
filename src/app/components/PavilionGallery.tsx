"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
  className?: string;
};

export default function PavilionGallery({ images, alt, className }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % images.length);

  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className={"grid grid-cols-[84px_1fr] gap-3 " + (className ?? "")}>
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((src, i) => (
          <button
            key={src + i}
            aria-label={`Показать изображение ${i + 1}`}
            className={`relative w-[84px] h-16 rounded overflow-hidden border ${
              i === activeIndex ? "border-orange" : "border-gray-additional"
            }`}
            onClick={() => setActiveIndex(i)}
          >
            <Image
              src={src}
              alt={`${alt} превью ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image as background */}
      <div className="relative bg-gray-dark-block rounded p-4">
        <div
          className="h-80 md:h-[420px] rounded-md bg-center bg-cover shadow-inner"
          style={{ backgroundImage: `url(${activeImage})` }}
          role="img"
          aria-label={alt}
          onClick={() => setIsZoomOpen(true)}
          title="Открыть изображение"
        />

        {/* Controls */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Предыдущее фото"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange text-white w-8 h-8 flex items-center justify-center"
              onClick={goPrev}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange text-white w-8 h-8 flex items-center justify-center"
              onClick={goNext}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Zoom modal */}
      {isZoomOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            onClick={() => setIsZoomOpen(false)}
          >
            <div
              className="relative w-[92vw] max-w-6xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage}
                alt={alt}
                fill
                className="object-contain"
              />
              <button
                aria-label="Закрыть"
                className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1"
                onClick={() => setIsZoomOpen(false)}
              >
                ✕
              </button>
              {images.length > 1 && (
                <>
                  <button
                    aria-label="Предыдущее изображение"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-orange text-white w-10 h-10"
                    onClick={goPrev}
                  >
                    ‹
                  </button>
                  <button
                    aria-label="Следующее изображение"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange text-white w-10 h-10"
                    onClick={goNext}
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
