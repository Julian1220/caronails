import { Italiana } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
});

const widget1Services = [
  {
    title: "Klassische Fußpflege",
    meta: ["Preis: € 51", "Dauer: ca. 45 Minuten"],
    lines: [
      "Wohltuende Fußpflege zur Gesunderhaltung der Füße",
      "Angenehmes Fußbad",
      "Abtragen von Hornhaut, Rissen sowie Druckstellen",
      "Behandlung von Hühneraugen",
      "Fachgerechtes Kürzen und Formen der Nägel",
      "Behandlung eingewachsener oder verdickter Nägel",
      "Zurückschieben und Entfernen überschüssiger Nagelhaut",
      "Pflegende Abschlusspflege",
    ],
  },
  {
    title: "Diabetische Fußpflege",
    meta: ["Preis: € 51"],
    lines: [
      "Sanfte und sichere Fußpflege, speziell abgestimmt auf sensible Füße:",
      "Schonendes Fußbad",
      "Sanftes Abtragen von Hornhaut",
      "Vorsichtiges Kürzen und Formen der Nägel",
      "Behandlung empfindlicher Druckstellen",
      "Pflegende Abschlusspflege",
    ],
  },
];

const widget2MainService = {
  title: "Fußpflege mit erhöhtem Aufwand",
  meta: ["Preis: € 62", "Dauer: ca. 60 Minuten"],
  lines: [
    "Diese Behandlung ist für Füße mit starken, ausgeprägten Problemstellungen, bei denen ein erhöhter Zeit- und Pflegeaufwand erforderlich ist.",
    "Angenehmes Fußbad",
    "Entfernung stark verhornter Haut",
    "Behandlung stark ausgeprägter Druckstellen und Hühneraugen",
    "Fachgerechte Behandlung stark eingewachsener oder stark verdickter Nägel",
    "Pflegende Abschlusspflege",
  ],
};

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
    <div className="pb-4 last:pb-0">
      <div className="flex flex-col gap-1">
        <h3 className="text-[15px] font-semibold leading-[1.15] tracking-[-0.02em] text-white md:text-[16px]">
          {title}
        </h3>
        <div className="text-[11px] leading-[1.2] tracking-[0.02em] text-white/85">
          {meta.join(" · ")}
        </div>
      </div>

      <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 text-[12px] leading-[1.22] tracking-[-0.01em] text-white/82 lg:grid-cols-2">
        {lines.map((line) => (
          <li key={line} className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-[4px] w-[4px] shrink-0 rounded-full bg-white/70" />
            <span>{line}</span>
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
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[1.25rem]">
          <div className="relative h-[210px] w-full md:h-[270px] lg:h-[300px]">
            <Image
              src="/pedicure.jpg"
              alt="Pedicure"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-end px-6 md:px-10 lg:px-12">
              <h1
                className={`${italiana.className} text-[3.1rem] leading-none tracking-[-0.02em] text-white md:text-[4.6rem] lg:text-[5.6rem]`}>
                PEDICURE
              </h1>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-[780px] px-2 py-10 text-center md:px-4 md:py-12 lg:py-14">
          <div className="mx-auto inline-flex items-center justify-center rounded-full bg-[#efedf0] px-4 py-1.5 text-[10px] font-medium tracking-[0.16em] text-[#EA6E94]">
            ✦ PEDICURE
          </div>

          <h2 className="mx-auto mt-5 max-w-[640px] text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.025em] text-black md:text-[1.7rem]">
            Unsere Fußpflege-Services für gepflegte Füße und ein sauberes Finish
          </h2>
        </section>

        {/* Erstes Hauptwidget */}
        <section className="bg-[#f5f5f3] pb-8 md:pb-10">
          <div className="overflow-hidden rounded-[1rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[82vh]">
              <div className="relative min-h-[300px] md:min-h-[380px] lg:min-h-0">
                <Image
                  src="/pedicure-picture1.jpeg"
                  alt="Pedicure Leistungen"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-[#c9beb3] px-8 py-8 md:px-12 md:py-10 lg:px-14">
                <div className="flex h-full items-center">
                  <div className="w-full">
                    <div className="space-y-4">
                      <ServiceBlock
                        title={widget1Services[0].title}
                        meta={widget1Services[0].meta}
                        lines={widget1Services[0].lines}
                        showDivider
                      />
                      <ServiceBlock
                        title={widget1Services[1].title}
                        meta={widget1Services[1].meta}
                        lines={widget1Services[1].lines}
                      />

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
          </div>
        </section>

        {/* Zweites Widget */}
        <section className="bg-[#f5f5f3] pb-6 md:pb-8">
          <div className="overflow-hidden rounded-[1rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[72vh]">
              <div className="bg-[#c9beb3] px-8 py-8 md:px-12 md:py-10 lg:px-14">
                <div className="flex h-full items-center">
                  <div className="w-full space-y-5">
                    <ServiceBlock
                      title={widget2MainService.title}
                      meta={widget2MainService.meta}
                      lines={widget2MainService.lines}
                    />

                    <div className="h-px w-full bg-white/15" />

                    <div>
                      <h3 className="text-[15px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[16px]">
                        Zusatzleistungen Füße
                      </h3>

                      <ul className="mt-3 space-y-2 text-[12px] leading-[1.3] tracking-[-0.01em] text-white/82">
                        {pedicureAddOns.map((a) => (
                          <li key={a.title} className="flex items-start gap-2">
                            <span className="mt-[6px] inline-block h-[4px] w-[4px] shrink-0 rounded-full bg-white/70" />
                            <span>
                              {a.title} — {a.meta.join(" · ")}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

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

              <div className="relative min-h-[260px] md:min-h-[340px] lg:min-h-0">
                <Image
                  src="/pedicure-myservices3.jpg"
                  alt="Zusatzleistungen & erhöhter Aufwand"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Weitere Behandlungen */}
        <section className="bg-[#f5f5f3] pb-10 md:pb-12">
          <div className="overflow-hidden rounded-[1rem] bg-[#c9beb3] px-6 py-8 md:px-10 md:py-10 lg:px-12">
            <div className="mb-8 flex items-center justify-between gap-6 md:mb-10">
              <h2
                className={`${italiana.className} text-[1.8rem] leading-none tracking-[-0.02em] text-white md:text-[3rem] lg:text-[3.6rem]`}
                style={{ textShadow: "0 0 0.35px rgba(255,255,255,0.35)" }}>
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

            <div className="mt-8 md:hidden">
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
