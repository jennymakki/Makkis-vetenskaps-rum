import Link from "next/link";
import { Leaf } from "lucide-react";
import BackButton from "../components/BackButton";

export const metadata = {
  title: "Naturkunskap - Makkis Vetenskapsrum",
};

export default function NaturkunskapPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
      <section className="text-center">
        <h2 className="text-4xl font-light text-[#f3f3f3]">Naturkunskap</h2>
        <p className="text-[#f3f3f3] mt-2">Välj en kurs nedan</p>
      </section>

      <section className="grid gap-5">

        <Link
          href="/naturkunskap1b"
          className="group bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          <span className="text-xl font-light">Naturkunskap 1b</span>
          <Leaf className="group-hover:scale-110 transition" />
        </Link>

        <Link
          href="/naturkunskap2"
          className="group bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          <span className="text-xl font-light">Naturkunskap 2</span>
          <Leaf className="group-hover:scale-110 transition" />
        </Link>
      </section>

      <BackButton/>
    </main>
  );
}
