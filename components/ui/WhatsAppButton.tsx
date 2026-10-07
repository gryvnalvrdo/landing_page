"use client";

import { buildWaLink, trackWaClick, type WaSection } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  section: WaSection;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export default function WhatsAppButton({
  section,
  label = "Konsultasi WA Gratis",
  size = "md",
  className,
  id,
}: WhatsAppButtonProps) {
  return (
    <a
      id={id ?? `cta-wa-${section}`}
      href={buildWaLink(section)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — via WhatsApp`}
      data-cta-location={section}
      onClick={() => trackWaClick(section)}
      className={cn(
        "inline-flex items-center justify-center font-bold rounded-full",
        "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800",
        "text-white shadow-lg hover:shadow-emerald-300/50",
        "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500",
        sizeClasses[size],
        className
      )}
    >
      <MessageCircle className="shrink-0" size={size === "lg" ? 22 : size === "sm" ? 16 : 18} />
      {label}
    </a>
  );
}
