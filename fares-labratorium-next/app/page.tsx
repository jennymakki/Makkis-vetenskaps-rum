import Link from "next/link";
import Image from "next/image";
import { Dna, FlaskConical, Leaf } from "lucide-react";

export default function HomePage() {
  return (
    <main className="max-w-2xl items-center mx-auto px-6 py-12">
      <section className="max-w-3xl mx-auto bg-gradient-to-r from-[#203A2B] to-[#2F4F3E] text-white rounded-2xl shadow-xl p-10 py-15 text-center mb-20">
        <h2 className="text-4xl font-extralight text-[#f3f3f3] mb-4">Välkommen!</h2>

        <p className="text-lg text-[#f3f3f3] opacity-90 mb-6">
          En plats för dig som vill utforska naturvetenskap genom biologi, kemi
          och naturkunskap.
        </p>

        <div className="h-px bg-white/20 my-6" />

        <p className="leading-relaxed text-[#f3f3f3] opacity-90">
          Här hittar du lektionsmaterial, sammanfattningar, laborationer och
          resurser som hjälper dig att förstå världen omkring dig – från cellens
          minsta beståndsdelar till naturens stora sammanhang.
        </p>
      </section>
    
      <section>
        <h2 className="text-3xl text-[#f3f3f3] font-light mb-8">Ämnen</h2>

        <div className="grid gap-6">
          <Link
            href="/naturkunskap"
            className="group bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl hover:-translate-y-1 transition"
          >
            <span className="text-xl font-light">Naturkunskap</span>
            <Leaf className="group-hover:scale-110 transition" />
          </Link>

          <Link
            href="/biologi"
            className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl hover:-translate-y-1 transition"
          >
            <span className="text-xl font-light">Biologi</span>
            <Dna className="group-hover:scale-110 transition" />
          </Link>

          <Link
            href="/kemi"
            className="group bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl hover:-translate-y-1 transition"
          >
            <span className="text-xl font-light">Kemi</span>
            <FlaskConical className="group-hover:scale-110 transition" />
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#203A2B] to-[#2F4F3E] text-white rounded-2xl shadow-lg p-8 mt-20">
        <h3 className="text-2xl text-center text-[#f3f3f3] font-light mb-6">
          Om mig
        </h3>

        <Image
          src="/images/Fares.png"
          alt="Fares"
          width={800}
          height={800}
          className="w-full max-w-xs mx-auto rounded-xl shadow-md mb-6"
        />

        <p className="text-center text-[#f3f3f3] leading-relaxed">
          Hej! Fares heter jag och undervisar i biologi, kemi och naturkunskap.
          Här kan du lära dig mer om världen omkring dig och vad naturen har att
          erbjuda!
        </p>
      </section>
    </main>
  );
}
