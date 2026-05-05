import Image from "next/image";
import Link from "next/link";

const manicureAndShellacServices = [
  {
    title: "Maniküre",
    bullets: ["Preis: € 36"],
    description:
      "Nägel werden in Form gebracht, die Hände in einem entspannenden Handbad verwöhnt und anschließend die Nagelhaut sanft entfernt. Eine abschließende Pflege sorgt für ein geschmeidiges, gepflegtes Hautgefühl.",
  },
  {
    title: "Shellac - Neulackierung",
    bullets: ["Preis: € 39"],
    description:
      "Eine Vielfalt an Farben, perfekter Halt ein makelloses Ergebnis - für Nägel, die lange schön bleiben.",
  },
  {
    title: "Shellac – entfernen & erneuern",
    bullets: ["Preis: € 49"],
    description:
      "Schonendes Entfernen des bestehenden Shellacs und anschließende Erneuerung für ein frisches, gleichmäßiges Ergebnis.",
  },
  {
    title: "Trockene Maniküre vor Shellac",
    bullets: ["Aufpreis: + € 19"],
    description:
      "Nägel werden gekürzt, in Form gefeilt und die Nagelhaut sanft entfernt.  Ohne Handbad – für eine optimale Vorbereitung und bessere Haltbarkeit von Shellac.",
  },
  {
    title: "Entfernen des Shellacs",
    bullets: ["Preis: € 29"],
    description:
      "Schonendes Entfernen des Shellacs, inklusive Kürzen und Formen der Nägel. Zum Abschluss Nagelhärter und eine  Abschlusspflege.",
  },
];

export default function ManicurePage() {
  return (
    <div className="bg-[#f5f5f3] px-4 pb-12 pt-6 md:px-8 md:pb-16 md:pt-8 lg:px-12">
      <div className="mx-auto max-w-[1800px]">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[230px] md:h-[300px] lg:h-[340px]">
            <Image
              src="/manicure-myservices.jpg"
              alt="Manicure"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex items-center justify-end px-6 md:px-10 lg:px-12">
              <h1 className="font-serif text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[1] tracking-[-0.03em] text-white">
                MANICURE
              </h1>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-[780px] px-2 pt-10 pb-14 text-center md:px-4 md:pt-12 md:pb-16 lg:pt-14">
          <div className="inline-flex rounded-full bg-[#efedf0] px-4 py-1.5 text-[10px] tracking-[0.16em] text-[#EA6E94]">
            ✦ MANICURE
          </div>

          <h2 className="mt-5 font-serif text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] leading-[1.1] tracking-[-0.03em]">
            Maniküre & Shellac
          </h2>
        </section>

        {/* SERVICES */}
        <section className="pb-6 md:pb-8">
          <div className="overflow-hidden rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* IMAGE */}
              <div className="relative h-[360px] md:h-[420px] lg:h-auto">
                <Image
                  src="/manicure-picture1.jpg"
                  alt="Maniküre Leistungen"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* TEXT */}
              <div className="bg-[#c9beb3] px-8 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16">
                <div className="flex h-full items-start">
                  <div className="space-y-6 w-full">
                    {manicureAndShellacServices.map((service) => (
                      <div key={service.title}>
                        {/* TITLE */}
                        <h3 className="font-sans text-[18px] md:text-[19px] font-medium text-white">
                          {service.title}
                        </h3>

                        {/* BULLETS */}
                        <div className="font-sans text-[12px] tracking-[0.02em] text-white/85 mt-2">
                          {service.bullets.join(" · ")}
                        </div>

                        {/* DESCRIPTION */}
                        <p className="font-sans text-[13.5px] md:text-[14px] leading-[1.5] text-white/80 mt-2">
                          {service.description}
                        </p>
                      </div>
                    ))}

                    {/* BUTTON */}
                    <a
                      href="tel:+436764432882"
                      className="inline-flex rounded-full bg-[#EA6E94] px-6 py-2 text-[11px] tracking-[0.25em] text-white hover:brightness-95">
                      JETZT BUCHEN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MORE */}
        <section className="bg-[#c9beb3] mt-8 rounded-2xl px-6 py-10 md:px-10 md:py-12 lg:px-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-[2rem] md:text-[3rem] text-white">
              Weitere Behandlungen
            </h2>

            <a
              href="tel:+436764432882"
              className="hidden md:inline-flex rounded-full bg-[#EA6E94] px-6 py-2 text-[10px] tracking-[0.25em] text-white">
              JETZT BUCHEN
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link
              href="/manicure"
              className="relative h-[260px] overflow-hidden rounded-2xl">
              <Image
                src="/manicure-picture3.jpg"
                alt=""
                fill
                className="object-cover object-[center_25%]"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-0 p-5 text-white font-sans">
                MANICURE + SHELLAC
              </div>
            </Link>

            <Link
              href="/pedicure"
              className="relative h-[260px] overflow-hidden rounded-2xl">
              <Image
                src="/pedicure-myservices3.jpg"
                alt=""
                fill
                className="object-cover object-[center_80%]"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-0 p-5 text-white font-sans">
                PEDICURE
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
