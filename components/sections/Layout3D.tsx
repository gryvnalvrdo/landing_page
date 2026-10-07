import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Box, Layers, Eye, CheckCircle2 } from "lucide-react";

const benefits = [
  "Lihat tampilan tokomu sebelum rak dipasang",
  "Tata letak optimal agar produk mudah terlihat pelanggan",
  "Revisi desain hingga puas, tanpa biaya tambahan",
  "File 3D bisa dijadikan referensi untuk keputusan beli",
];

export default function Layout3D() {
  return (
    <section id="layout3d" className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 to-emerald-950 text-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-700/50 text-emerald-300 border border-emerald-700/50">
              Layanan Eksklusif
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5">
              Lihat Tokomu Sebelum{" "}
              <span className="text-emerald-300">Dibangun</span>
              <br />— Gratis Layout 3D
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              Jangan beli rak tanpa tahu hasilnya. Tim desainer kami akan membuat
              visualisasi 3D tata letak toko sesuai denah ruanganmu — gratis,
              sebelum kamu memutuskan beli.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-200 text-sm">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <WhatsAppButton section="layout3d" size="lg" id="cta-wa-layout3d"
              label="Minta Layout 3D Gratis"
            />
          </div>

          {/* Visual mockup */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-emerald-900/40 border border-emerald-700/30 flex items-center justify-center">
              {/* 3D illustration placeholder */}
              <div className="flex flex-col items-center gap-4 p-8 text-center">
                <div className="relative">
                  <Box size={72} className="text-emerald-400 opacity-80" />
                  <Layers size={36} className="text-emerald-300 absolute -bottom-2 -right-2" />
                </div>
                <div>
                  <p className="text-emerald-200 font-bold text-lg">Desain 3D Toko</p>
                  <p className="text-emerald-400 text-sm mt-1">Visualisasi realistis sebelum produksi</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-300 bg-emerald-800/50 px-3 py-1.5 rounded-full">
                  <Eye size={12} />
                  Lihat sebelum bayar
                </div>
              </div>
              {/* Decorative rings */}
              <div aria-hidden className="absolute inset-0 rounded-3xl border border-emerald-600/20 scale-110" />
              <div aria-hidden className="absolute inset-0 rounded-3xl border border-emerald-600/10 scale-125" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
