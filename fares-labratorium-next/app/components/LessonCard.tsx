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
    <div className={`lesson-card ${themeClass}`}>
      <h2 className="lesson-card__title">{title}</h2>

      <Icon className="lesson-card__icon" />

      <ul className="lesson-card__file-list">
        {files.map((file) => (
          <li key={file.href}>
            <a href={file.href} download>
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}