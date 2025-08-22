
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandsLoop from "@/components/BrandsLoop";
import FlywheelSection from "@/components/FlywheelSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FlywheelSection />
      <InteractiveDemo />
      <ProcessSection />
      <PricingSection />
      <ClientsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
