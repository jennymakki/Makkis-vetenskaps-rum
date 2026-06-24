import LessonCard from "../components/LessonCard";
import { biologi1Sections } from "@/src/data/biologi1";
import BackButton from "../components/BackButton";

export const metadata = {
  title: "Biologi 1 - Makkis Vetenskapsrum",
};

export default function Biologi1Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">

      <section className="text-center">
        <h2 className="text-4xl font-light text-[#f3f3f3]">
          Biologi 1
        </h2>

        <p className="text-[#f3f3f3] mt-2">
          Lektionsmaterial och resurser
        </p>
      </section>

      <section className="space-y-6">
        {biologi1Sections.map((section) => (
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