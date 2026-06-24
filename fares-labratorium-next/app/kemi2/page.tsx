import LessonCard from "../components/LessonCard";
import { kemi2Sections } from "@/src/data/kemi2";
import BackButton from "../components/BackButton";

export const metadata = {
  title: "Kemi 2 - Makkis Vetenskapsrum",
};

export default function Kemi2Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">

      <section className="text-center">
        <h2 className="text-4xl font-light text-[#f3f3f3]">
          Kemi 2
        </h2>

        <p className="text-[#f3f3f3] mt-2">
          Lektionsmaterial och fördjupningsresurser
        </p>
      </section>

      <section className="space-y-6">
        {kemi2Sections.map((section) => (
          <LessonCard
            key={section.title}
            title={section.title}
            Icon={section.icon}
            files={section.files}
          />
        ))}
      </section>

      <BackButton />

    </main>
  );
}