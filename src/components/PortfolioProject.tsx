import { useEffect, useRef } from "react";
import { ArrowLeft, ExternalLink, Calendar, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavbarStyle } from "@/components/NavbarStyleContext";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export interface PortfolioProjectProps {
  caseStudy: {
    title: string;
    subtitle: string;
    category: string;
    client: string;
    location: string;
    website?: string;
    industry: string;
    impact: string;
    timeline: string;
    teamSize: string;
    role: string;
    challenge: { title: string; content: string };
    approach: { title: string; content: string };
    results: { title: string; content: string };
    techStack: string[];
    visualAsset?: React.ReactNode;
    additionalSection?: React.ReactNode;
  };
}

const PortfolioProject = ({ caseStudy }: PortfolioProjectProps) => {
  const { setNavbarStyle } = useNavbarStyle();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNavbarStyle("transparent");
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavbarStyle("solid");
      } else {
        setNavbarStyle("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setNavbarStyle("default");
    };
  }, [setNavbarStyle]);

  useEffect(() => {
    const contentElements = contentRef.current?.querySelectorAll('.content-section');
    if (contentElements) {
      contentElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("animate-fade-in");
          el.classList.remove("opacity-0");
        }, index * 200);
      });
    }
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: "radial-gradient(ellipse 20% 100% at 50% 0%, #383838 0%, #202026 0%, #383838 0%, #000000 100%)" }}
    >
      {/* Header */}
      <section className="pt-20 pb-16 text-neutral-100 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          {/* Hero content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <span className="inline-block bg-primary-100 text-neutral-100 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {caseStudy.category}
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent leading-tight">
                    {caseStudy.title}
                  </h1>
                  <p className="text-xl text-neutral-200 leading-relaxed">
                    {caseStudy.subtitle}
                  </p>
                </div>
              </div>

              {/* Sidebar Icon */}
              <div className="lg:col-span-1 hidden lg:flex items-center justify-center">
                <img
                  src="/portfolio-automatesai/uploads/automatesai-icon.png"
                  alt="AutomatesAI Icon"
                  className="w-32 h-32 object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section ref={contentRef} className="py-20 bg-gradient-to-b from-neutral-100 to-neutral-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge Section */}
            <div id="challenge" className="content-section opacity-0">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-100 mb-4">
                  {caseStudy.challenge.title}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full"></div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed text-lg">
                  {caseStudy.challenge.content}
                </p>
              </div>
            </div>

            {/* Visual Asset Placeholder or custom visual */}
            <div className="content-section opacity-0">
              {caseStudy.visualAsset ? (
                caseStudy.visualAsset
              ) : (
                <div className="bg-neutral-200 rounded-2xl p-12 text-center border-2 border-dashed border-neutral-400">
                  <div className="text-neutral-500">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-xl font-semibold mb-2">Visual Asset</h3>
                    <p className="text-neutral-600">Screenshot, diagram, or visualization will be added here</p>
                  </div>
                </div>
              )}
            </div>

            {/* Approach Section */}
            <div className="content-section opacity-0">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-100 mb-4">
                  {caseStudy.approach.title}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full"></div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed text-lg">
                  {caseStudy.approach.content}
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="content-section opacity-0">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-100 mb-4">
                  {caseStudy.results.title}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full"></div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed text-lg">
                  {caseStudy.results.content}
                </p>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="content-section opacity-0">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-100 mb-4">
                  Tech Stack
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-neutral-100 border border-neutral-300 rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow"
                  >
                    <span className="text-neutral-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Context Section (optional) */}
            {caseStudy.additionalSection && (
              <div className="content-section opacity-0">
                {caseStudy.additionalSection}
              </div>
            )}

            {/* Back to Portfolio */}
            <div className="content-section opacity-0 pt-8">
              <div className="text-center">
                <Link 
                  to="/portfolio"
                  className="inline-flex items-center bg-primary-100 text-neutral-100 px-8 py-3 rounded-xl font-semibold hover:bg-primary-200 transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer homeLeft />
    </div>
  );
};

export default PortfolioProject; 