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
      {/* Hero */}
      <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden md:h-[calc(100vh-5rem)]">
        <Image
          src="/manicure-myservices.jpg"
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

      {/* Meine Leistungen */}
      <section className="bg-[#f5f5f3] px-4 pt-14 pb-8 md:px-8 md:pt-16 md:pb-10 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-6 flex items-center justify-between gap-6 md:mb-8">
            <h2
              className={`${italiana.className} text-[2rem] leading-none tracking-[-0.02em] text-black md:text-[3.4rem] lg:text-[4.2rem]`}
              style={{ textShadow: "0 0 0.35px rgba(0,0,0,0.55)" }}>
              Meine Leistungen
            </h2>

            <a
              href="tel:+436764432882"
              className="hidden items-center justify-center self-center rounded-full bg-[#EA6E94] px-6 py-[5px] text-[10px] font-light tracking-[0.28em] text-white transition duration-200 hover:brightness-95 md:inline-flex">
              JETZT BUCHEN
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link
              href="/manicure"
              className="group relative h-[240px] overflow-hidden rounded-[1rem] md:h-[310px] lg:h-[340px]">
              <Image
                src="/manicure-picture3.jpg"
                alt="Manicure + Shellac"
                fill
                className="object-cover object-[center_25%] transition duration-500 group-hover:scale-[1.03]"
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
              className="group relative h-[240px] overflow-hidden rounded-[1rem] md:h-[310px] lg:h-[340px]">
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

          <div className="mt-6 md:hidden">
            <a
              href="tel:+436764432882"
              className="inline-flex items-center justify-center rounded-full bg-[#EA6E94] px-6 py-[5px] text-[10px] font-light tracking-[0.28em] text-white transition duration-200 hover:brightness-95">
              JETZT BUCHEN
            </a>
          </div>
        </div>
      </section>

      {/* Feature Widget */}
      <section className="bg-[#f5f5f3] px-4 pb-8 md:px-8 md:pb-10 lg:px-12">
        <div className="mx-auto max-w-[1800px] overflow-hidden rounded-[1rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="min-h-[340px] bg-[#c9beb3] md:min-h-[420px]">
              <div className="grid h-full min-h-[340px] grid-rows-3 px-8 md:min-h-[420px] md:px-12 lg:px-16">
                <div />
                <div className="flex items-center">
                  <div className="w-full">
                    <h3 className="text-[1.55rem] font-bold leading-[1.04] tracking-[-0.03em] text-white md:text-[1.9rem]">
                      Gepflegte Nägel, die ruhig und hochwertig wirken
                    </h3>

                    <p className="mt-4 text-[15px] font-normal leading-[1.38] tracking-[-0.015em] text-white/85 md:text-[15px]">
                      Individuelle Pflege, saubere Technik und Ergebnisse, die
                      überzeugen. Ob natürlich oder modern – jede Behandlung
                      wird sorgfältig auf Sie abgestimmt, damit Ihre Nägel nicht
                      nur schön aussehen, sondern sich auch gesund anfühlen.
                    </p>

                    <a
                      href="tel:+436781259086"
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-[#EA6E94] px-6 py-[5px] text-[10px] font-light tracking-[0.28em] text-white transition duration-200 hover:brightness-95">
                      JETZT BUCHEN
                    </a>
                  </div>
                </div>
                <div />
              </div>
            </div>

            <div className="relative min-h-[340px] md:min-h-[420px]">
              <Image
                src="/manicure-picture2.jpg"
                alt="Elegante Nägel"
                fill
                className="object-cover object-[center_80%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Über mich Widget */}
      <section className="bg-[#f5f5f3] px-4 pb-10 md:px-8 md:pb-12 lg:px-12">
        <div className="mx-auto max-w-[900px] rounded-[1rem] bg-[#c9beb3] px-8 py-10 md:px-12 md:py-14 lg:px-16 text-center">
          <h3 className="text-[1.4rem] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[1.8rem]">
            Über mich
          </h3>

          <p className="mt-4 text-[15px] font-normal leading-[1.5] tracking-[-0.015em] text-white/85">
            Als Fußpflegerin lege ich besonderen Wert auf fachgerechte,
            hygienische und sorgfältige Behandlungen. Jede Behandlung wird
            individuell auf Ihre Bedürfnisse abgestimmt – für gesunde, gepflegte
            Füße und Nägel. Ihr Wohlbefinden und Ihre Fußgesundheit stehen dabei
            stets im Mittelpunkt.
          </p>
        </div>
      </section>
    </>
  );
}
