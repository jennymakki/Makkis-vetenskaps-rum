export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#14281D] via-[#203A2B] to-[#2F4F3E] text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h5 className="text-sm md:text-base font-light tracking-wide opacity-80">
          © {new Date().getFullYear()} Makkis Vetenskapsrum
        </h5>
      </div>
    </footer>
  );
}