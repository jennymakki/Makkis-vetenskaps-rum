import LessonCard from "../components/LessonCard";
import { naturkunskap1bSections } from "@/src/data/naturkunskap1b";
import BackButton from "../components/BackButton";

export const metadata = {
  title: "Naturkunskap 1b",
};

export default function Naturkunskap1bPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">

      <section className="text-center">
        <h2 className="text-4xl font-light text-[#f3f3f3]">
          Naturkunskap 1b
        </h2>

        <p className="text-[#f3f3f3] mt-2">
          Lektionsmaterial och resurser
        </p>
      </section>

      <section className="space-y-6">
        {naturkunskap1bSections.map((section) => (
          <LessonCard
            key={section.title}
            title={section.title}
            Icon={section.icon}
            files={section.files}
            themeClass={section.theme}
          />
        ))}
      </section>

      <BackButton />

    </main>
  );
}