"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Keunggulan", href: "#value-props" },
    { label: "Segmen", href: "#segments" },
    { label: "Cara Kerja", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#"
            aria-label={`${SITE.brandFull} — Kembali ke atas`}
            className="flex items-center gap-2 font-extrabold text-xl text-emerald-700 tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600 text-white text-sm font-black">R</span>
            {SITE.brand}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Menu utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <WhatsAppButton section="header" size="sm" id="cta-wa-header" />
          </div>

          {/* Mobile menu toggle */}
          <button
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <Container>
            <nav className="flex flex-col py-4 gap-1" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-3 px-2 text-base font-medium text-gray-700 hover:text-emerald-700 border-b border-gray-50 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <WhatsAppButton section="header" size="md" className="w-full" />
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
