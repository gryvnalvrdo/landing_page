import Container from "@/components/ui/Container";
import { SITE } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 pb-20 md:pb-8">
      <Container>
        <div className="py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-b border-gray-800">
          {/* Brand */}
          <div>
            <p className="font-extrabold text-xl text-white mb-2">{SITE.brand}</p>
            <p className="text-sm leading-relaxed text-gray-500">
              {SITE.brandFull} — produsen rak gondola, rak minimarket, dan solusi
              setup toko retail langsung dari pabrik.
            </p>
          </div>
          {/* Area */}
          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Area Layanan</p>
            <ul className="space-y-1 text-sm">
              <li>🚚 Pengiriman: {SITE.freeShippingArea}</li>
              <li>🔧 Perakitan gratis: {SITE.freeInstallArea}</li>
              <li>📍 Pabrik: {SITE.address}</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Kontak</p>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s|-/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  📞 {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  ✉️ {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {year} {SITE.brandFull}. Hak cipta dilindungi.</p>
          <p>
            Harga, promo, dan area layanan dapat berubah.{" "}
            <a href="#faq" className="underline hover:text-gray-400 transition-colors">
              S&K berlaku
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}
