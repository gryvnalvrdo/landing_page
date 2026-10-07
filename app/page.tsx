import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import Segments from "@/components/sections/Segments";
import Process from "@/components/sections/Process";
import Layout3D from "@/components/sections/Layout3D";
import WhyFactory from "@/components/sections/WhyFactory";
import Gallery from "@/components/sections/Gallery";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Segments />
        <Process />
        <Layout3D />
        <WhyFactory />
        <Gallery />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
