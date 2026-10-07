"use client";

import { buildWaLink, trackWaClick } from "@/lib/whatsapp";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(() => setShowBubble(true), 3000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {/* Desktop floating button */}
      <div
        className={`fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-end gap-2 transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {showBubble && (
          <div className="relative bg-white rounded-2xl shadow-xl px-4 py-3 text-sm font-medium text-gray-700 max-w-[200px] animate-bounce-slow">
            <button
              aria-label="Tutup bubble WhatsApp"
              className="absolute -top-1.5 -right-1.5 bg-gray-200 rounded-full p-0.5 hover:bg-gray-300"
              onClick={() => setShowBubble(false)}
            >
              <X size={10} />
            </button>
            💬 Mau konsultasi dulu? Chat kami!
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 shadow-sm" />
          </div>
        )}
        <a
          id="cta-wa-floating"
          href={buildWaLink("floating")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi WA Gratis — via WhatsApp"
          data-cta-location="floating"
          onClick={() => trackWaClick("floating")}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl hover:shadow-emerald-400/40 transition-all duration-200 hover:scale-110 active:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          <MessageCircle size={26} />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          id="cta-wa-floating-mobile"
          href={buildWaLink("floating")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi WA Gratis — via WhatsApp"
          data-cta-location="floating"
          onClick={() => trackWaClick("floating")}
          className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-colors duration-150 focus-visible:outline-none"
        >
          <MessageCircle size={20} />
          Konsultasi WA Gratis
        </a>
      </div>
    </>
  );
}
