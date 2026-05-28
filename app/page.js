import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import ContactUs from "@/components/ContactUs";
import CorporateBanner from "@/components/CorporateBanner";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
        <ContactUs />
        <CorporateBanner />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}


