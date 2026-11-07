"use client";

import { clinic } from "@/lib/clinic";
import { whatsappLink } from "@/lib/utils";
import { useEffect, useState } from "react";
import SocialLink from "./SocialLink";
const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
];

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setYear(String(new Date().getFullYear()));
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <footer className="bg-slate-900 px-4 pt-14 pb-6 text-slate-300 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="text-2xl font-extrabold text-white">{clinic.name}</p>
          <p className="mt-3 text-slate-400">{clinic.tagline}</p>
          <p className="mt-3 text-slate-400">{clinic.address}</p>
          <a href={`mailto:${clinic.email}`} className="mt-3 inline-block text-teal-400 hover:underline">
            {clinic.email}
          </a>
        </div>

        {/* Quick links */}
        <div>
          <p className="mb-4 text-lg font-bold text-white">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-teal-400">{l.label}</a>
              </li>
            ))}
            <li>
              <a href={`tel:${clinic.phone}`} className="hover:text-teal-400">Call Now</a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400"
              >
                Msg Now
              </a>
            </li>
          </ul>
        </div>

        {/* Social + legal */}
        <div>
          <p className="mb-4 text-lg font-bold text-white">Follow & Legal</p>
          <ul className="space-y-2">
            <li>
              <SocialLink href={clinic.facebook} name="Facebook" className="hover:text-teal-400" />
            </li>
            <li>
              <SocialLink href={clinic.instagram} name="Instagram" className="hover:text-teal-400" />
            </li>
            <li><a href={clinic.privacyUrl} className="hover:text-teal-400">Privacy Policy</a></li>
            <li><a href={clinic.disclaimerUrl} className="hover:text-teal-400">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © {year} {clinic.name}. All rights reserved.
      </div>
    </footer>
  );
}