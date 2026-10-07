import { SITE } from "@/content/site";

export const valueProps = [
  {
    icon: "Ruler",
    title: "Free Konsultasi & Layout 3D",
    desc: "Lihat tampilan tokomu sebelum rak dipasang. Konsultasi gratis, desain 3D kami siapkan.",
  },
  {
    icon: "Truck",
    title: `Free Ongkir ${SITE.freeShippingArea}`,
    desc: "Rak sampai di depan toko tanpa biaya pengiriman untuk area Jawa dan Bali.",
  },
  {
    icon: "Wrench",
    title: `Free Perakitan ${SITE.freeInstallArea}`,
    desc: "Tim kami merakit dan merapikan rak di lokasi tokomu, gratis untuk area Jatim, Jateng & DIY.",
  },
  {
    icon: "Settings2",
    title: "Custom Sesuai Ukuran Toko",
    desc: "Setiap toko beda ukuran dan kebutuhan. Kami buat rak sesuai denah ruanganmu.",
  },
  {
    icon: "Factory",
    title: "Langsung dari Pabrik",
    desc: "Tidak ada perantara — harga lebih kompetitif, kontrol kualitas lebih terjaga.",
  },
  {
    icon: "Package",
    title: "Satuan, Paket & Proyek",
    desc: "Beli 1 unit, beli paket lengkap, atau proyek retail skala besar — semua kami layani.",
  },
  {
    icon: "Sparkles",
    title: "Jasa Interior Toko",
    desc: "Mau tampilan toko yang stylish & modern? Kami siapkan desain interior retail lengkap.",
  },
] as const;

export const segments = [
  { icon: "🏪", label: "Minimarket" },
  { icon: "🛒", label: "Kelontong / Sembako" },
  { icon: "📚", label: "ATK & Stationery" },
  { icon: "🐾", label: "Pet Shop" },
  { icon: "👶", label: "Baby Shop" },
  { icon: "💊", label: "Apotek & Klinik" },
  { icon: "🎂", label: "Bahan Kue & Dapur" },
  { icon: "👗", label: "Fashion & Pakaian" },
  { icon: "🔨", label: "Bahan Bangunan" },
] as const;

export const personas = [
  {
    title: "Buka Toko Baru",
    desc: "Mulai dari nol? Kami bantu konsultasi kebutuhan rak dari awal hingga toko siap buka.",
  },
  {
    title: "Upgrade Toko Lama",
    desc: "Ingin tampilan lebih modern dan rapi? Kami renovasi rak toko tanpa tutup lama.",
  },
  {
    title: "Buka Cabang Baru",
    desc: "Ekspansi lebih mudah dengan paket rak standar yang konsisten di setiap cabang.",
  },
] as const;

export const processSteps = [
  { step: "01", title: "Konsultasi WA", desc: "Ceritakan jenis toko dan ukuran ruangan via WhatsApp." },
  { step: "02", title: "Layout 3D Gratis", desc: "Tim kami buat desain tata letak rak dalam tampilan 3D." },
  { step: "03", title: "Penawaran Harga", desc: "Terima penawaran transparan sesuai kebutuhan dan budget." },
  { step: "04", title: "Produksi / Custom", desc: "Rak diproduksi atau dikustomisasi di pabrik kami." },
  { step: "05", title: "Pengiriman", desc: `Dikirim ke lokasi toko, gratis ongkir area ${SITE.freeShippingArea}.` },
  { step: "06", title: "Perakitan", desc: `Tim kami rakit di tempat, gratis untuk area ${SITE.freeInstallArea}.` },
] as const;

export const faqs = [
  {
    question: "Berapa kisaran harga rak minimarket?",
    answer:
      "Harga bervariasi tergantung jenis, ukuran, dan jumlah rak. Untuk info harga terkini, silakan konsultasi langsung via WhatsApp — kami akan berikan penawaran sesuai kebutuhan dan budget Anda.",
  },
  {
    question: "Apakah rak bisa dipesan sesuai ukuran ruangan saya?",
    answer:
      "Ya, semua produk kami dapat dikustomisasi sesuai lebar, tinggi, dan kedalaman yang Anda butuhkan. Konsultasikan ukuran ruangan toko Anda dan kami akan buatkan solusi yang tepat.",
  },
  {
    question: "Area mana saja yang mendapat free ongkir dan free perakitan?",
    answer:
      "Free ongkir berlaku untuk seluruh wilayah Jawa dan Bali. Free perakitan berlaku untuk area Jawa Timur, Jawa Tengah, dan DI Yogyakarta. Syarat & ketentuan berlaku.",
  },
  {
    question: "Berapa lama estimasi waktu produksi hingga pengiriman?",
    answer:
      "Estimasi waktu produksi berkisar 7–14 hari kerja tergantung jumlah dan spesifikasi pesanan, ditambah waktu pengiriman ke lokasi toko Anda. Kami informasikan jadwal pasti setelah kesepakatan order.",
  },
  {
    question: "Apakah ada minimal order?",
    answer:
      "Kami melayani pembelian satuan maupun paket lengkap. Tidak ada minimal order yang ketat — hubungi kami untuk konsultasi kebutuhan Anda.",
  },
  {
    question: "Bagaimana cara memulai konsultasi?",
    answer:
      "Klik tombol \"Konsultasi WA Gratis\" di halaman ini. Tim kami akan merespons dan membantu Anda dari konsultasi awal, desain layout 3D, hingga rak terpasang di toko.",
  },
  {
    question: "Apakah tersedia layanan jasa interior toko lengkap?",
    answer:
      "Ya! Selain rak, kami juga menyediakan jasa desain dan penataan interior toko retail agar tampilan lebih modern dan menarik pelanggan. Konsultasikan kebutuhan Anda.",
  },
] as const;

export type FaqItem = (typeof faqs)[number];

export const whyFactory = [
  {
    icon: "BadgeDollarSign",
    title: "Harga Kompetitif",
    desc: "Tanpa biaya distributor dan reseller. Harga langsung dari pabrik, lebih hemat hingga 30%.",
  },
  {
    icon: "ShieldCheck",
    title: "Kualitas Terjamin",
    desc: "Produksi sendiri berarti kontrol kualitas penuh di setiap tahap — dari bahan baku hingga finishing.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Kustomisasi Bebas",
    desc: "Tidak ada katalog baku. Kami produksi sesuai spesifikasi ukuran, warna, dan kebutuhan toko Anda.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Konsultasi Langsung",
    desc: "Bukan sales agen — Anda bicara langsung dengan tim ahli dari pabrik yang mengerti kebutuhan retail.",
  },
] as const;
