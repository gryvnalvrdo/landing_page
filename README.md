# Ritelindo — Landing Page B2B

Landing page statis satu halaman untuk **Ritelindo Akselera Kolaborasi**, produsen rak gondola minimarket dan solusi paket setup toko retail. Dibangun sebagai Mini Test Web Developer Intern dengan target Google Ads Search (high-intent keywords).

**Live Demo:** [https://landing-page-hantic.vercel.app](https://landing-page-hantic.vercel.app)

**Repository:** [https://github.com/gryvnalvrdo/landing_page](https://github.com/gryvnalvrdo/landing_page)

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

Prinsip: Server Components by default. `"use client"` hanya untuk komponen yang benar-benar interaktif (Header, FloatingWhatsApp, WhatsAppButton).

---

## Cara Menjalankan Lokal

```bash
npm install
npm run dev
npm run lint
npm run build
```

---

## Struktur Folder

```
app/
  layout.tsx        <html lang="id">, Inter font, metadata+OG, JSON-LD
  page.tsx          merakit semua section
  globals.css       Tailwind import, reduced-motion, utilities
  sitemap.ts        sitemap.xml
  robots.ts         robots.txt
components/
  ui/               Container, SectionHeading, WhatsAppButton
  sections/         Header, Hero, ValueProps, Segments, Process,
                    Layout3D, WhyFactory, Gallery, Faq, FinalCta, Footer
  FloatingWhatsApp.tsx  sticky CTA (client)
content/
  site.ts           brand, nomor WA, URL, area layanan
  copy.ts           semua teks section
lib/
  whatsapp.ts       buildWaLink(section) + trackWaClick()
  seo.ts            metadata object + JSON-LD builder
  utils.ts          cn() helper
public/
  og-image.jpg      1200x630 Open Graph image
```

---

## SEO & Performa

### SEO
- **Meta title:** `Pabrik Rak Minimarket & Paket Setup Toko | Free Layout 3D`
- **Meta description:** `Pabrik rak minimarket & gondola langsung dari pabrik. Free konsultasi & layout 3D, free ongkir Jawa-Bali. Konsultasi WA gratis.`
- **Heading hierarchy:** 1 `<h1>` (Hero), `<h2>` per section, `<h3>` untuk item
- **JSON-LD:** `LocalBusiness` + `FAQPage`
- **Open Graph:** title, description, image 1200×630, locale id_ID, Twitter card
- Canonical URL, sitemap.xml, robots.txt tersedia

### Performa
- `output: 'export'` — full static, zero server runtime
- Inter font: subset latin, `display: swap`, 2 weight
- Tidak ada third-party script
- Minimal JS bundle — mayoritas Server Components

### CTA WhatsApp
- 10+ titik CTA: header, hero, value-props, segments, process, layout3d, why-factory, gallery, faq, final-cta, floating (desktop), sticky bar (mobile)
- `buildWaLink(section)` menghasilkan wa.me URL dengan pesan prefilled per konteks
- `trackWaClick(section)` push ke `window.dataLayer` (GTM-ready)
- Semua tombol: `data-cta-location`, `target="_blank"`, `rel="noopener noreferrer"`, `aria-label`

---

## Value Proposition yang Ditampilkan

1. Free Konsultasi & Layout 3D
2. Free Ongkir Jawa-Bali
3. Free Perakitan Jatim, Jateng & DIY
4. Bisa Custom sesuai kebutuhan & ukuran ruangan toko
5. Produk Langsung dari Pabrik (harga kompetitif)
6. Melayani satuan, paket toko, hingga proyek retail
7. Jasa Interior Toko agar tampilan lebih stylish & modern

---

## Catatan Penggunaan AI Tools

Proyek ini dikembangkan dengan bantuan **Claude** (Anthropic). Claude digunakan untuk mempercepat penulisan struktur komponen, implementasi SEO, dan clean code — sesuai anjuran dalam brief rekrutmen.
