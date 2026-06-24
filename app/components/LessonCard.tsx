import type { LucideIcon } from "lucide-react";

type FileItem = {
  name: string;
  href: string;
};

type LessonCardProps = {
  title: string;
  Icon: LucideIcon;
  files: FileItem[];
  themeClass?: string; 
};

export default function LessonCard({
  title,
  Icon,
  files,
  themeClass = "",
}: LessonCardProps) {
  return (
    <div
      className={`rounded-2xl shadow-md p-6 bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition ${themeClass}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-light text-[#203A2B]">
          {title}
        </h2>

        <Icon className="w-6 h-6 text-[#203A2B]/70" />
      </div>

      <ul className="space-y-3">
        {files.map((file) => (
          <li key={file.href}>
            <a
              href={file.href}
              download
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 text-[#203A2B] px-4 py-2 rounded-lg transition shadow-sm hover:shadow"
            >
              <span className="text-sm font-medium">
                {file.name}
              </span>

              <span className="text-xs opacity-60">↓</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}