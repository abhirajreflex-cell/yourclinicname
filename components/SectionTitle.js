import Reveal from "./Reveal";
export default function SectionTitle({ label, title, subtitle, center = true }) {
  return (
    <Reveal from="up">
      <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
        {label}
      </p>
      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-lg text-slate-600 ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
    </Reveal>
  );
}