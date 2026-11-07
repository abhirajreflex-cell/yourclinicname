import { clinic } from "@/lib/clinic";
import SectionTitle from "./SectionTitle";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-slate-900 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="[&_h2]:text-white [&_p]:text-slate-300 [&_p:first-child]:text-teal-400">
          <SectionTitle label="Why Us" title={`WHY Choose this clinic`} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clinic.whyUs.map((w, i) => (
            <div
              key={w.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-lg font-bold text-white">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{w.title}</h3>
              <p className="mt-2 text-slate-300">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}