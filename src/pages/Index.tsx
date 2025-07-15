import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutCard from "@/components/AboutCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <HeroSection />
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <AboutCard />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
