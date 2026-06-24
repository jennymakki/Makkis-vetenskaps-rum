"use client";

import { Wrench } from "lucide-react";
import Link from "next/link";

type ComingSoonProps = {
  backHref?: string;
  title?: string;
};

export default function ComingSoon({
  backHref = "/",
  title = "Kommer snart...",
}: ComingSoonProps) {
  return (
    <div className="ComingSoon">
      <div className="ComingSoon_div">
        <h2 className="ComingSoon__h2">{title}</h2>

        <Wrench className="ComingSoon__icon" />
      </div>

      <Link href={backHref} className="Back">
        Tillbaka
      </Link>
    </div>
  );
}