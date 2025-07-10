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
    <section ref={heroRef} className="min-h-screen flex items-center bg-neutral-100 pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-100 leading-tight">
                Hi, I'm Dave - I build AI systems and{" "}
                <span className="text-neutral-600">
                  share what I learn on the internet
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
                I have 10+ years experience doing just that
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-100 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-neutral-700">
                  Are you struggling to keep up with the rapid pace of AI innovation?
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-100 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-neutral-700">
                  Do you need help translating AI hype into real business results?
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-100 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-neutral-700">
                  Want to implement AI effectively before competitors get ahead?
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-100 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-neutral-700">
                  Looking for technical expertise and a clear roadmap for AI solutions?
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-100 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-neutral-700">
                  Feeling like your developer skills are becoming obsolete?
                </p>
              </div>
            </div>

            <Button className="group bg-primary-100 hover:bg-primary-200 text-neutral-100 px-8 py-3 text-lg">
              Explore how to work with me
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/0110f188-f0a3-4a4e-a9e4-bac825c43a77.png"
                  alt="Dave - AI Systems Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-dark rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;