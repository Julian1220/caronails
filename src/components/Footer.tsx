"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export function Footer() {
  const brandBg = "#D2C5B9";
  const headingPink = "#EA6E94";

  // Labels: 10px General Sans
  const labelStyle = {
    fontFamily:
      "var(--font-general-sans), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    fontSize: "10px",
  } as const;

  // Links: 15px Rubik
  const linkStyle = {
    fontFamily:
      "var(--font-rubik), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    fontSize: "15px",
  } as const;

  return (
    <footer className="bg-white m-0 p-0">
      <style jsx global>{`
        @keyframes patternMarquee {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -960px 0;
          }
        }
        .pattern-marquee {
          animation: patternMarquee 35s linear infinite;
          will-change: background-position;
        }
      `}</style>

      <div className="w-full px-2 sm:px-4 lg:px-6 m-0 pb-0">
        <div
          className="relative mt-0 mb-0 overflow-hidden rounded-t-3xl rounded-b-none text-white shadow-sm ring-1 ring-black/5"
          style={{ backgroundColor: brandBg }}>
          <div
            className="border-b border-white/25 pattern-marquee"
            style={{
              backgroundColor: brandBg,
              backgroundImage: "url('/logo_marquee.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "180px 180px",
            }}>
            <div className="h-[140px] md:h-[200px] lg:h-[220px]" />
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            {/* Handy: 2 Spalten | ab md: 4 Spalten */}
            <div className="grid gap-10 grid-cols-2 md:grid-cols-4">
              {/* Menü */}
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
                    <Link
                      className="hover:text-white"
                      style={linkStyle}
                      href="/#book">
                      Book Now
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Navigation */}
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
                  <li>
                    <Link
                      className="hover:text-white"
                      style={linkStyle}
                      href="/agbs">
                      AGBs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Kontakt */}
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
                      href="tel:+43">
                      +43 678 12590 86
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
                      hello@example.com
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
                      Caro 101, 1220 Wien
                    </p>
                  </div>
                </div>
              </div>

              {/* Öffnungszeiten */}
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
              <div className="flex items-center gap-3">
                <p style={linkStyle}>CARO</p>
              </div>

              <p
                className="text-center text-white/85 sm:text-left"
                style={linkStyle}>
                © 2026 Caroline Damon
              </p>

              <div className="flex justify-center gap-5 sm:justify-end">
                <SocialIcon href="https://instagram.com" label="Instagram">
                  <path
                    d="M8 12.1c0 2.2 1.8 3.9 4 3.9s4-1.7 4-3.9S14.2 8.2 12 8.2s-4 1.7-4 3.9Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M16.6 3.8H7.4A3.6 3.6 0 0 0 3.8 7.4v9.2a3.6 3.6 0 0 0 3.6 3.6h9.2a3.6 3.6 0 0 0 3.6-3.6V7.4a3.6 3.6 0 0 0-3.6-3.6Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M17.2 6.7h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </SocialIcon>

                <SocialIcon href="https://tiktok.com" label="TikTok">
                  <path
                    d="M14 4v10.2a2.8 2.8 0 1 1-2.2-2.7V8.7a6 6 0 1 0 5.8 6V9.2c1 .8 2.2 1.3 3.4 1.4V7.8c-1.8-.2-3.2-1.6-3.6-3.8H14Z"
                    fill="currentColor"
                  />
                </SocialIcon>
              </div>
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
