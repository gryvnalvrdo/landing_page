# CLAUDE.md — Landing Page B2B Ritelindo (Mini Test Web Developer Intern)

## 1. Konteks proyek
- **Klien (fiktif untuk tes):** Ritelindo Akselera Kolaborasi (Ritelindo Group) — penjual rak gondola minimarket, rak gudang, dan perlengkapan retail.
- **Tujuan:** 1 halaman landing page (static) untuk destinasi iklan **Google Ads Search (high-intent keywords)**.
- **Konversi utama (satu-satunya):** klik tombol **"Konsultasi WA Gratis"**. Semua keputusan desain/copy diukur dari: apakah ini mendorong klik WA?
- **Audiens:** pemilik minimarket baru, pemilik toko yang ingin upgrade ke toko modern, pemilik yang membuka cabang baru. Sektor: minimarket, kelontong/sembako, ATK, pet shop, baby shop, apotek, bahan kue, fashion, bahan bangunan.
- **Deadline:** Jumat, 9 Okt 2026, 23.59 WIB. Target submit: Kamis malam / Jumat pagi (beri buffer).
- **Deliverable:** (1) repo GitHub public, (2) live demo di Vercel/Netlify/GitHub Pages.
- **Kriteria nilai:** kecepatan muat, kerapian struktur kode, SEO on-page, efektivitas layout visual dalam konversi.

## 2. Stack (keputusan final, jangan diganti tanpa alasan kuat)
- **Next.js (App Router) + TypeScript**, `output: 'export'` (full static, tanpa server).
- **Tailwind CSS**. Tanpa UI library, tanpa animation library.
- `next/font` (1 font family, subset latin, `display: swap`), `next/image`, `lucide-react` atau SVG inline (tree-shaken).
- Hosting: **Vercel** (static).
- Prinsip: **Server Components by default**. `"use client"` hanya untuk komponen yang benar-benar interaktif (menu mobile, tracking klik WA). FAQ pakai `<details>/<summary>` (tanpa JS).

## 3. Commands
```bash
npm install
npm run dev        # dev server
npm run lint       # harus bersih
npm run build      # harus sukses (static export ke /out)
npx serve out      # preview hasil build lokal
npx lighthouse http://localhost:3000 --preset=perf --view   # cek performa (mobile)
```

## 4. Struktur folder
```
src/
  app/
    layout.tsx          # <html lang="id">, font, metadata dasar, JSON-LD
    page.tsx            # merakit section berurutan
    globals.css
    sitemap.ts
    robots.ts
  components/
    ui/                 # Button, Container, SectionHeading, WhatsAppButton
    sections/           # Header, Hero, ValueProps, Segments, Process, Layout3D,
                        # Interior, WhyFactory, Gallery, Faq, FinalCta, Footer
    FloatingWhatsApp.tsx  # sticky CTA (client)
  content/
    site.ts             # brand, nomor WA, URL, keyword — SATU sumber kebenaran
    copy.ts             # semua teks section (mudah diedit tanpa menyentuh JSX)
  lib/
    whatsapp.ts         # buildWaLink(section) + trackWaClick()
    seo.ts              # metadata, JSON-LD builder
public/
  images/               # webp/avif, sudah dikompres
  og-image.jpg          # 1200x630
  favicon.ico
```

## 5. Struktur halaman & copy (urutan section)
Satu `<h1>`, section utama `<h2>`, sub-item `<h3>`. Jangan loncat level.

1. **Header** — logo + tombol CTA kecil (sticky).
2. **Hero** — `<h1>` memuat keyword utama (mis. "Pabrik Rak Minimarket & Paket Setup Toko Retail"). Subjudul = 3 value prop terkuat. CTA utama "Konsultasi WA Gratis". Trust chips: Langsung dari Pabrik · Free Layout 3D · Free Ongkir Jawa-Bali.
3. **Value Proposition (7 poin wajib)** — grid kartu:
   - Free Konsultasi & Layout 3D (tekankan sebagai layanan utama sebelum beli)
   - Free Ongkir Jawa-Bali
   - Free Perakitan Jatim, Jateng & DIY
   - Custom sesuai kebutuhan & ukuran ruangan toko
   - Langsung dari pabrik, harga kompetitif
   - Melayani satuan, paket toko, hingga proyek retail
   - Jasa Interior Toko agar tampilan stylish & modern
