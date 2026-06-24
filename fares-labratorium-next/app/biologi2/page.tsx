import LessonCard from "../components/LessonCard";
import { biologi2Sections } from "@/src/data/biologi2";
import BackButton from "../components/BackButton";

export const metadata = {
  title: "Biologi 2 - Makkis Vetenskapsrum",
};

export default function Biologi2Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">

      <section className="text-center">
        <h2 className="text-4xl font-light text-[#f3f3f3]">
          Biologi 2
        </h2>

        <p className="text-[#f3f3f3] mt-2">
          Lektionsmaterial och fördjupningsresurser
        </p>
      </section>

      <section className="space-y-6">
        {biologi2Sections.map((section) => (
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