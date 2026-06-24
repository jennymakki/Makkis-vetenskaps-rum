import Link from "next/link";
import { Leaf } from "lucide-react";

export const metadata = {
  title: "Naturkunskap - Makkis Vetenskapsrum",
};

export default function NaturkunskapPage() {
  return (
    <div className="Naturkunskap">
      <h2 className="Naturkunskap__h2">Kurser i Kemi</h2>

          <Link href="/naturkunskap1a1" className="Subjects__naturkunskap">
        Naturkunskap 1a1
        <Leaf className="Subjects__naturkunskapIcon" />
      </Link>

      <Link href="/naturkunskap1b" className="Subjects__naturkunskap">
        Naturkunskap 1b
        <Leaf className="Subjects__kemiIcon" />
      </Link>

      <Link href="/naturkunskap2" className="Subjects__naturkunskap">
        Naturkunskap 2
        <Leaf className="Subjects__naturkunskapIcon" />
      </Link>

      <Link href="/" className="Back">
        Tillbaka
      </Link>
    </div>
  );
}