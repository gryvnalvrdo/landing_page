# Ritelindo — Landing Page B2B

Landing page statis satu halaman untuk **Ritelindo Akselera Kolaborasi**, produsen rak gondola minimarket dan solusi paket setup toko retail. Dibangun untuk mini test Web Developer Intern dengan target Google Ads Search.

**Live Demo:** _coming soon (deploy ke Vercel)_

---

## Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 16 (App Router, `output: 'export'`) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Font | Inter (2 weight: 400 & 700, subset latin) |
| Hosting | Vercel (static) |

> **Prinsip:** Server Components by default. `"use client"` hanya untuk Header (scroll/menu), FloatingWhatsApp (scroll/timer), dan WhatsAppButton (click tracking).

---

## Cara Menjalankan Lokal

```bash
npm install
npm run dev        # dev server → http://localhost:3000
npm run lint       # harus bersih (0 errors)
npm run build      # static export → /out
npx serve out      # preview hasil build lokal
```

---

## Struktur Folder

```
app/
  layout.tsx        # <html lang="id">, Inter font, metadata+OG, JSON-LD
  page.tsx          # merakit semua section
  globals.css       # Tailwind import, reduced-motion, utilities
  sitemap.ts        # sitemap.xml
  robots.ts         # robots.txt
components/
  ui/               # Container, SectionHeading, WhatsAppButton
  sections/         # Header, Hero, ValueProps, Segments, Process,
                    # Layout3D, WhyFactory, Gallery, Faq, FinalCta, Footer
  FloatingWhatsApp.tsx  # sticky CTA (client)
content/
  site.ts           # brand, nomor WA, URL, area layanan — SATU sumber
  copy.ts           # semua teks section (edit teks tanpa sentuh JSX)
lib/
  whatsapp.ts       # buildWaLink(section) + trackWaClick()
  seo.ts            # metadata object + JSON-LD builder
  utils.ts          # cn() helper
public/
  og-image.jpg      # 1200×630 Open Graph image
```

---

## Keputusan SEO & Performa

### SEO
- **Meta title** (≤ 60 karakter): `Pabrik Rak Minimarket & Paket Setup Toko | Free Layout 3D`
- **Meta description** (≤ 155 karakter): `Pabrik rak minimarket & gondola langsung dari pabrik. Free konsultasi & layout 3D, free ongkir Jawa-Bali. Konsultasi WA gratis.`
- **Heading hierarchy**: 1 `<h1>` (Hero), `<h2>` per section, `<h3>` untuk kartu/item
- **JSON-LD**: `LocalBusiness` + `FAQPage` (data sesuai konten yang tampil)
- **Open Graph**: title, description, image 1200×630, locale id_ID, Twitter card
- **Canonical URL**, sitemap.xml, robots.txt tersedia

### Performa
- `output: 'export'` → full static, zero server runtime
- Inter font: subset latin saja, `display: swap`, 2 weight
- No third-party scripts (GTM placeholder aman jika belum terpasang)
- `images: { unoptimized: true }` untuk static export compatibility
- Semua section kecuali 3 komponen adalah Server Components → minimal JS bundle

### CTA WhatsApp
- Minimal **7 titik** CTA: header, hero, value-props, segments, process, layout3d, why-factory, gallery, faq, final-cta, floating/sticky mobile
- `buildWaLink(section)` menghasilkan wa.me URL dengan pesan prefilled per konteks
- `trackWaClick(section)` push ke `window.dataLayer` (GTM-ready)
- Semua tombol: `data-cta-location`, `target="_blank"`, `rel="noopener noreferrer"`, `aria-label`

---

## Catatan Penggunaan AI Tools

Proyek ini dikembangkan dengan bantuan AI coding assistant (Antigravity/Gemini). Semua keputusan arsitektur, struktur folder, copy, dan implementasi SEO mengikuti brief di `CLAUDE.md`. Konten yang belum dikonfirmasi diberi komentar `// TODO(content): ganti dengan data asli` dan dijelaskan sebagai **ilustratif** di bawah ini.

### Konten Ilustratif (harus diganti sebelum go-live)
| Item | Keterangan |
|---|---|
| Nomor WA | `6281234567890` — ganti via env `NEXT_PUBLIC_WA_NUMBER` |
| Nomor telepon | `+62 812-3456-7890` di `content/site.ts` |
| Email | `info@ritelindo.co.id` di `content/site.ts` |
| Alamat pabrik | `Surabaya, Jawa Timur` di `content/site.ts` |
| Base URL | `https://ritelindo.vercel.app` — ganti via env `NEXT_PUBLIC_BASE_URL` |
| Harga | Tidak dicantumkan — dijawab "hubungi kami" di FAQ |
| Estimasi waktu produksi | 7–14 hari kerja — konfirmasi dengan tim |
| Minimal order | Belum ada ketentuan baku — konfirmasi |
| Foto galeri | 6 placeholder card — ganti dengan WebP asli (maks 150KB/foto) |
| OG image | Dihasilkan AI — ganti dengan aset brand resmi |

---

## Environment Variables

Buat file `.env.local` di root:

```env
NEXT_PUBLIC_WA_NUMBER=6281234567890
NEXT_PUBLIC_BASE_URL=https://yourdomain.vercel.app
```

---

## Deployment ke Vercel

1. Push repo ke GitHub (public)
2. Import project di [vercel.com](https://vercel.com)
3. Set environment variables di Vercel dashboard
4. Deploy — Vercel otomatis detect `output: 'export'` dan serve folder `/out`

---

## Checklist DoD

- [x] Semua 7 value proposition tampil jelas, akurat sesuai brief
- [x] CTA WA ada di ≥ 7 titik + floating (desktop) + sticky bar (mobile)
- [x] Meta title/description unik, OG tags lengkap, JSON-LD valid
- [x] sitemap.ts dan robots.ts ada
- [x] Heading hierarchy rapi (1 h1, h2 per section, h3 sub-item)
- [x] Responsive 375 / 768 / 1280 (mobile-first, pb-20 untuk sticky bar)
- [x] Tidak ada fakta karangan — semua data placeholder diberi TODO
- [ ] Foto galeri nyata (placeholder saat ini)
- [ ] Screenshot Lighthouse mobile (jalankan setelah deploy)
- [ ] Live demo dapat dibuka tanpa login
