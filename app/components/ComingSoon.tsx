"use client";

import { Wrench } from "lucide-react";
import BackButton from "./BackButton";

export default function ComingSoon() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-10 text-center">
      <section className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
        <h2 className="text-3xl font-light text-[#203A2B] mb-6">
          Kommer snart...
        </h2>

        <Wrench className="w-10 h-10 mx-auto text-[#203A2B]/70" />
      </section>

      <BackButton />
    </main>
  );
}
