"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { clinic } from "@/lib/clinic";

const links = [
  { label: "About Us", href: "/#about" },
  { label: "Doctor", href: "/#doctor" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Services", href: "/#services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || open ? "bg-slate-900/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#top" className="text-2xl font-extrabold text-white">
          {clinic.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-white/90 transition hover:text-teal-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden items-center gap-5 lg:flex">
          <a href={`tel:${clinic.phone}`} className="font-semibold text-white hover:text-teal-300">
            📞 {clinic.phone}
          </a>
          <Link
            href="/#appointment"
            className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-orange-600"
          >
            Appointment
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-4 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-white/90"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a href={`tel:${clinic.phone}`} className="font-semibold text-white">
              📞 {clinic.phone}
            </a>
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white"
            >
              Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}