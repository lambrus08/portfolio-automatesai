import { useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Cases = () => {
  const casesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in");
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const caseElements = casesRef.current?.querySelectorAll('.case-card');
    caseElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cases = [
    {
      id: 1,
      category: "Software Development",
      title: "Delivering real-time coin data to millions of Crypto Insiders visitors",
      description: "Crypto Insiders, the largest cryptocurrency news platform in the Netherlands, attracts over 2 million monthly visitors who rely on its up-to-the-minute coverage of the crypto market. To enhance its position as an industry leader and elevate the user experience, the platform needed a robust data infrastructure capable of handling massive traffic while delivering real-time cryptocurrency data.",
      image: "/lovable-uploads/70f2b446-a5b3-4839-aab7-7d685b4d8fff.png",
      tags: ["Real-time Data", "Scalability", "Cryptocurrency"],
      link: "#"
    },
    {
      id: 2,
      category: "AI Engineering",
      title: "Transforming BLANK's customer service with AI",
      description: "BLANK is a prominent e-commerce brand focused on sunglasses, with over 200k customers around the world. Their customer support team faced challenges in managing high-ticket volumes while maintaining their exceptional service standards. By implementing AI-powered solutions, we revolutionized their customer service operations.",
      image: "/lovable-uploads/046f18b7-cabf-4d12-85fe-78c515676e4e.png",
      tags: ["AI Automation", "Customer Service", "E-commerce"],
      link: "#"
    },
    {
      id: 3,
      category: "AI Engineering", 
      title: "AutomatesAI: Streamlining business processes",
      description: "AutomatesAI represents the next generation of business process automation. By leveraging advanced AI algorithms and machine learning capabilities, we created a platform that intelligently automates repetitive tasks, reduces human error, and significantly improves operational efficiency across various industries.",
      image: "/lovable-uploads/046f18b7-cabf-4d12-85fe-78c515676e4e.png",
      tags: ["Process Automation", "Machine Learning", "Business Intelligence"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-dark text-neutral-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Explore how I've helped organizations leverage AI and technology 
              to solve complex problems and drive meaningful results.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section ref={casesRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {cases.map((caseStudy, index) => (
              <Card 
                key={caseStudy.id}
                className="case-card opacity-0 group hover:shadow-xl transition-all duration-300 bg-card border-neutral-300"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-100 text-neutral-100 px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary-100 mb-4 line-clamp-2">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {caseStudy.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-neutral-200 text-neutral-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary-100 group-hover:text-neutral-100 transition-colors"
                    onClick={() => window.open(caseStudy.link, '_blank')}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-100 text-neutral-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can leverage AI and technology to solve your business challenges.
          </p>
          <Button size="lg" variant="outline" className="bg-neutral-100 text-primary-100 hover:bg-neutral-200">
            Get in Touch
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Cases;