4. **Cocok untuk siapa / Segmen toko** — kartu per jenis toko (minimarket, kelontong, ATK, pet shop, baby shop, apotek, bahan kue, fashion, bahan bangunan) + 3 persona target (toko baru, upgrade, cabang baru). CTA.
5. **Cara kerja** — Konsultasi WA → Layout 3D → Penawaran → Produksi/Custom → Kirim → Perakitan.
6. **Layout 3D & Interior** — jelaskan nilai "lihat tokomu sebelum dibangun".
7. **Kenapa langsung pabrik** — harga, kontrol kualitas, custom.
8. **Galeri / proyek** — placeholder yang jelas ditandai (lihat aturan konten).
9. **FAQ** (5–7 pertanyaan; juga jadi JSON-LD `FAQPage`) — harga, ukuran custom, area gratis ongkir/perakitan, estimasi waktu, minimal order, cara konsultasi.
10. **CTA final** — headline + tombol WA besar.
11. **Footer** — nama perusahaan, area layanan, catatan S&K.
- **Floating WhatsApp button** (desktop) / **sticky bottom bar** (mobile), selalu terlihat.
- CTA WA minimal di: header, hero, setelah value props, setelah segmen, setelah cara kerja, CTA final, floating.

## 6. Aturan WhatsApp CTA
- Satu fungsi `buildWaLink(section: string)` di `lib/whatsapp.ts` → `https://wa.me/<NOMOR>?text=<pesan ter-encode>`.
- Nomor dari `content/site.ts` (env `NEXT_PUBLIC_WA_NUMBER`, format `62xxxxxxxxxx`). Jangan hardcode di komponen.
- Pesan prefilled informatif, mis.: "Halo Ritelindo, saya ingin konsultasi rak/setup toko. Jenis toko: … Ukuran ruangan: …". Boleh beda per section (sertakan konteks).
- Setiap tombol: `data-cta-location="hero|header|..."`, `target="_blank"`, `rel="noopener noreferrer"`, `aria-label` jelas.
- Tracking ringan: `window.dataLayer?.push({ event: "wa_click", location })` (aman jika GTM belum ada). Siapkan struktur agar mudah dipasang konversi Google Ads nanti.
- Teks tombol konsisten: **"Konsultasi WA Gratis"**.

## 7. SEO teknis (wajib)
- **Meta title** (≤ 60 karakter, unik, keyword di depan), contoh: `Pabrik Rak Minimarket & Paket Setup Toko | Free Layout 3D`.
- **Meta description** (≤ 155 karakter, ada keyword + value prop + ajakan), contoh: `Pabrik rak minimarket & gondola langsung dari pabrik. Free konsultasi & layout 3D, free ongkir Jawa-Bali. Konsultasi WA gratis.` (verifikasi panjang saat build).
- Keyword target: pabrik rak minimarket, rak gondola, paket setup toko retail, rak toko, jasa interior toko, rak supermarket.
- **Open Graph lengkap:** `og:title`, `og:description`, `og:type`, `og:url`, `og:image` (1200×630, + width/height/alt), `og:locale=id_ID`, `og:site_name`; plus Twitter card `summary_large_image`.
- `<html lang="id">`, canonical URL, `viewport`, favicon, `theme-color`.
- JSON-LD: `Organization`/`LocalBusiness` + `FAQPage` (data harus sesuai konten yang tampil di halaman).
- `sitemap.ts`, `robots.ts`. Semua `<img>` punya `alt` deskriptif.
- Heading hierarchy rapi (cek dengan outline/Lighthouse).

## 8. Performa & UX (budget)
- Lighthouse **mobile**: Performance ≥ 95, SEO = 100, Accessibility ≥ 95, Best Practices ≥ 95.
- LCP < 2.5s, CLS < 0.1, INP baik. First-load JS < ~100 KB.
- Gambar: AVIF/WebP, ukuran eksplisit (cegah CLS), hero `priority`, sisanya lazy. Tidak ada gambar > 150 KB tanpa alasan.
- 1 font family, maks 2 weight. Tidak ada script pihak ketiga selain yang benar-benar perlu.
- **Mobile-first:** desain mulai dari 375px; tap target ≥ 44px; kontras teks WCAG AA; fokus keyboard terlihat; hormati `prefers-reduced-motion`.
- Visual: konsisten satu palet (1 warna aksen untuk CTA, hijau WhatsApp hanya untuk tombol WA), whitespace lega, hierarki jelas, tidak ramai.

