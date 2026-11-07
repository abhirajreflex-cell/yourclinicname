"use client";

import { useEffect, useState } from "react";

export default function SocialLink({ href, name, className = "" }) {
  const [show, setShow] = useState(false);
  const missing = !href || href === "#" || href === "null";

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(t);
  }, [show]);

  if (!missing) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {name}
      </a>
    );
  }

  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShow(true);
        }}
        className={className}
      >
        {name}
      </a>
      {show && (
        <span
          role="status"
          className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-slate-900 px-5 py-3 text-center text-sm text-white shadow-xl ring-1 ring-white/20"
        >
          Your {name} profile is not provided yet.
        </span>
      )}
    </>
  );
}