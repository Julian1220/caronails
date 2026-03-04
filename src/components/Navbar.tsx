"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const brandBg = "rgba(210, 197, 186, 0.72)";
  const headingPink = "#EA6E94";
  const phoneNumber = "+436781259086";
  const ANIMATION_MS = 700;

  const [open, setOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const links = [
    { label: "MANICURE", href: "/manicure" },
    { label: "PEDICURE", href: "/pedicure" },
    { label: "SHELLAC", href: "/shellac" },
  ];

  useEffect(() => {
    const clearHideTimeout = () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onClick = (e: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target as Node)) setOpen(false);
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;
      const nearTop = currentScrollY <= 24;

      clearHideTimeout();

      if (nearTop) {
        setIsPinned(false);
        setIsVisible(true);
      } else if (scrollingUp) {
        setIsPinned(true);
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      } else {
        if (isPinned) {
          setIsVisible(false);
          setOpen(false);

          hideTimeoutRef.current = setTimeout(() => {
            setIsPinned(false);
            setIsVisible(true);
          }, ANIMATION_MS);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearHideTimeout();
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isPinned]);

  return (
    <>
      {isPinned && <div className="h-16 md:h-20" />}

      <header
        ref={headerRef}
        className={`z-50 w-full border-b border-white/10 backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isPinned ? "fixed left-0 top-0" : "relative"
        } ${
          isPinned
            ? isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        style={{ backgroundColor: brandBg, ["--hp" as any]: headingPink }}>
        <nav className="w-full px-4 lg:px-10">
          <div className="relative flex h-16 items-center justify-between md:h-20">
            <div className="hidden items-center gap-8 lg:flex xl:gap-10">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[10px] font-light tracking-[0.32em] text-white/78 transition duration-200 hover:text-[var(--hp)]">
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
                  className="h-7 w-auto opacity-95 md:h-9"
                />
              </Link>
            </div>

            <div className="hidden items-center lg:flex">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-full px-6 py-[5px] text-[10px] font-light tracking-[0.28em] text-white transition duration-200 hover:brightness-95"
                style={{ backgroundColor: headingPink }}>
                BOOK NOW
              </a>
            </div>

            <div className="ml-auto flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="relative inline-flex h-10 w-10 items-center justify-center text-white/90 transition hover:text-white focus:outline-none"
                aria-label="Menü"
                aria-expanded={open}>
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                      open ? "top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] block h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                      open ? "top-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
              open ? "max-h-72 border-t border-white/15" : "max-h-0"
            }`}>
            <div className="flex flex-col items-center py-4 text-center">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="w-full py-3 text-center text-[10px] font-light tracking-[0.28em] text-white/85 transition hover:text-[var(--hp)]">
                  {l.label}
                </Link>
              ))}

              <a
                href={`tel:${phoneNumber}`}
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-[5px] text-[10px] font-light tracking-[0.28em] text-white transition hover:brightness-95"
                style={{ backgroundColor: headingPink }}>
                BOOK NOW
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
