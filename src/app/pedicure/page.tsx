import Image from "next/image";
import Link from "next/link";

const pedicureAddOns = [
  { title: "Nagellack", meta: ["Preis: € 7"] },
  { title: "Frenchlackierung", meta: ["Preis: € 12"] },
  { title: "Shellac-Lackierung", meta: ["Preis: € 30"] },
];

function ServiceBlock({
  title,
  meta,
  lines,
  showDivider,
}: {
  title: string;
  meta: string[];
  lines: string[];
  showDivider?: boolean;
}) {
  return (
    <div className="space-y-2 pb-4 last:pb-0">
      <h3 className="font-sans text-[17px] md:text-[19px] font-medium text-white">
        {title}
      </h3>

      <div className="font-sans text-[12px] text-white/85 tracking-[0.02em]">
        {meta.join(" · ")}
      </div>

      <ul className="mt-2 grid grid-cols-1 gap-y-1 text-[13px] leading-[1.5] text-white/80 lg:grid-cols-2">
        {lines.map((line) => (
          <li key={line} className="flex items-start gap-2">
            <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-white/70" />
            <span className="font-sans">{line}</span>
          </li>
        ))}
      </ul>

      {showDivider && <div className="mt-4 h-px w-full bg-white/15" />}
    </div>
  );
}

export default function PedicurePage() {
  return (
    <div className="bg-[#f5f5f3] px-4 pb-12 pt-6 md:px-8 md:pb-16 md:pt-8 lg:px-12">
      <div className="mx-auto max-w-[1800px]">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[230px] md:h-[300px] lg:h-[340px]">
            <Image
              src="/pedicure.jpg"
              alt="Pedicure"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex items-center justify-end px-6 md:px-10 lg:px-12">
              <h1 className="font-serif text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[1] tracking-[-0.03em] text-white">
                PEDICURE
              </h1>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-[780px] py-10 text-center md:py-12 lg:py-14">
          <div className="inline-flex rounded-full bg-[#efedf0] px-4 py-1.5 text-[10px] tracking-[0.16em] text-[#EA6E94]">
            ✦ PEDICURE
          </div>

          <h2 className="mt-5 font-serif text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] leading-[1.1] tracking-[-0.03em]">
            Unsere Fußpflege-Services für gepflegte Füße
          </h2>
        </section>

        {/* MAIN 1 */}
        <section className="pb-8 md:pb-10">
          <div className="overflow-hidden rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[82vh]">
              <div className="relative h-[360px] md:h-[420px] lg:h-auto">
                <Image
                  src="/pedicure-picture1.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-[#c9beb3] px-8 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16">
                <div className="flex h-full items-center">
                  <div className="space-y-6">
                    <ServiceBlock
                      title="Klassische Fußpflege"
                      meta={["Preis: € 51", "ca. 45 Minuten"]}
                      lines={[
                        "Wohltuende Fußpflege zur Gesunderhaltung der Füße",
                        "Angenehmes Fußbad",
                        "Abtragen von Hornhaut, Rissen sowie Druckstellen",
                        "Behandlung von Hühneraugen",
                        "Fachgerechtes Kürzen und Formen der Nägel",
                        "Behandlung eingewachsener oder verdickter Nägel",
                        "Zurückschieben und Entfernen überschüssiger Nagelhaut",
                        "Pflegende Abschlusspflege",
                      ]}
                      showDivider
                    />

                    <ServiceBlock
                      title="Diabetische Fußpflege"
                      meta={["Preis: € 51"]}
                      lines={[
                        "Sanfte und sichere Fußpflege, speziell abgestimmt auf sensible Füße",
                        "Schonendes Fußbad",
                        "Sanftes Abtragen von Hornhaut",
                        "Vorsichtiges Kürzen und Formen der Nägel",
                        "Behandlung empfindlicher Druckstellen",
                        "Pflegende Abschlusspflege",
                      ]}
                    />

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

        {/* MAIN 2 */}
        <section className="pb-8 md:pb-10">
          <div className="overflow-hidden rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[72vh]">
              <div className="bg-[#c9beb3] px-8 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16">
                <div className="flex h-full items-center">
                  <div className="space-y-6">
                    <ServiceBlock
                      title="Fußpflege mit erhöhtem Aufwand"
                      meta={["Preis: € 62", "ca. 60 Minuten"]}
                      lines={[
                        "Diese Behandlung ist für Füße mit stark ausgeprägten Problemstellungen, bei denen ein erhöhter Zeit und Pflegeaufwand erforderlich ist.",
                        "Angenehmes Fußbad",
                        "Behandlung ausgeprägter Druckstellen und Hühneraugen",
                        "Fachgerechte Behandlung stark eingewachsener oder stark verdickter Nägel",
                        "Pflegende Abschlusspflege",
                      ]}
                    />

                    <div className="h-px w-full bg-white/15" />

                    <div>
                      <h3 className="font-sans text-[16px] text-white">
                        Zusatzleistungen
                      </h3>

                      <ul className="mt-3 space-y-2 text-[13px] text-white/80">
                        {pedicureAddOns.map((a) => (
                          <li key={a.title} className="flex gap-2">
                            <span className="mt-[6px] h-[4px] w-[4px] rounded-full bg-white/70" />
                            <span className="font-sans">
                              {a.title} — {a.meta.join(" · ")}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="tel:+436764432882"
                      className="inline-flex rounded-full bg-[#EA6E94] px-6 py-2 text-[11px] tracking-[0.25em] text-white hover:brightness-95">
                      JETZT BUCHEN
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] md:h-[380px] lg:h-auto">
                <Image
                  src="/pedicure-myservices3.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
