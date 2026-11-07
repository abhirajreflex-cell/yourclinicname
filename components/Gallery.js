"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { clinic } from "@/lib/clinic";
import SectionTitle from "./SectionTitle";

export default function Gallery() {
  const items = clinic.gallery;
  const total = items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  // Auto slide har 4 second me
  useEffect(() => {
    if (paused || total < 2) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next, total]);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    if (touchX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    }
    touchX.current = null;
    setPaused(false);
  };

  return (
    <section id="gallery" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          label="Our Clinic"
          title="Take a Look Inside"
          subtitle="Clean, modern and comfortable. Slide to see more."
        />

        <div
          className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl sm:aspect-[16/9]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Slides: sab ek line me, translate se slide hota hai */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((g, i) => (
              <div key={g.src} className="relative h-full w-full shrink-0">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority={i === 0}
                  unoptimized
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Caption */}
          <p className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-10 text-white">
            {items[index].alt}
          </p>

          {/* Left / Right button */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl text-slate-900 shadow transition hover:bg-white"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl text-slate-900 shadow transition hover:bg-white"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {total > 1 && (
          <div className="mt-5 flex justify-center gap-2">
            {items.map((g, i) => (
              <button
                type="button"
                key={g.src}
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-teal-600" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}