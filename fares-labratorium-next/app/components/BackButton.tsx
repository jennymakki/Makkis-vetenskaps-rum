"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  label?: string;
};

export default function BackButton({
  label = "Tillbaka",
}: BackButtonProps) {
  const router = useRouter();

  return (
    <section className="pt-6">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center cursor-pointer justify-center w-full bg-white text-[#203A2B] border border-[#203A2B]/20 py-3 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 hover:-translate-y-1 transition"
      >
        {label}
      </button>
    </section>
  );
}