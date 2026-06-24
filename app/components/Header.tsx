import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#14281D] via-[#203A2B] to-[#2F4F3E] text-white py-10 shadow-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <Link
          href="/"
          className="group"
          aria-label="Till startsidan"
        >
          <h1 className="text-2xl md:text-5xl font-extralight tracking-[0.15em] transition-all duration-300 group-hover:tracking-[0.2em] group-hover:text-green-100">
            Makkis Vetenskapsrum
          </h1>
        </Link>
      </div>
    </header>
  );
}