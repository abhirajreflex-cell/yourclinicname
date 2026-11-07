"use client";

import { useEffect, useRef, useState } from "react";

// from: "up" | "down" | "left" | "right" | "zoom"
// delay: milliseconds (cards ek ke baad ek lane ke liye)
// once: true = sirf ek baar animate, false = upar-neeche dono taraf har baar
export default function Reveal({ children, from = "up", delay = 0, once = false, className = "" }) {
  const ref = useRef(null);
  const [state, setState] = useState("hidden");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;

    if (prefersReducedMotion) {
      return;
    }

    // Jo section page khulte hi screen par hai, usko hide mat karo
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setState("shown");
    } else {
      setState("hidden");
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          if (once || isMobile) io.disconnect();
        } else if (!once) {
          if (!isMobile) setState("hidden");
        }
      },
      {
        threshold: isMobile ? 0.08 : 0.12,
        rootMargin: isMobile ? "0px 0px -24px 0px" : "0px 0px -50px 0px",
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    // Bahar wala div hilta nahi, wahi observe hota hai (isse flicker nahi hota)
    <div ref={ref} className={className}>
      <div
        className="reveal"
        data-state={state}
        data-from={from}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}