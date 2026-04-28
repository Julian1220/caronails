export default function DatenschutzPage() {
  return (
    <div className="bg-[#f5f5f3] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-[760px]">
        <h1 className="text-2xl font-semibold tracking-tight text-black md:text-3xl">
          Datenschutzerklärung
        </h1>

        <section className="mt-10 space-y-4 text-sm leading-7 text-black/70 md:text-base">
          <h2 className="text-lg font-semibold text-black md:text-xl">
            Einleitung und Überblick
          </h2>
          <p>
            Wir haben diese Datenschutzerklärung (Fassung 20.04.2026-113209957)
            verfasst, um Ihnen gemäß der DSGVO zu erklären, welche Daten wir
            verarbeiten und welche Rechte Sie haben.
          </p>
          <p>
            Diese Erklärung soll die wichtigsten Dinge so einfach und transparent
            wie möglich beschreiben.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-7 text-black/70 md:text-base">
          <h2 className="text-lg font-semibold text-black md:text-xl">
            Anwendungsbereich
          </h2>
          <p>
            Diese Datenschutzerklärung gilt für alle von uns verarbeiteten
            personenbezogenen Daten.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Websites und Onlineauftritte</li>
            <li>Social Media und E-Mail-Kommunikation</li>
            <li>mobile Apps</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-7 text-black/70 md:text-base">
          <h2 className="text-lg font-semibold text-black md:text-xl">
            Rechtsgrundlagen
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
            <li>Vertrag (Art. 6 Abs. 1 lit. b DSGVO)</li>
            <li>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)</li>
            <li>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-7 text-black/70 md:text-base">
          <h2 className="text-lg font-semibold text-black md:text-xl">
            Kontaktdaten
          </h2>
          <p>
            Caroline Damon
            <br />
            Wagramer Straße 61/9/1
            <br />
            <br />
            E-Mail: caroline.damon@icloud.com
            <br />
            Telefon: +436764432882
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-7 text-black/70 md:text-base">
          <h2 className="text-lg font-semibold text-black md:text-xl">
            Speicherdauer
          </h2>
          <p>
            Wir speichern personenbezogene Daten nur so lange, wie es notwendig
            ist. Danach werden sie gelöscht, sofern keine gesetzlichen
            Verpflichtungen bestehen.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-7 text-black/70 md:text-base">
          <h2 className="text-lg font-semibold text-black md:text-xl">
            Ihre Rechte
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
          </ul>
        </section>

        <p className="mt-14 text-xs text-black/40">
          Quelle: Datenschutz Generator von AdSimple
        </p>
      </div>
    </div>
  );
}