import LessonCard from "../components/LessonCard";
import { kemi1Sections } from "@/src/data/kemi1";
import BackButton from "../components/BackButton";

export const metadata = {
  title: "Kemi 1 - Makkis Vetenskapsrum",
};

export default function Kemi1Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">

      <section className="text-center">
        <h2 className="text-4xl font-light text-[#f3f3f3]">
          Kemi 1
        </h2>

        <p className="text-[#f3f3f3] mt-2">
          Lektionsmaterial och resurser
        </p>
      </section>

      <section className="space-y-6">
        {kemi1Sections.map((section) => (
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