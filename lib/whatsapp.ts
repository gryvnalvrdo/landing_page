"use client";

import { SITE } from "@/content/site";

export type WaSection =
  | "header"
  | "hero"
  | "value-props"
  | "segments"
  | "process"
  | "layout3d"
  | "why-factory"
  | "gallery"
  | "faq"
  | "final-cta"
  | "floating";

const messages: Record<WaSection, string> = {
  header:
    "Halo Ritelindo, saya ingin konsultasi rak dan setup toko. Mohon informasi lebih lanjut.",
  hero: "Halo Ritelindo, saya tertarik dengan paket setup toko retail. Bisa bantu konsultasi? Jenis toko: … Ukuran ruangan: …",
  "value-props":
    "Halo Ritelindo, saya ingin konsultasi tentang paket lengkap rak toko beserta layanan layout 3D gratis.",
  segments:
    "Halo Ritelindo, saya sedang berencana setup toko dan ingin konsultasi kebutuhan rak yang sesuai. Jenis toko: …",
  process:
    "Halo Ritelindo, saya ingin memulai proses konsultasi rak toko. Jenis toko: … Ukuran ruangan: …",
  layout3d:
    "Halo Ritelindo, saya tertarik dengan layanan Layout 3D Gratis. Boleh saya konsultasi lebih lanjut?",
  "why-factory":
    "Halo Ritelindo, saya ingin tahu lebih lanjut tentang harga langsung pabrik dan pilihan kustomisasi rak toko.",
  gallery:
    "Halo Ritelindo, saya melihat galeri proyek dan tertarik. Boleh konsultasi untuk toko saya?",
  faq: "Halo Ritelindo, saya punya pertanyaan seputar produk dan layanan. Boleh saya konsultasi?",
  "final-cta":
    "Halo Ritelindo, saya siap konsultasi untuk setup toko retail. Jenis toko: … Ukuran: …",
  floating:
    "Halo Ritelindo, saya ingin konsultasi rak dan paket setup toko. Mohon informasi lebih lanjut.",
};

export function buildWaLink(section: WaSection): string {
  const text = encodeURIComponent(messages[section]);
  return `https://wa.me/${SITE.waNumber}?text=${text}`;
}

export function trackWaClick(section: WaSection): void {
  if (typeof window !== "undefined") {
    (window as typeof window & { dataLayer?: object[] }).dataLayer?.push({
      event: "wa_click",
      location: section,
    });
  }
}
