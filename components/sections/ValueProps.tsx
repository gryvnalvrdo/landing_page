import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { valueProps } from "@/content/copy";
import {
  Ruler,
  Truck,
  Wrench,
  Settings2,
  Factory,
  Package,
  Sparkles,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Ruler,
  Truck,
  Wrench,
  Settings2,
  Factory,
  Package,
  Sparkles,
};

export default function ValueProps() {
  return (
    <section id="value-props" className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          badge="Kenapa Pilih Kami"
          title="7 Alasan Toko Anda Perlu Ritelindo"
          subtitle="Dari konsultasi gratis hingga perakitan di tempat — semua kami urus agar Anda bisa fokus berbisnis."
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {valueProps.map((vp) => {
            const Icon = iconMap[vp.icon];
            return (
              <li
                key={vp.title}
                className="group relative flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-200">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug">{vp.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{vp.desc}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <WhatsAppButton section="value-props" size="lg" id="cta-wa-valueprops" />
        </div>
      </Container>
    </section>
  );
}
