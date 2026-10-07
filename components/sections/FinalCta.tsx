import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/content/site";

export default function FinalCta() {
  return (
    <section
      id="final-cta"
      className="py-20 sm:py-28 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div aria-hidden className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div aria-hidden className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5 blur-3xl -translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 text-emerald-200 border border-white/20">
            Mulai Sekarang
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Toko Impian Anda <br className="hidden sm:block" />
            Tinggal Satu Klik
          </h2>
          <p className="text-lg text-emerald-100 mb-10 leading-relaxed">
            Konsultasi gratis, desain layout 3D gratis, free ongkir area{" "}
            {SITE.freeShippingArea}. Tidak ada alasan untuk menunda.
          </p>
          <WhatsAppButton
            section="final-cta"
            size="lg"
            id="cta-wa-finalcta"
            className="w-full sm:w-auto bg-white text-emerald-700 hover:bg-emerald-50 shadow-2xl hover:shadow-white/30"
            label="Konsultasi WA Gratis Sekarang"
          />
          <p className="mt-5 text-sm text-emerald-300">
            Respon cepat · Tidak ada kewajiban beli
          </p>
        </div>
      </Container>
    </section>
  );
}
