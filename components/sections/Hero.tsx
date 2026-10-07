import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CheckCircle2 } from "lucide-react";
import { SITE } from "@/content/site";

const trustChips = [
  "Langsung dari Pabrik",
  `Free Layout 3D`,
  `Free Ongkir ${SITE.freeShippingArea}`,
  "Konsultasi Gratis",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      {/* Decorative blobs */}
      <div aria-hidden className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-600/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-teal-400/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-700/60 text-emerald-200 border border-emerald-600/40">
            Solusi Rak Retail Langsung dari Pabrik
          </p>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Pabrik Rak Minimarket{" "}
            <span className="text-emerald-300">&amp; Paket Setup</span>{" "}
            Toko Retail
          </h1>

          {/* Subtitle — 3 value props strongest */}
          <p className="mt-6 text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Free konsultasi &amp; desain layout 3D · Harga langsung pabrik ·{" "}
            Custom sesuai ukuran ruanganmu
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              section="hero"
              size="lg"
              id="cta-wa-hero"
              className="w-full sm:w-auto"
            />
            <a
              href="#process"
              className="text-emerald-200 hover:text-white font-medium transition-colors text-sm underline underline-offset-4"
            >
              Lihat cara kerjanya →
            </a>
          </div>

          {/* Trust chips */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3" aria-label="Keunggulan utama">
            {trustChips.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-emerald-100 text-sm font-medium border border-white/10"
              >
                <CheckCircle2 size={14} className="text-emerald-300 shrink-0" />
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Bottom wave */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
