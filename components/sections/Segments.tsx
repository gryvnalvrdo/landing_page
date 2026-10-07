import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { segments, personas } from "@/content/copy";

export default function Segments() {
  return (
    <section id="segments" className="py-20 sm:py-28 bg-gray-50">
      <Container>
        <SectionHeading
          badge="Untuk Siapa"
          title="Cocok untuk Berbagai Jenis Toko"
          subtitle="Kami berpengalaman melayani berbagai segmen ritel — dari warung kelontong hingga minimarket modern."
        />

        {/* Segment grid */}
        <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 mb-16">
          {segments.map((seg) => (
            <li
              key={seg.label}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all duration-200 text-center"
            >
              <span className="text-2xl" aria-hidden="true">{seg.icon}</span>
              <span className="text-xs font-medium text-gray-700 leading-tight">{seg.label}</span>
            </li>
          ))}
        </ul>

        {/* Persona cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {personas.map((p, i) => (
            <div
              key={p.title}
              className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-lg"
            >
              <div className="absolute top-4 right-4 text-4xl font-black text-white/10 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-emerald-100 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppButton section="segments" size="lg" id="cta-wa-segments" />
        </div>
      </Container>
    </section>
  );
}
