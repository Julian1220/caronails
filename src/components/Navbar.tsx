"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const brandBg = "#D2C5B9";
  const headingPink = "#EA6E94";
  const phoneNumber = "+436781259086";

  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const links = [
    { label: "MANICURE", href: "/manicure" },
    { label: "PEDICURE", href: "/pedicure" },
  ];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full shadow-sm"
      style={{ backgroundColor: brandBg, ["--hp" as any]: headingPink }}>
      <nav className="w-full px-4 lg:px-10">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.22em] text-white/80 transition hover:text-[var(--hp)]">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              aria-label="Home"
              className="flex items-center justify-center">
              <img
                src="/logo_navbar.png"
                alt="Logo"
                className="h-8 w-auto md:h-10"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center rounded-full px-6 py-2 text-xs tracking-[0.22em] text-white transition hover:brightness-95"
              style={{ backgroundColor: headingPink }}>
              BOOK NOW
            </a>
          </div>

          <div className="lg:hidden ml-auto flex items-center">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 text-white/90 transition hover:text-white focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
              aria-label="Menü"
              aria-expanded={open}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true">
                <path
                  d="M5 7h14M5 12h14M5 17h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div
            className="lg:hidden border-t border-white/25"
            style={{ backgroundColor: brandBg }}>
            <div className="py-4 flex flex-col items-center text-center">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="w-full py-3 text-center text-xs tracking-[0.22em] text-white/85 transition hover:text-[var(--hp)]">
                  {l.label}
                </Link>
              ))}

              <a
                href={`tel:${phoneNumber}`}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-xs tracking-[0.22em] text-white transition hover:brightness-95"
                style={{ backgroundColor: headingPink }}>
                BOOK NOW
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
