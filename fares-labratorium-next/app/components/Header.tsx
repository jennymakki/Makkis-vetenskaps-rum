import Link from "next/link";

import { Home } from "lucide-react";

export default function Header() {
  return (
    <header>
      <div className="header__div">
        <h1 className="header__h1">Makkis Vetenskapsrum</h1>

        <Link
          href="/"
          className="header__icon-link"
          aria-label="Go to homepage"
        >
          <Home className="header__icon" />
        </Link>
      </div>
    </header>
  );
}
