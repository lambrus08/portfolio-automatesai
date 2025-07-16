import { Linkedin, Youtube, ArrowRight, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface FooterProps {
  homeLeft?: boolean;
  casesLeft?: boolean;
}

const Footer = ({ homeLeft, casesLeft }: FooterProps) => {
  const location = useLocation();
  const path = location.pathname;

  // Determine which buttons to show
  let navSection = null;
  let leftSection = <div className="flex-1"></div>;

  if (path === "/") {
    navSection = (
      <Link
        to="/portfolio"
        className="flex flex-col items-end group hover:scale-105 transition-transform duration-300"
      >
        <span className="text-neutral-300 text-sm mb-0.5 group-hover:text-neutral-200 transition-colors">Next</span>
        <div className="flex items-center space-x-1">
          <span className="text-neutral-100 text-xl font-semibold group-hover:text-neutral-200 transition-colors">Portfolio</span>
          <ArrowRight size={14} className="text-neutral-100 group-hover:text-neutral-200 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </Link>
    );
  } else if (path === "/cases") {
    if (homeLeft) {
      leftSection = (
        <div className="flex-1 flex justify-start pl-8">
          <Link
            to="/"
            className="flex flex-col items-start group hover:scale-105 transition-transform duration-300"
          >
            <span className="text-neutral-300 text-sm mb-0.5 group-hover:text-neutral-200 transition-colors">Previous</span>
            <div className="flex items-center space-x-1">
              <ArrowLeft size={14} className="text-neutral-100 group-hover:text-neutral-200 group-hover:-translate-x-1 transition-all duration-300" />
              <span className="text-neutral-100 text-xl font-semibold group-hover:text-neutral-200 transition-colors">Home</span>
            </div>
          </Link>
        </div>
      );
      navSection = (
        <Link
          to="/blog"
          className="flex flex-col items-end group hover:scale-105 transition-transform duration-300"
        >
          <span className="text-neutral-300 text-sm mb-0.5 group-hover:text-neutral-200 transition-colors">Next</span>
          <div className="flex items-center space-x-1">
            <span className="text-neutral-100 text-xl font-semibold group-hover:text-neutral-200 transition-colors">Blog</span>
            <ArrowRight size={14} className="text-neutral-100 group-hover:text-neutral-200 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </Link>
      );
    } else {
      navSection = (
        <div className="flex flex-col items-end space-y-2">
          <Link
            to="/"
            className="flex flex-col items-end group hover:scale-105 transition-transform duration-300"
          >
            <span className="text-neutral-300 text-sm mb-0.5 group-hover:text-neutral-200 transition-colors">Previous</span>
            <div className="flex items-center space-x-1">
              <ArrowLeft size={14} className="text-neutral-100 group-hover:text-neutral-200 group-hover:-translate-x-1 transition-all duration-300" />
              <span className="text-neutral-100 text-xl font-semibold group-hover:text-neutral-200 transition-colors">Home</span>
            </div>
          </Link>
          <Link
            to="/blog"
            className="flex flex-col items-end group hover:scale-105 transition-transform duration-300"
          >
            <span className="text-neutral-300 text-sm mb-0.5 group-hover:text-neutral-200 transition-colors">Next</span>
            <div className="flex items-center space-x-1">
              <span className="text-neutral-100 text-xl font-semibold group-hover:text-neutral-200 transition-colors">Blog</span>
              <ArrowRight size={14} className="text-neutral-100 group-hover:text-neutral-200 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>
        </div>
      );
    }
  } else if (path === "/blog") {
    leftSection = (
      <div className="flex-1 flex justify-start pl-8">
        <Link
          to="/portfolio"
          className="flex flex-col items-start group hover:scale-105 transition-transform duration-300"
        >
          <span className="text-neutral-300 text-sm mb-0.5 group-hover:text-neutral-200 transition-colors">Previous</span>
          <div className="flex items-center space-x-1">
            <ArrowLeft size={14} className="text-neutral-100 group-hover:text-neutral-200 group-hover:-translate-x-1 transition-all duration-300" />
            <span className="text-neutral-100 text-xl font-semibold group-hover:text-neutral-200 transition-colors">Portfolio</span>
          </div>
        </Link>
      </div>
    );
    navSection = null;
  } else if (path === "/portfolio") {
    leftSection = (
      <div className="flex-1 flex justify-start pl-8">
        <Link
          to="/"
          className="flex flex-col items-start group hover:scale-105 transition-transform duration-300"
        >
          <span className="text-neutral-300 text-sm mb-0.5 group-hover:text-neutral-200 transition-colors">Previous</span>
          <div className="flex items-center space-x-1">
            <ArrowLeft size={14} className="text-neutral-100 group-hover:text-neutral-200 group-hover:-translate-x-1 transition-all duration-300" />
            <span className="text-neutral-100 text-xl font-semibold group-hover:text-neutral-200 transition-colors">Home</span>
          </div>
        </Link>
      </div>
    );
    navSection = (
      <Link
        to="/blog"
        className="flex flex-col items-end group hover:scale-105 transition-transform duration-300"
      >
        <span className="text-neutral-300 text-sm mb-0.5 group-hover:text-neutral-200 transition-colors">Next</span>
        <div className="flex items-center space-x-1">
          <span className="text-neutral-100 text-xl font-semibold group-hover:text-neutral-200 transition-colors">Blog</span>
          <ArrowRight size={14} className="text-neutral-100 group-hover:text-neutral-200 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </Link>
    );
  }

  return (
    <footer className="bg-primary-100 pt-0 pb-4 relative overflow-hidden">
      <div className="relative z-10 w-full flex flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left side (Home/Cases link if homeLeft/casesLeft) */}
        {leftSection}
        {/* Social Icons - Center */}
        <div className="flex-1 flex justify-center items-center space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={14} className="text-neutral-100" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="YouTube Channel"
          >
            <Youtube size={14} className="text-neutral-100" />
          </a>
        </div>
        {/* Next/Previous Navigation - Far Right, stacked */}
        <div className="flex-1 flex justify-end pr-8 min-h-[60px]">{navSection}</div>
      </div>
    </footer>
  );
};

export default Footer;