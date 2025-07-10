import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-100 text-neutral-100 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-dark-100"></div>
              </div>
              <span className="text-lg font-semibold">Portfolio</span>
            </div>
            <p className="text-neutral-400 text-sm text-center md:text-left max-w-md">
              Building innovative AI systems and sharing insights about technology, 
              development, and the future of digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-200 hover:bg-dark-300 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-dark-300 mt-8 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;