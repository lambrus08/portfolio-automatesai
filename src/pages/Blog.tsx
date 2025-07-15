import { useEffect, useRef } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavbarStyle } from "@/components/NavbarStyleContext";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogRef = useRef<HTMLDivElement>(null);
  const { setNavbarStyle } = useNavbarStyle();

  useEffect(() => {
    // Set initial style to transparent
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
    // Simple animation without IntersectionObserver
    const blogElements = blogRef.current?.querySelectorAll('.blog-card');
    if (blogElements) {
      blogElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("animate-fade-in");
          el.classList.remove("opacity-0");
        }, index * 200);
      });
    }
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Lorem Ipsum",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Consectetur Adipiscing Elit",
      excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Dolor Sit Amet",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Sed Do Eiusmod Tempor",
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Adipiscing Elit",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "radial-gradient(ellipse 20% 100% at 50% 0%, #383838 0%, #202026 0%, #383838 0%, #000000 100%)" }}
    >
      {/* Header */}
      <section className="pt-20 py-16 text-neutral-100 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
              Lorem Ipsum Blog
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post & Blog Posts Grid with blended background */}
      <section className="py-20 bg-gradient-to-b from-neutral-100 to-neutral-200">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Featured Post */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-neutral-300">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary-100 text-neutral-100 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-neutral-200 text-neutral-700 px-3 py-1 rounded-full text-sm">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-primary-100 mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-neutral-600 text-lg mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-neutral-500 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {formatDate(blogPosts[0].date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <Link to="/blog-post-one">
                    <Button>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div ref={blogRef}>
            <h2 className="text-3xl font-bold text-primary-100 mb-12 text-center">
              Lorem Ipsum Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card 
                  key={post.id}
                  className="blog-card opacity-0 group hover:shadow-xl transition-all duration-300 bg-card border-neutral-300"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-neutral-200 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-extrabold text-primary-100 mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-neutral-500 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Link to={index === 0 ? "/blog-post-two" : "/blog-post-three"}>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary-100 group-hover:text-neutral-100 transition-colors"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;