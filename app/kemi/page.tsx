import Link from "next/link";
import { FlaskConical } from "lucide-react";
import BackButton from "../components/BackButton";

export const metadata = {
  title: "Kemi - Makkis Vetenskapsrum",
};

export default function KemiPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">

      <section className="text-center">
        <h2 className="text-4xl font-light text-[#f3f3f3]">
          Kemi
        </h2>

        <p className="text-[#f3f3f3] mt-2">
          Välj en kurs nedan
        </p>
      </section>

      <section className="grid gap-6">

        <Link
          href="/kemi1"
          className="group bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          <span className="text-xl font-light">Kemi 1</span>
          <FlaskConical className="group-hover:scale-110 transition" />
        </Link>

        <Link
          href="/kemi2"
          className="group bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          <span className="text-xl font-light">Kemi 2</span>
          <FlaskConical className="group-hover:scale-110 transition" />
        </Link>

      </section>
    <BackButton/>
    </main>
  );
}