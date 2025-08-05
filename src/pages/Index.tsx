
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FlywheelSection from "@/components/FlywheelSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import ProcessSection from "@/components/ProcessSection";
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
      <ClientsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
