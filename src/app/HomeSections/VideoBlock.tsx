"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import VideoModal from "../components/VideoModal";

interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string; // expected to be an embeddable URL
}

const ALL_VIDEOS: VideoItem[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: "Беседка деревянная \"Большая семёрка\"",
  thumbnail: `/img/pavilions/${(i % 10) + 1}.jpg`,
  // Placeholder YouTube embed URL
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
}));

export default function VideoBlock() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [slideSize, setSlideSize] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    const computeSlide = () => {
      const el = containerRef.current;
      if (!el || el.children.length < 2) return;
      const first = el.children[0] as HTMLElement;
      const second = el.children[1] as HTMLElement;
      const step = second.offsetLeft - first.offsetLeft;
      setSlideSize(step);
    };
    computeSlide();
    window.addEventListener("resize", computeSlide);
    return () => window.removeEventListener("resize", computeSlide);
  }, []);

  const openVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
    setActiveVideo(null);
  };

  const next = () => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: slideSize || 0, behavior: "smooth" });
  };
  const prev = () => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: -(slideSize || 0), behavior: "smooth" });
  };

  return (
    <section className="bg-gray-light py-16">
      <div className="max-w-screen-xl m-auto px-6">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">Видео нашей продукции</h3>

        <div
          ref={containerRef}
          className="flex flex-nowrap gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {ALL_VIDEOS.map((video) => (
            <button
              key={video.id}
              type="button"
              className="group text-left flex-none basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(25%-18px)] snap-start"
              onClick={() => openVideo(video)}
              data-slide
            >
              <div className="relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={320}
                  height={180}
                  className="w-full h-48 object-cover rounded"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/90 rounded-full w-12 h-12 flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                    <FaPlay className="text-black" />
                  </span>
                </span>
                <span className="absolute left-3 bottom-3 text-white text-xs md:text-sm drop-shadow">
                  {video.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 grid place-items-center bg-orange text-white rounded shadow hover:opacity-90"
            aria-label="Предыдущие видео"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            onClick={next}
            className="w-10 h-10 grid place-items-center bg-orange text-white rounded shadow hover:opacity-90"
            aria-label="Следующие видео"
          >
            <FaChevronRight />
          </button>
        </div>

        <VideoModal
          isOpen={isOpen}
          onClose={closeVideo}
          videoUrl={activeVideo?.videoUrl || ""}
          title={activeVideo?.title}
        />
      </div>
    </section>
  );
}


