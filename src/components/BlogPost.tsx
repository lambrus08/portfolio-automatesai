import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavbarStyle } from "@/components/NavbarStyleContext";

interface BlogPostProps {
  title: string;
  date: string;
  author?: string;
  image?: string;
  children: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, author, image, children }) => {
  const { setNavbarStyle } = useNavbarStyle();
  useEffect(() => {
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
  return (
    <div
      className="min-h-screen"
      style={{ background: "radial-gradient(ellipse 20% 100% at 50% 0%, #383838 0%, #202026 0%, #383838 0%, #000000 100%)" }}
    >
      <Navigation />
      <section className="pt-32 pb-12 text-neutral-100 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent leading-tight">
              {title}
            </h1>
            <div className="flex flex-col items-center justify-center gap-2 mb-4 text-neutral-300 text-sm">
              <span>{date}</span>
              {author && <span>By {author}</span>}
            </div>
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full max-h-96 object-cover rounded-2xl shadow-lg mb-8 border border-neutral-700"
              />
            )}
          </div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-b from-neutral-100 to-neutral-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg prose-neutral prose-headings:text-primary-100 prose-a:text-primary-100 prose-strong:text-primary-100 text-neutral-800 bg-white/80 rounded-2xl shadow-xl p-8">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost; 