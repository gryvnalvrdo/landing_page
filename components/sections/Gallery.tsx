import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ImageOff } from "lucide-react";

const galleryItems = [
  { label: "Setup Minimarket Modern", desc: "Surabaya — 2024" },
  { label: "Rak Gondola 2 Sisi", desc: "Malang — 2024" },
  { label: "Paket Interior Apotek", desc: "Semarang — 2024" },
  { label: "Setup Toko ATK", desc: "Yogyakarta — 2024" },
  { label: "Rak Baby Shop", desc: "Jakarta — 2024" },
  { label: "Rak Custom Pet Shop", desc: "Bandung — 2024" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-gray-50">
      <Container>
        <SectionHeading
          badge="Galeri Proyek"
          title="Toko yang Sudah Kami Setup"
          subtitle="Setiap toko punya kebutuhan unik. Ini sebagian proyek yang telah kami kerjakan."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-[4/3] border border-gray-200"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-100 to-gray-200">
                <ImageOff size={32} className="text-gray-400" aria-hidden />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm leading-tight">{item.label}</p>
                <p className="text-gray-300 text-xs">{item.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:hidden">
                <p className="text-white font-semibold text-xs leading-tight">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppButton section="gallery" size="lg" id="cta-wa-gallery"
            label="Lihat Lebih Banyak & Konsultasi"
          />
        </div>
      </Container>
    </section>
  );
}
