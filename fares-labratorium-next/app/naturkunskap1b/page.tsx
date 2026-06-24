import LessonCard from "../components/LessonCard";
import { naturkunskap1bSections } from "@/src/data/naturkunskap1b";
import Link from "next/link";

export const metadata = {
  title: "Naturkunskap 1b",
};

export default function Naturkunskap1bPage() {
  return (
    <div className="naturkunskap1b__div">
      <h2 className="naturkunskap1b__h2">Naturkunskap 1b</h2>

      {naturkunskap1bSections.map((section) => (
        <LessonCard
          key={section.title}
          title={section.title}
          Icon={section.icon}
          files={section.files}
          themeClass={section.theme}
        />
      ))}

      <Link href="/naturkunskap" className="Back">
        Tillbaka
      </Link>
    </div>
  );
}