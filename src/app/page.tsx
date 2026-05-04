import { Italiana, Playfair_Display, DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden md:h-[calc(100vh-5rem)]">
        <Image
          src="/manicure-myservices.jpg"
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1
            className={`${playfair.className} text-[2.6rem] leading-[1.05] text-white md:text-[4.5rem] lg:text-[5.5rem] tracking-[-0.03em]`}>
            Das Beste für deine Hände, Füße und dich
          </h1>
        </div>
      </section>

      {/* Meine Leistungen */}
      <section className="bg-[#f5f5f3] px-4 pt-14 pb-6 md:px-8 md:pt-16 md:pb-8 lg:px-12 lg:pt-24 lg:pb-10">
        {" "}
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-8 flex items-end justify-between">
            <h2
              className={`${playfair.className} text-[2.4rem] md:text-[3.6rem] lg:text-[4.4rem] leading-[1.05] tracking-[-0.03em] text-black`}>
              Meine Leistungen
            </h2>

            <a
              href="tel:+436764432882"
              className="hidden md:inline-flex rounded-full bg-[#EA6E94] px-6 py-2 text-[11px] tracking-[0.25em] text-white hover:brightness-95">
              JETZT BUCHEN
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link
              href="/manicure"
              className="group relative h-[260px] md:h-[340px] lg:h-[380px] overflow-hidden rounded-2xl">
              <Image
                src="/manicure-picture3.jpg"
                alt="Manicure + Shellac"
                fill
                className="object-cover object-[center_25%] transition duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-0 p-6">
                <h3
                  className={`${dmSans.className} text-[16px] md:text-[18px] tracking-[0.02em] text-white`}>
                  MANICURE + SHELLAC
                </h3>
              </div>
            </Link>

            <Link
              href="/pedicure"
              className="group relative h-[260px] md:h-[340px] lg:h-[380px] overflow-hidden rounded-2xl">
              <Image
                src="/pedicure-myservices3.jpg"
                alt="Pedicure"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-0 p-6">
                <h3
                  className={`${dmSans.className} text-[16px] md:text-[18px] tracking-[0.02em] text-white`}>
                  PEDICURE
                </h3>
              </div>
            </Link>
          </div>

          <div className="mt-6 md:hidden">
            <a
              href="tel:+436764432882"
              className="inline-flex rounded-full bg-[#EA6E94] px-6 py-2 text-[11px] tracking-[0.25em] text-white">
              JETZT BUCHEN
            </a>
          </div>
        </div>
      </section>

      {/* Feature Widget */}
      <section className="bg-[#f5f5f3] px-4 pt-6 pb-10 md:px-8 md:pt-8 md:pb-12 lg:px-12 lg:pt-10 lg:pb-16">
        {" "}
        <div className="mx-auto max-w-[1800px] overflow-hidden rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* TEXT */}
            <div className="flex items-center bg-[#c9beb3]">
              <div className="mx-auto w-full max-w-[560px] px-6 py-14 md:px-10 md:py-20 lg:px-16">
                <p
                  className={`${dmSans.className} mt-6 text-[16.5px] md:text-[18px] leading-[1.6] text-white/90`}>
                  Individuelle Pflege, saubere Technik und Ergebnisse, die
                  überzeugen. Ob natürlich oder modern – jede Behandlung wird
                  sorgfältig auf Sie abgestimmt, mit einem klaren Fokus auf
                  Hygiene, Präzision und Qualität, damit Ihre Nägel nicht nur
                  schön aussehen, sondern sich auch gepflegt und gesund
                  anfühlen.
                </p>

                <a
                  href="tel:+436781259086"
                  className="mt-8 inline-flex rounded-full bg-[#EA6E94] px-8 py-2.5 text-[11px] tracking-[0.25em] text-white hover:brightness-95">
                  JETZT BUCHEN
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative h-[340px] md:h-[450px] lg:h-auto">
              <Image
                src="/pedicure-page.webp"
                alt="Elegante Nägel"
                fill
                sizes="100vw"
                className="object-cover object-[center_75%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
