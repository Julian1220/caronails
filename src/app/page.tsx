import { Italiana } from "next/font/google";
import Image from "next/image";

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
    </>
  );
}
