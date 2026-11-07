import Image from "next/image";
import { clinic } from "@/lib/clinic";
import SectionTitle from "./SectionTitle";

export default function About() {
  const { about } = clinic;
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={about.image}
            alt={`About ${clinic.name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw" 
            unoptimized
            className="object-cover"
          />
        </div>

        <div>
          <SectionTitle label="About Us" title={about.title} center={false} />
          <p className="-mt-6 text-lg leading-relaxed text-slate-600">{about.text}</p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {about.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-teal-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-teal-700 sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-sm text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}