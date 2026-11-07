import Link from "next/link";
import { clinic } from "@/lib/clinic";

export default function LegalPage({ title, children }) {
  return (
    <>
      <header className="bg-slate-900">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-2xl font-extrabold text-white">
            {clinic.name}
          </Link>
          <Link href="/" className="text-white/90 hover:text-teal-300">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{title}</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-600">{children}</div>
      </main>
    </>
  );
}