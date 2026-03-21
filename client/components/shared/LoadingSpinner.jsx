"use client";

export default function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-ruleline border-t-scholarred animate-spin" />
      <p
        className="text-inkfaded text-sm"
        style={{ fontFamily: "var(--font-courier)" }}
      >
        {message}
      </p>
    </div>
  );
}
