import { Italiana } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
});

export default function HomePage() {
  return (
    <>
      <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden md:h-[calc(100vh-5rem)]">
        <Image
          src="/hero-img.avif"
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1
            className={`${italiana.className} text-4xl text-white md:text-6xl lg:text-7xl`}>
            Das Beste für deine Nägel und dich
          </h1>
        </div>
      </section>

      <section className="bg-[#f5f5f3] px-4 pt-24 pb-14 md:px-8 md:pt-32 md:pb-20 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-8 flex items-center justify-between gap-6 md:mb-10">
            <h2
              className={`${italiana.className} text-[2rem] leading-none tracking-[-0.02em] text-black md:text-[3.4rem] lg:text-[4.2rem]`}
              style={{ textShadow: "0 0 0.35px rgba(0,0,0,0.55)" }}>
              Meine Leistungen
            </h2>

            <a
              href="tel:+436781259086"
              className="hidden items-center justify-center self-center rounded-full bg-[#EA6E94] px-6 py-[5px] text-[10px] font-light tracking-[0.28em] text-white transition duration-200 hover:brightness-95 md:inline-flex">
              JETZT BUCHEN
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link
              href="/manicure"
              className="group relative h-[260px] overflow-hidden rounded-[1rem] md:h-[330px] lg:h-[360px]">
              <Image
                src="/manicure.jpg"
                alt="Manicure + Shellac"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-[15px] font-medium tracking-[0.03em] text-white md:text-[17px]">
                  MANICURE + SHELLAC
                </h3>
              </div>
            </Link>

            <Link
              href="/pedicure"
              className="group relative h-[260px] overflow-hidden rounded-[1rem] md:h-[330px] lg:h-[360px]">
              <Image
                src="/pedicure.jpg"
                alt="Pedicure"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-[15px] font-medium tracking-[0.03em] text-white md:text-[17px]">
                  PEDICURE
                </h3>
              </div>
            </Link>
          </div>

          <div className="mt-8 md:hidden">
            <a
              href="tel:+436781259086"
              className="inline-flex items-center justify-center rounded-full bg-[#EA6E94] px-6 py-[5px] text-[10px] font-light tracking-[0.28em] text-white transition duration-200 hover:brightness-95">
              JETZT BUCHEN
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f3] px-4 pb-14 md:px-8 md:pb-20 lg:px-12">
        <div className="mx-auto max-w-[1800px] overflow-hidden rounded-[1rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex min-h-[420px] items-center bg-[#c9beb3] px-8 py-12 md:min-h-[520px] md:px-14 lg:px-16">
              <div className="max-w-[620px]">
                <h3 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Perfekte Nägel, stilvoll bis ins Detail
                </h3>

                <p className="mt-6 max-w-[620px] text-base leading-8 text-white/85 md:text-[1.15rem]">
                  Bei uns stehen Präzision, Ästhetik und hochwertige Pflege im
                  Mittelpunkt. Ob natürlicher Look, elegante Verstärkung oder
                  modernes Design – wir gestalten Nägel, die deinen Stil
                  unterstreichen und gleichzeitig gepflegt, hochwertig und
                  zeitlos wirken.
                </p>

                <a
                  href="tel:+436781259086"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[#EA6E94] px-10 py-3 text-sm tracking-[0.16em] text-white transition hover:brightness-95">
                  BOOK NOW
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px] md:min-h-[520px]">
              <Image
                src="/service-feature.jpg"
                alt="Elegante Nägel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
