import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whyFactory } from "@/content/copy";
import {
  BadgeDollarSign,
  ShieldCheck,
  SlidersHorizontal,
  HeadphonesIcon,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BadgeDollarSign,
  ShieldCheck,
  SlidersHorizontal,
  HeadphonesIcon,
};

export default function WhyFactory() {
  return (
    <section id="why-factory" className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          badge="Keunggulan Pabrik"
          title="Kenapa Langsung dari Pabrik?"
          subtitle="Tanpa perantara, tanpa biaya ganda. Anda dapat harga terbaik dengan kualitas yang terjamin."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {whyFactory.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="group flex flex-col items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200">
                  {Icon && <Icon size={24} />}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <WhatsAppButton section="why-factory" size="lg" id="cta-wa-whyfactory"
            label="Konsultasi Harga Pabrik"
          />
        </div>
      </Container>
    </section>
  );
}
