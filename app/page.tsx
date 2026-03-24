import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CasesSection from "@/components/CasesSection";
import ContactModal from "@/components/ContactModal";
import Toast from "@/components/Toast";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CasesSection />
      <Footer />
      <ContactModal />
      <Toast />
    </main>
  );
}
