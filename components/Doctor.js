import Image from "next/image";
import { clinic } from "@/lib/clinic";
import SectionTitle from "./SectionTitle";

export default function Doctor() {
  
  const d = clinic.doctor;
  return (
    <section id="doctor" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionTitle label="Our Doctor" title={d.name} center={false} />
          <p className="-mt-6 text-lg font-semibold text-teal-700">{d.degree}</p>
          <p className="mt-1 text-slate-500">Experience: {d.experience}</p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{d.bio}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {d.specialities.map((s) => (
              <span
                key={s}
                className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700"
              >
                {s}
              </span>
            ))}
          </div>

          <a
            href="#appointment"
            className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-orange-600"
          >
            Book with {d.name.split(" ")[0]} {d.name.split(" ")[1]}
          </a>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={d.image}
            alt={d.name}
            fill
            sizes="(max-width: 1024px) 90vw, 448px"
            unoptimized
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}