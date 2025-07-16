import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="min-h-[60vh] flex items-center bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-100 pt-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-100/50 to-transparent"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-100 leading-tight font-sans">
                Lorem Ipsum Dolor
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-dark-400 leading-snug font-sans">
                Sed ut perspiciatis unde omnis iste natus error
              </h2>
              <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Button className="group bg-gradient-to-r from-primary-100 to-dark-400 hover:from-dark-400 hover:to-primary-100 text-neutral-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Lorem Ipsum
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-neutral-200/50 hover:ring-neutral-300/50 transition-all duration-300 transform hover:scale-105">
                <img
                  src="/uploads/porfolio-pic-enhance.png"
                  alt="AI Systems Developer"
                  className="w-full h-full object-cover bg-neutral-200"
                  style={{ objectPosition: '0 30%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;