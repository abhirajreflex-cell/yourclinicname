import Image from "next/image";
import { clinic } from "../lib/clinic";

export default function Hero() {
  // heroTitle me se highlight word alag karke color dena
  const [before, after] = clinic.heroTitle.split(clinic.heroHighlight);

  return (
   <section id="top" className="relative flex min-h-[100svh] items-center md:sticky md:top-0">
      {/* Background image */}
      <div className="absolute inset-0">
      <Image
        src={clinic.heroImage}
        alt={`${clinic.name} dental clinic`}
        fill
        priority
        sizes="100vw"
        unoptimized
        className="object-cover"
      />
      {/* Dark overlay taaki text clear dikhe */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-teal-400 sm:text-base">
          {clinic.tagline}
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
          {before}
          <span className="text-teal-400">{clinic.heroHighlight}</span>
          {after}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
          {clinic.heroSubtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#appointment"
            className="rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-orange-600"
          >
            Book Appointment
          </a>
          <span className="rounded-full bg-white/15 px-5 py-3 font-semibold text-white backdrop-blur">
            ⭐ {clinic.rating} ({clinic.reviewCount}+ reviews)
          </span>
        </div>
      </div>
      </div>
    </section>
  );
}