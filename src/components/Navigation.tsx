import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavbarStyle } from "@/components/NavbarStyleContext";

const Navigation = ({ blendWithHero = false, navSolid = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" }
  ];

  // Use context for navbar style
  const { navbarStyle } = useNavbarStyle();
  const isPortfolioPage = location.pathname === "/portfolio";

  // Determine navbar style for /cases scroll effect
  let navClass = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-none";
  let navStyle;
  if (isPortfolioPage || location.pathname === "/blog") {
    if (scrolled) {
      navStyle = { background: "#000000", border: "none", boxShadow: "none" };
    } else {
      navStyle = { background: "transparent", border: "none", boxShadow: "none" };
    }
    // No border, no shadow
  } else if (navbarStyle === "solid") {
    navClass += " bg-black border-b border-neutral-800 shadow-lg";
    navStyle = undefined;
  } else if (navbarStyle === "blend" || navbarStyle === "transparent") {
    navStyle = { background: "transparent", border: "none", boxShadow: "none" };
  } else {
    navClass += " bg-primary-100 shadow-lg";
    navStyle = undefined;
  }

  return (
    <nav className={navClass} style={navStyle}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 overflow-hidden hover:scale-105 transition-transform duration-300">
            <img 
              src="/portfolio-automatesai/uploads/automatesai-logo.png" 
              alt="Portfolio Logo" 
              className="h-16 lg:h-20 object-contain max-w-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm lg:text-base font-medium transition-all duration-300 hover:text-neutral-200 hover:scale-105 ${
                  location.pathname === item.href
                    ? "text-neutral-100 border-b-2 border-neutral-100"
                    : "text-neutral-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-4 bg-neutral-100 text-primary-100 hover:bg-neutral-200 hover:text-primary-100 border-2 border-neutral-300 hover:border-neutral-100 transition-all duration-300 rounded-xl font-semibold"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-neutral-100 hover:bg-neutral-800/50 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary-100 border-t border-neutral-700/50">
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-base font-medium transition-all duration-300 rounded-lg px-3 py-2 ${
                  location.pathname === item.href
                    ? "text-neutral-100 bg-neutral-800/50"
                    : "text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800/30"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-4 bg-neutral-100 text-primary-100 hover:bg-neutral-200 hover:text-primary-100 border-2 border-neutral-300 hover:border-neutral-100 transition-all duration-300 rounded-xl font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;