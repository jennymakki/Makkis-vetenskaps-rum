import Link from "next/link";
import LessonCard from "../components/LessonCard";
import { kemi1Sections } from "@/src/data/kemi1";

export const metadata = {
  title: "Biologi 1 - Makkis Vetenskapsrum",
};

export default function Biologi1Page() {
  return (
    <div className="biologi1__div">
      <h2 className="kemi1__h2">Kemi 1</h2>

      {kemi1Sections.map((section) => (
        <LessonCard
          key={section.title}
          title={section.title}
          Icon={section.icon}
          files={section.files}
          themeClass={section.theme}
        />
      ))}

      <Link href="/kemi" className="Back">
        Tillbaka
      </Link>
    </div>
  );
}