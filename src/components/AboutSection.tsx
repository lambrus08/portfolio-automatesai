import { useEffect, useRef } from "react";

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-left");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-neutral-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={aboutRef} className="max-w-4xl mx-auto text-center opacity-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-100 mb-8">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-700 text-lg leading-relaxed mb-6">
              With over a decade of experience in software development and AI systems, 
              I've helped numerous organizations navigate the complex landscape of artificial intelligence. 
              My passion lies in translating cutting-edge AI research into practical, scalable solutions 
              that drive real business value.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed mb-6">
              Through my work, I've witnessed firsthand how AI can transform industries, 
              from automating complex workflows to enabling new forms of customer engagement. 
              I believe in sharing knowledge and helping others understand how to leverage 
              these powerful technologies responsibly and effectively.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              When I'm not building AI systems, you'll find me creating content, mentoring developers, 
              and exploring the latest developments in machine learning and automation. 
              My goal is to make AI accessible and beneficial for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;