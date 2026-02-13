import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AreasSection from "@/components/AreasSection";
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AreasSection />
      <AboutSection />
      <BookingSection />
      <Footer />
    </main>
  );
};

export default Index;
