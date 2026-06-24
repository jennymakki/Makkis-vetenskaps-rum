import Link from "next/link";
import { Leaf } from "lucide-react";

import LessonCard from "../components/LessonCard";

export const metadata = {
  title: "Naturkunskap - Makkis Vetenskapsrum",
};

const sections = [
  {
    title: "Naturkunskap 1a1",
    icon: Leaf,
    theme: "theme-natur",
    files: [],
  },
  {
    title: "Naturkunskap 1b",
    icon: Leaf,
    theme: "theme-natur",
    files: [],
  },
  {
    title: "Naturkunskap 2",
    icon: Leaf,
    theme: "theme-natur",
    files: [],
  },
];

export default function NaturkunskapPage() {
  return (
    <div className="Naturkunskap">
      <h2 className="Naturkunskap__h2">Kurser i Naturkunskap</h2>

      {sections.map((section) => (
        <LessonCard
          key={section.title}
          title={section.title}
          Icon={section.icon}
          files={section.files}
          themeClass={section.theme}
        />
      ))}

      <Link href="/" className="Back">
        Tillbaka
      </Link>
    </div>
  );
}