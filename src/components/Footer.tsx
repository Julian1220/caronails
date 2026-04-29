"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export function Footer() {
  const brandBg = "rgb(210, 197, 186)";
  const headingPink = "#EA6E94";
  const phoneNumber = "+436764432882";

  const labelStyle = {
    fontFamily:
      "var(--font-general-sans), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    fontSize: "10px",
  } as const;

  const linkStyle = {
    fontFamily:
      "var(--font-rubik), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    fontSize: "15px",
  } as const;

  return (
    <footer className="bg-[#f5f5f3] m-0 p-0">
      <div className="mx-auto max-w-[1800px] px-4 md:px-8 lg:px-12 pb-6 md:pb-8">
        <div
          className="relative overflow-hidden rounded-[1rem] text-white shadow-sm ring-1 ring-black/5"
          style={{ backgroundColor: brandBg }}>
          <div className="border-b border-white/25">
            <div className="h-10 md:h-14" />
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              <div>
                <p
                  className="uppercase tracking-[0.2em] leading-none"
                  style={{ ...labelStyle, color: headingPink }}>
                  Menü
                </p>

                <ul className="mt-6 space-y-4 text-white/90">
                  <li>
                    <Link
                      className="hover:text-white"
                      style={linkStyle}
                      href="/manicure">
                      Manicure
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-white"
                      style={linkStyle}
                      href="/pedicure">
                      Pedicure
                    </Link>
                  </li>
                  <li>
                    <a
                      className="hover:text-white"
                      style={linkStyle}
                      href={`tel:${phoneNumber}`}>
                      Jetzt Buchen
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p
                  className="uppercase tracking-[0.2em] leading-none"
                  style={{ ...labelStyle, color: headingPink }}>
                  Navigation
                </p>

                <ul className="mt-6 space-y-4 text-white/90">
                  <li>
                    <Link
                      className="hover:text-white"
                      style={linkStyle}
                      href="/datenschutz">
                      Datenschutz
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-white"
                      style={linkStyle}
                      href="/impressum">
                      Impressum
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p
                  className="uppercase tracking-[0.2em] leading-none"
                  style={{ ...labelStyle, color: headingPink }}>
                  Kontakt
                </p>

                <div className="mt-6 space-y-6">
                  <div>
                    <p
                      className="uppercase tracking-[0.2em] leading-none"
                      style={{ ...labelStyle, color: headingPink }}>
                      Phone
                    </p>
                    <a
                      className="mt-2 block font-semibold text-white hover:opacity-90"
                      style={linkStyle}
                      href={`tel:${phoneNumber}`}>
                      +43 676 4432882
                    </a>
                  </div>

                  <div>
                    <p
                      className="uppercase tracking-[0.2em] leading-none"
                      style={{ ...labelStyle, color: headingPink }}>
                      Email
                    </p>
                    <a
                      className="mt-2 block font-semibold text-white hover:opacity-90"
                      style={linkStyle}
                      href="mailto:hello@example.com">
                      caroline.damon@icloud.com
                    </a>
                  </div>

                  <div>
                    <p
                      className="uppercase tracking-[0.2em] leading-none"
                      style={{ ...labelStyle, color: headingPink }}>
                      Adresse
                    </p>
                    <p
                      className="mt-2 font-semibold text-white"
                      style={linkStyle}>
                      Wagramer Straße 61/9/1, 1220 Wien
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p
                  className="uppercase tracking-[0.2em] leading-none"
                  style={{ ...labelStyle, color: headingPink }}>
                  Öffnungszeiten
                </p>
                <div className="mt-6 text-white/90" style={linkStyle}>
                  Nach Vereinbarung
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/25 px-6 py-6 md:px-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3"></div>

              <p
                className="text-center text-white/85 sm:text-left"
                style={linkStyle}>
                © 2026 Caroline Damon
              </p>

              <div className="flex justify-center gap-5 sm:justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-white/80 hover:text-white">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        {children}
      </svg>
    </a>
  );
}
