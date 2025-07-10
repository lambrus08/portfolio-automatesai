import { useEffect, useRef } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Blog = () => {
  const blogRef = useRef<HTMLDivElement>(null);

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

    const blogElements = blogRef.current?.querySelectorAll('.blog-card');
    blogElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch in 2024",
      excerpt: "Exploring the emerging AI technologies that will shape business operations and strategy in the coming year. From autonomous systems to advanced natural language processing.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Trends",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Building Scalable AI Systems: Lessons from Production",
      excerpt: "Real-world insights from deploying AI systems at scale. Learn about the challenges, solutions, and best practices for building robust AI applications.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "From Hype to Reality: Making AI Work for Your Business",
      excerpt: "A practical guide to implementing AI solutions that deliver actual business value. Cut through the noise and focus on what really matters.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Business Strategy",
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
    <div className="min-h-screen bg-neutral-100 pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-dark text-neutral-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Thoughts, insights, and practical advice on AI, technology, 
              and building better software systems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
                <h2 className="text-2xl lg:text-3xl font-bold text-primary-100 mb-4">
                  {blogPosts[0].title}
                </h2>
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
                  <Button>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={blogRef} className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-100 mb-12 text-center">
            Latest Articles
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
                  <h3 className="text-xl font-bold text-primary-100 mb-3 line-clamp-2">
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
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary-100 group-hover:text-neutral-100 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-dark-100 text-neutral-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights on AI, technology, and development delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-neutral-100 text-primary-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            />
            <Button size="lg" variant="outline" className="bg-neutral-100 text-primary-100 hover:bg-neutral-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;