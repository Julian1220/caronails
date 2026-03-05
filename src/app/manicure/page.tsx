import { Italiana } from "next/font/google";
import Image from "next/image";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
});

const manicureServices = [
  {
    title: "Maniküre",
    price: "€ 36",
    description:
      "Klassische Pflege für sauber geformte, gepflegte Nägel und ein elegantes, natürliches Finish.",
  },
  {
    title: "Shellac-Lackierung neu",
    price: "€ 39",
    description:
      "Langanhaltende Farbe mit glänzendem Ergebnis – ideal für einen makellosen Look über viele Tage hinweg.",
  },
  {
    title: "Shellac entfernen & erneuern",
    price: "€ 49",
    description:
      "Schonendes Entfernen des bestehenden Shellacs und präzise Neumodellierung für ein frisches, gepflegtes Ergebnis.",
  },
];

export default function ManicurePage() {
  return (
    <div className="bg-[#f5f5f3] px-4 pb-16 pt-8 md:px-8 md:pb-24 md:pt-10 lg:px-12">
      <div className="mx-auto max-w-[1800px]">
        <section className="relative overflow-hidden rounded-[2rem]">
          <div className="relative h-[260px] w-full md:h-[360px] lg:h-[420px]">
            <Image
              src="/manicure.jpg"
              alt="Manicure"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex items-center justify-end px-6 md:px-12 lg:px-20">
              <h1
                className={`${italiana.className} text-4xl text-white md:text-6xl lg:text-8xl`}>
                MANICURE
              </h1>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-24">
          <div className="mx-auto inline-flex rounded-full bg-[#efedf0] px-5 py-2 text-[11px] font-medium tracking-[0.18em] text-[#EA6E94]">
            ✦ MANICURE
          </div>

          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-semibold leading-tight text-black md:text-5xl">
            Professionelle Maniküre für gepflegte Hände und ein stilvolles
            Finish
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-black/55 md:text-lg">
            Unsere Maniküre vereint präzise Pflege, saubere Formgebung und
            hochwertige Produkte. Ob klassisch gepflegt oder mit langanhaltendem
            Shellac – jede Behandlung wird mit Ruhe, Sorgfalt und einem Blick
            für Ästhetik umgesetzt.
          </p>
        </section>

        <section className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {manicureServices.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-black md:text-3xl">
                    {service.title}
                  </h3>
                  <span className="rounded-full bg-[#f8d3df] px-4 py-2 text-sm font-medium text-[#b84d73]">
                    {service.price}
                  </span>
                </div>

                <p className="mt-6 text-base leading-8 text-black/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-5xl rounded-[2rem] bg-[#cfc2b7] px-8 py-12 text-center md:mt-20 md:px-14 md:py-16">
          <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            Buche deine Maniküre ganz unkompliziert
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            Wähle zwischen klassischer Maniküre und langanhaltenden Shellac
            Looks – für Hände, die gepflegt, hochwertig und stilvoll wirken.
          </p>

          <a
            href="tel:+436781259086"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#EA6E94] px-8 py-3 text-sm tracking-[0.18em] text-white transition hover:brightness-95">
            BOOK NOW
          </a>
        </section>
      </div>
    </div>
  );
}
