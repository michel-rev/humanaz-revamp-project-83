
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FlywheelSection from "@/components/FlywheelSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import ProcessSection from "@/components/ProcessSection";
import ChallengesSection from "@/components/ChallengesSection";
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
      <ChallengesSection />
      <PricingSection />
      <ClientsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
