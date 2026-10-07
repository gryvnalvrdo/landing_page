import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/content/copy";

export default function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Belum ada di sini? Hubungi kami langsung via WhatsApp."
        />

        <div className="max-w-3xl mx-auto divide-y divide-gray-100">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group py-5"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none">
                <h3 className="font-semibold text-gray-900 group-open:text-emerald-700 transition-colors text-base leading-snug pr-2">
                  {faq.question}
                </h3>
                {/* Chevron icon via CSS */}
                <span
                  aria-hidden
                  className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 group-open:bg-emerald-100 group-open:text-emerald-700 text-gray-500 transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed pl-0">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
