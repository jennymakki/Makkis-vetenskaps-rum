import Link from "next/link";
import { FlaskConical } from "lucide-react";

export const metadata = {
  title: "Kemi - Makkis Vetenskapsrum",
};

export default function KemiPage() {
  return (
    <div className="Kemi">
      <h2 className="Kemi__h2">Kurser i Kemi</h2>

      <Link href="/kemi1" className="Subjects__kemi">
        Kemi 1
        <FlaskConical className="Subjects__kemiIcon" />
      </Link>

      <Link href="/kemi2" className="Subjects__kemi">
        Kemi 2
        <FlaskConical className="Subjects__kemiIcon" />
      </Link>

      <Link href="/" className="Back">
        Tillbaka
      </Link>
    </div>
  );
}