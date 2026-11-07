import { clinic } from "@/lib/clinic";
import SectionTitle from "./SectionTitle";

function Stars({ count }) {
  return (
    <div className="text-amber-400" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
      <span className="text-slate-300">{"★".repeat(5 - count)}</span>
    </div>
  );
}

export default function Reviews() {
  const list = clinic.reviews;

  return (
    <section id="reviews" className="overflow-hidden bg-slate-50 py-16 sm:py-24">
      <div className="px-4 sm:px-6">
        <SectionTitle
          label="Reviews"
          title="What Our Patients Say"
          subtitle={`Rated ${clinic.rating}/5 by ${clinic.reviewCount}+ patients on Google`}
        />
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
              {list.map((r, i) => (
                <figure
                  key={`${copy}-${i}`}
                  className="w-80 shrink-0 rounded-3xl bg-white p-6 shadow-md"
                >
                  <Stars count={r.rating} />
                  <blockquote className="mt-3 text-slate-600">“{r.text}”</blockquote>
                  <figcaption className="mt-4 font-bold text-slate-900">{r.name}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href={clinic.googleReviewsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border-2 border-teal-600 px-6 py-3 font-semibold text-teal-700 transition hover:bg-teal-600 hover:text-white"
        >
          See all reviews on Google
        </a>
      </div>
    </section>
  );
}