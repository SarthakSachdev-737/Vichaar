"use client";

const tags = ["Mathematics", "Science", "History", "CS"];

export default function SubjectTags() {
  return (
    <div className="flex justify-center gap-3 mt-6 flex-wrap">
      {tags.map((subject) => (
        <span
          key={subject}
          className="text-xs px-3 py-1 rounded-sm text-inkfaded"
          style={{
            fontFamily: "var(--font-courier)",
            background: "rgba(212, 201, 176, 0.4)",
            border: "1px solid var(--color-ruleline)",
          }}
        >
          {subject}
        </span>
      ))}
    </div>
  );
}
