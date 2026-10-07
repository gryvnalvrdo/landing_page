import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