## 9. Aturan konten (penting)
- **Jangan mengarang fakta**: jumlah klien, tahun berdiri, testimoni, nama proyek, angka garansi, harga. Jika belum ada data, gunakan placeholder realistis yang diberi komentar `// TODO(content): ganti dengan data asli` dan sebutkan di README bahwa konten ilustratif.
- Klaim promo harus akurat sesuai brief: **ongkir gratis = Jawa-Bali; perakitan gratis = Jatim, Jateng, DIY**. Tambahkan catatan "S&K berlaku" di footer/FAQ.
- Bahasa: Indonesia, nada profesional-ramah, kalimat pendek, fokus manfaat bagi pemilik toko (bukan fitur pabrik).
- Foto: gunakan aset sendiri/ilustrasi SVG/placeholder bebas lisensi; jangan hotlink gambar dari situs lain.

## 10. Konvensi kode
- TypeScript strict; tanpa `any`. Komponen kecil, satu tanggung jawab, props bertipe.
- Teks & data di `content/`, bukan tersebar di JSX. Tailwind class rapi (urutan konsisten); ekstrak ke komponen, jangan salin-tempel.
- Nama file komponen `PascalCase.tsx`; util `camelCase.ts`.
- Tidak ada dead code, `console.log`, atau komentar yang hanya mengulang kode.
- Commit kecil, format Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `perf:`).

## 11. Workflow kerja (urutan fase)
Setiap fase selesai → `lint` + `build` lolos → commit.

| Fase | Isi | Output |
|---|---|---|
| 0. Setup | `create-next-app` (TS, Tailwind, App Router), set static export, repo GitHub public, deploy kosong ke Vercel lebih dulu | Pipeline deploy hidup sejak awal |
| 1. Konten | Isi `content/site.ts` & `copy.ts` (copy, FAQ, segmen) | Teks final tanpa fakta karangan |
| 2. UI primitives | Container, Button, WhatsAppButton, SectionHeading, `lib/whatsapp.ts` | Komponen dasar |
| 3. Sections | Bangun section berurutan, mobile-first, CTA di tiap titik | Halaman lengkap |
| 4. SEO | Metadata, OG image, JSON-LD, sitemap, robots, cek heading | Semua poin SEO terpenuhi |
| 5. Performa & a11y | Optimasi gambar/font, Lighthouse mobile, perbaiki temuan | Skor memenuhi budget |
| 6. QA | Tes di 375/768/1280px, tes tiap tombol WA, tes OG di debugger sosial media, cek link | Checklist DoD |
| 7. Dokumentasi & submit | README, screenshot Lighthouse, balas email | Repo + live demo terkirim |

**Jadwal (deadline 9 Okt):** 7 Okt malam → fase 0–2; 8 Okt → fase 3–5; 9 Okt pagi → fase 6–7. Submit sebelum siang, bukan menit terakhir.

## 12. Cara Claude bekerja di repo ini
- Untuk perubahan >1 file: tulis rencana singkat dulu, lalu implementasi.
- Tanyakan (maks 1 pertanyaan sekaligus) hanya jika data wajib belum ada: nomor WA, nama brand/logo, area layanan. Jika tidak ada jawaban, pakai placeholder bertanda TODO dan lanjut.
- Selalu jalankan `npm run lint && npm run build` sebelum menyatakan selesai; laporkan hasil nyata, bukan asumsi.
- Jangan menambah dependency tanpa menyebut alasan dan dampak ke bundle size.
- Jangan membuat fitur di luar brief (form, blog, multi-halaman, login, CMS).

## 13. Definition of Done
- [ ] Semua 7 value proposition tampil jelas, akurat sesuai brief
- [ ] CTA WA ada di ≥ 6 titik + floating/sticky, semua link berfungsi & ter-track
- [ ] Meta title/description unik, OG tags lengkap, JSON-LD valid, sitemap & robots ada
- [ ] Heading hierarchy rapi (1 h1, h2 per section, h3 sub-item)
- [ ] Lighthouse mobile memenuhi budget (screenshot di README)
- [ ] Responsive 375 / 768 / 1280 tanpa horizontal scroll
- [ ] Tidak ada fakta karangan yang disajikan sebagai kenyataan
- [ ] README: deskripsi, stack, cara jalan lokal, keputusan SEO/performa, catatan penggunaan AI tools, link demo
- [ ] Repo public, live demo bisa dibuka tanpa login, email balasan berisi 2 link
