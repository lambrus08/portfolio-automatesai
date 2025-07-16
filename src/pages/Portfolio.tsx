import { useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavbarStyle } from "@/components/NavbarStyleContext";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { setNavbarStyle } = useNavbarStyle();
  const casesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial style to blend
    setNavbarStyle("blend");
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavbarStyle("solid");
      } else {
        setNavbarStyle("blend");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setNavbarStyle("default");
    };
  }, [setNavbarStyle]);

  useEffect(() => {
    // Simple animation without IntersectionObserver
    const caseElements = casesRef.current?.querySelectorAll('.case-card');
    if (caseElements) {
      caseElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("animate-fade-in");
          el.classList.remove("opacity-0");
        }, index * 200);
      });
    }
  }, []);

  const cases = [
    {
      id: 1,
      category: "Lorem Ipsum",
      title: "Lorem Ipsum Dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/portfolio-automatesai/uploads/automatesai-icon.png",
      tags: ["Lorem", "Ipsum", "Dolor"],
      link: "/portfolio-one"
    },
    {
      id: 2,
      category: "Dolor Sit Amet",
      title: "Consectetur Adipiscing",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/portfolio-automatesai/uploads/automatesai-icon.png",
      tags: ["Consectetur", "Adipiscing", "Elit"],
      link: "/portfolio-two"
    },
    {
      id: 3,
      category: "Adipiscing Elit",
      title: "Sed Do Eiusmod",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "/portfolio-automatesai/uploads/automatesai-icon.png",
      tags: ["Sed", "Do", "Eiusmod"],
      link: "/portfolio-three"
    }
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: "radial-gradient(ellipse 20% 100% at 50% 0%, #383838 0%, #202026 0%, #383838 0%, #000000 100%)" }}
    >
      {/* Header */}
      <section
        className="pt-20 py-16 text-neutral-100 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent leading-tight pb-2">
              Lorem Ipsum Dolor
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={casesRef} className="py-20 bg-gradient-to-b from-neutral-100 to-neutral-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="portfolio-grid-custom grid grid-cols-1 md:grid-cols-2 gap-12 grid-rows-2 md:grid-rows-2" style={{gridTemplateAreas: '"a b" "c ."'}}>
            {/* Top left */}
            <div style={{gridArea: 'a'}}>
              <Card 
                key={cases[0].id}
                className="case-card opacity-0 group hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 bg-neutral-100 border-0 shadow-lg overflow-hidden rounded-2xl relative"
              >
                {/* Glow */}
                <div className="absolute -inset-4 z-0 rounded-2xl bg-primary-100/20 blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                <div className="relative h-48 rounded-t-2xl overflow-hidden flex items-stretch">
                  {cases[0].category === "Software Development" ? (
                    <>
                      <img
                        src="/uploads/banner-cases-2.png"
                        alt={cases[0].title}
                        className="w-full h-full object-cover"
                      />
                      <img
                        src="/uploads/automatesai-icon.png"
                        alt="Logo"
                        className="absolute top-4 left-4 w-10 h-10 object-contain"
                      />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-dark-100 to-dark-300 w-full h-full"></div>
                      <img
                        src="/uploads/automatesai-icon.png"
                        alt="Logo"
                        className="absolute inset-0 m-auto w-20 h-20 object-contain filter drop-shadow-lg"
                        style={{ top: '0', left: '0', right: '0', bottom: '0' }}
                      />
                    </>
                  )}
                  <span className="absolute bottom-4 right-4 bg-primary-100 text-neutral-100 px-4 py-2 rounded-full text-sm font-semibold z-10 shadow-lg">
                    {cases[0].category}
                  </span>
                </div>
                <CardContent className="p-8 flex flex-col items-center text-center bg-neutral-100 relative">
                  {/* Accent bar */}
                  <div className="w-12 h-1 mb-4 rounded-full bg-gradient-to-r from-primary-100 to-primary-200"></div>
                  <h3 className="text-2xl font-extrabold text-primary-100 mb-4 line-clamp-2 w-full group-hover:text-dark-400 transition-colors">
                    {cases[0].title}
                  </h3>
                  <p className="text-neutral-600 mb-6 line-clamp-3 w-full leading-relaxed">
                    {cases[0].description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6 w-full">
                    {cases[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gradient-to-r from-neutral-200 to-neutral-300 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`${cases[0].link}#challenge`}
                    className="w-full group-hover:bg-primary-100 group-hover:text-neutral-100 group-hover:border-primary-100 transition-all duration-300 rounded-xl border-2 font-semibold flex items-center justify-center py-2 px-4 border-neutral-300 bg-white hover:bg-primary-100 hover:text-neutral-100 hover:border-primary-100"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            {/* Top right */}
            <div style={{gridArea: 'b'}}>
              <Card 
                key={cases[1].id}
                className="case-card opacity-0 group hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 bg-neutral-100 border-0 shadow-lg overflow-hidden rounded-2xl relative"
              >
                {/* Glow */}
                <div className="absolute -inset-4 z-0 rounded-2xl bg-primary-100/20 blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                <div className="relative h-48 rounded-t-2xl overflow-hidden flex items-stretch">
                  {cases[1].category === "Software Development" ? (
                    <>
                      <img
                        src="/uploads/banner-cases-2.png"
                        alt={cases[1].title}
                        className="w-full h-full object-cover"
                      />
                      <img
                        src="/uploads/automatesai-icon.png"
                        alt="Logo"
                        className="absolute top-4 left-4 w-10 h-10 object-contain"
                      />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-dark-100 to-dark-300 w-full h-full"></div>
                      <img
                        src="/uploads/automatesai-icon.png"
                        alt="Logo"
                        className="absolute inset-0 m-auto w-20 h-20 object-contain filter drop-shadow-lg"
                        style={{ top: '0', left: '0', right: '0', bottom: '0' }}
                      />
                    </>
                  )}
                  <span className="absolute bottom-4 right-4 bg-primary-100 text-neutral-100 px-4 py-2 rounded-full text-sm font-semibold z-10 shadow-lg">
                    {cases[1].category}
                  </span>
                </div>
                <CardContent className="p-8 flex flex-col items-center text-center bg-neutral-100 relative">
                  {/* Accent bar */}
                  <div className="w-12 h-1 mb-4 rounded-full bg-gradient-to-r from-primary-100 to-primary-200"></div>
                  <h3 className="text-2xl font-extrabold text-primary-100 mb-4 line-clamp-2 w-full group-hover:text-dark-400 transition-colors">
                    {cases[1].title}
                  </h3>
                  <p className="text-neutral-600 mb-6 line-clamp-3 w-full leading-relaxed">
                    {cases[1].description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6 w-full">
                    {cases[1].tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gradient-to-r from-neutral-200 to-neutral-300 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`${cases[1].link}#challenge`}
                    className="w-full group-hover:bg-primary-100 group-hover:text-neutral-100 group-hover:border-primary-100 transition-all duration-300 rounded-xl border-2 font-semibold flex items-center justify-center py-2 px-4 border-neutral-300 bg-white hover:bg-primary-100 hover:text-neutral-100 hover:border-primary-100"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            {/* Bottom left */}
            <div style={{gridArea: 'c'}}>
              <Card 
                key={cases[2].id}
                className="case-card opacity-0 group hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 bg-neutral-100 border-0 shadow-lg overflow-hidden rounded-2xl relative"
              >
                {/* Glow */}
                <div className="absolute -inset-4 z-0 rounded-2xl bg-primary-100/20 blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                <div className="relative h-48 rounded-t-2xl overflow-hidden flex items-stretch">
                  {cases[2].category === "Software Development" ? (
                    <>
                      <img
                        src="/uploads/banner-cases-2.png"
                        alt={cases[2].title}
                        className="w-full h-full object-cover"
                      />
                      <img
                        src="/uploads/automatesai-icon.png"
                        alt="Logo"
                        className="absolute top-4 left-4 w-10 h-10 object-contain"
                      />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-dark-100 to-dark-300 w-full h-full"></div>
                      <img
                        src="/uploads/automatesai-icon.png"
                        alt="Logo"
                        className="absolute inset-0 m-auto w-20 h-20 object-contain filter drop-shadow-lg"
                        style={{ top: '0', left: '0', right: '0', bottom: '0' }}
                      />
                    </>
                  )}
                  <span className="absolute bottom-4 right-4 bg-primary-100 text-neutral-100 px-4 py-2 rounded-full text-sm font-semibold z-10 shadow-lg">
                    {cases[2].category}
                  </span>
                </div>
                <CardContent className="p-8 flex flex-col items-center text-center bg-neutral-100 relative">
                  {/* Accent bar */}
                  <div className="w-12 h-1 mb-4 rounded-full bg-gradient-to-r from-primary-100 to-primary-200"></div>
                  <h3 className="text-2xl font-extrabold text-primary-100 mb-4 line-clamp-2 w-full group-hover:text-dark-400 transition-colors">
                    {cases[2].title}
                  </h3>
                  <p className="text-neutral-600 mb-6 line-clamp-3 w-full leading-relaxed">
                    {cases[2].description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6 w-full">
                    {cases[2].tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gradient-to-r from-neutral-200 to-neutral-300 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`${cases[2].link}#challenge`}
                    className="w-full group-hover:bg-primary-100 group-hover:text-neutral-100 group-hover:border-primary-100 transition-all duration-300 rounded-xl border-2 font-semibold flex items-center justify-center py-2 px-4 border-neutral-300 bg-white hover:bg-primary-100 hover:text-neutral-100 hover:border-primary-100"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            {/* Bottom right is intentionally left blank */}
            <div style={{gridArea: '.'}}></div>
          </div>
        </div>
      </section>

      {/* Add Footer here, with homeLeft prop */}
      <Footer />
    </div>
  );
};

export default Portfolio;