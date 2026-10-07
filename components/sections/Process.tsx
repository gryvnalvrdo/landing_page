import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { processSteps } from "@/content/copy";

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          badge="Cara Kerja"
          title="6 Langkah Mudah Setup Toko Anda"
          subtitle="Dari konsultasi pertama hingga rak terpasang rapi — prosesnya sederhana dan transparan."
        />

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-10 left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-emerald-100"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {processSteps.map((s) => (
              <li key={s.step} className="relative flex flex-col items-center text-center">
                {/* Step number bubble */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white text-xl font-black shadow-lg shadow-emerald-200 mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 text-center">
          <WhatsAppButton section="process" size="lg" id="cta-wa-process" />
        </div>
      </Container>
    </section>
  );
}
