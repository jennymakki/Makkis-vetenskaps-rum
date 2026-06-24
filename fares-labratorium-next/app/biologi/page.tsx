import Link from "next/link";
import { Dna } from "lucide-react";

export const metadata = {
  title: "Biologi - Makkis Vetenskapsrum",
};

export default function BiologiPage() {
  return (
    <div className="Biologi">
      <h2 className="Biologi__h2">Kurser i Biologi</h2>

      <Link href="/biologi1" className="Subjects__biologi">
        Biologi 1
        <Dna className="Subjects__biologiIcon" />
      </Link>

      <Link href="/biologi2" className="Subjects__biologi">
        Biologi 2
        <Dna className="Subjects__biologiIcon" />
      </Link>

      <Link href="/" className="Back">
        Tillbaka
      </Link>
    </div>
  );
}