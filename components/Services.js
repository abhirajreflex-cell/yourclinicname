import Image from "next/image";
import { clinic } from "@/lib/clinic";
import { whatsappLink } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

import Reveal from "./Reveal";


export default function Services() {
  return (
    <section id="services" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Services"
          title="Treatments We Offer"
          subtitle="Complete dental care under one roof."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clinic.services.map((s, i) => (
  <Reveal key={s.title} from="up" delay={i * 120}>
    <article className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
                <a
                  href={whatsappLink(`Hello, I want to know more about ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-semibold text-teal-700 hover:underline"
                >
                  Enquire on WhatsApp →
                </a>
              </div>
            </article>
          </Reveal>))}
        </div>
      </div>
    </section>
  );
}