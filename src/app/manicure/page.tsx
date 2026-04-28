import { Italiana } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
});

const manicureAndShellacServices = [
  {
    title: "Maniküre",
    bullets: ["Preis: € 36"],
    description:
      "Klassische, präzise Pflege für sauber geformte Nägel und ein gepflegtes Gesamtbild. Ideal für einen natürlichen Look mit ruhigem, hochwertigem Finish.",
  },
  {
    title: "Shellac – Lackierung neu",
    bullets: ["Preis: € 39"],
    description:
      "Für langanhaltenden Glanz und ein makelloses Ergebnis. Perfekt, wenn Sie sich eine elegante Farbe mit besonders sauberem Finish wünschen.",
  },
  {
    title: "Shellac – entfernen & erneuern",
    bullets: ["Preis: € 49"],
    description:
      "Schonendes Entfernen des bestehenden Shellacs und anschließende Erneuerung für ein frisches, gleichmäßiges Ergebnis. Optimal für gepflegte Nägel ohne Unterbrechung.",
  },
  {
    title: "Trockene Maniküre vor Shellac",
    bullets: ["Aufpreis: + € 19"],
    description:
      "Die ideale Vorbereitung für ein besonders präzises Shellac-Ergebnis. Durch zusätzliche Detailarbeit an Form und Nagelhaut wirkt die anschließende Lackierung noch sauberer und eleganter.",
  },
  {
    title: "Entfernen des Shellacs",
    bullets: ["Preis: € 29"],
    description:
      "Schonendes Entfernen des Shellacs mit gepflegtem Abschluss. Die Nägel fühlen sich sauber, ordentlich und bereit für den nächsten Look an.",
  },
];

export default function ManicurePage() {
  return (
    <div className="bg-[#f5f5f3] px-4 pb-12 pt-6 md:px-8 md:pb-16 md:pt-8 lg:px-12">
      <div className="mx-auto max-w-[1800px]">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[1.25rem]">
          <div className="relative h-[210px] w-full md:h-[270px] lg:h-[300px]">
            <Image
              src="/manicure-myservices.jpg"
              alt="Manicure"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-end px-6 md:px-10 lg:px-12">
              <h1
                className={`${italiana.className} text-[3.1rem] leading-none tracking-[-0.02em] text-white md:text-[4.6rem] lg:text-[5.6rem]`}>
                MANICURE
              </h1>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-[780px] px-2 pt-10 pb-14 text-center md:px-4 md:pt-12 md:pb-16 lg:pt-14">
          <div className="mx-auto inline-flex items-center justify-center rounded-full bg-[#efedf0] px-4 py-1.5 text-[10px] font-medium tracking-[0.16em] text-[#EA6E94]">
            ✦ MANICURE
          </div>

          <h2 className="mx-auto mt-5 max-w-[640px] text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.025em] text-black md:text-[1.7rem]">
            Maniküre & Shellac
          </h2>
        </section>

        {/* Haupt-Widget */}
        <section className="bg-[#f5f5f3] pb-6 md:pb-8">
          <div className="overflow-hidden rounded-[1rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[360px] md:min-h-[520px] lg:min-h-[640px]">
                <Image
                  src="/manicure-picture1.jpg"
                  alt="Maniküre Leistungen"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="bg-[#c9beb3] px-8 py-8 md:px-12 md:py-10 lg:px-14 lg:py-12">
                <div className="flex h-full items-center">
                  <div className="w-full space-y-4">
                    {manicureAndShellacServices.map((service, idx) => (
                      <div key={service.title} className="pb-4 last:pb-0">
                        <div className="flex flex-col gap-1.5">
                          <h3 className="text-[17px] font-semibold leading-[1.15] tracking-[-0.02em] text-white md:text-[18px]">
                            {service.title}
                          </h3>

                          <div className="text-[12px] leading-[1.2] tracking-[0.02em] text-white/85">
                            {service.bullets.join(" · ")}
                          </div>
                        </div>

                        {/* FIX: kein truncating mehr */}
                        <p className="mt-2 text-[13px] leading-[1.45] tracking-[-0.01em] text-white/80 md:text-[13px]">
                          {service.description}
                        </p>

                        {idx !== manicureAndShellacServices.length - 1 && (
                          <div className="mt-4 h-px w-full bg-white/15" />
                        )}
                      </div>
                    ))}

                    <div className="pt-1">
                      <a
                        href="tel:+436764432882"
                        className="inline-flex items-center justify-center rounded-full bg-[#EA6E94] px-6 py-[5px] text-[10px] font-light tracking-[0.28em] text-white transition duration-200 hover:brightness-95">
                        JETZT BUCHEN
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weitere Behandlungen */}
        <section className="bg-[#f5f5f3] pb-10 md:pb-12">
          <div className="overflow-hidden rounded-[1rem] bg-[#c9beb3] px-6 py-8 md:px-10 md:py-10 lg:px-12">
            <div className="mb-6 flex items-center justify-between gap-6 md:mb-8">
              <h2
                className={`${italiana.className} text-[1.8rem] leading-none tracking-[-0.02em] text-white md:text-[3rem] lg:text-[3.6rem]`}>
                Weitere Behandlungen
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
                className="group relative h-[220px] overflow-hidden rounded-[1rem] md:h-[280px] lg:h-[320px]">
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
                className="group relative h-[220px] overflow-hidden rounded-[1rem] md:h-[280px] lg:h-[320px]">
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
                href="tel:+436781259086"
                className="inline-flex items-center justify-center rounded-full bg-[#EA6E94] px-6 py-[5px] text-[10px] font-light tracking-[0.28em] text-white transition duration-200 hover:brightness-95">
                JETZT BUCHEN
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}