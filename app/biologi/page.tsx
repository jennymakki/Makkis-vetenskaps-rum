import Link from "next/link";
import { Dna } from "lucide-react";
import BackButton from "../components/BackButton";

export const metadata = {
  title: "Biologi - Makkis Vetenskapsrum",
};

export default function BiologiPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">

      <section className="text-center">
        <h2 className="text-4xl font-light text-[#f3f3f3]">
          Biologi
        </h2>

        <p className="text-[#f3f3f3] mt-2">
          Välj en kurs nedan
        </p>
      </section>

      <section className="grid gap-6">

        <Link
          href="/biologi1"
          className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          <span className="text-xl font-light">Biologi 1</span>
          <Dna className="group-hover:scale-110 transition" />
        </Link>

        <Link
          href="/biologi2"
          className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          <span className="text-xl font-light">Biologi 2</span>
          <Dna className="group-hover:scale-110 transition" />
        </Link>

        <BackButton/>

      </section>

    </main>
  );
}