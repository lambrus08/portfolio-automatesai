import PortfolioProject from "../components/PortfolioProject";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_HEIGHT = 80;

function scrollToHashWithOffset() {
  const hash = window.location.hash;
  if (hash) {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}

const PortfolioTwo = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToHashWithOffset();
  }, [location]);

  const caseStudy = {
    title: "Consectetur Adipiscing Elit",
    subtitle: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Dolor Sit Amet",
    client: "Adipiscing Elit",
    location: "Lorem Ipsum",
    website: "https://dolorsitamet.com",
    industry: "Dolor Sit Amet Industry",
    impact: "Duis aute irure dolor in reprehenderit in voluptate.",
    timeline: "2 months",
    teamSize: "5 people",
    role: "Dolor Sit Amet Role",
    challenge: {
      title: "The Challenge",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: "challenge"
    },
    approach: {
      title: "Our Approach",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    results: {
      title: "Results & Impact",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    techStack: [
      "Consectetur", "Adipiscing", "Elit", "Sed", "Do"
    ],
    visualAsset: (
      <div className="bg-neutral-200 rounded-2xl p-12 text-center border-2 border-dashed border-neutral-400">
        <div className="text-neutral-500">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold mb-2">Visual Asset</h3>
          <p className="text-neutral-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    )
  };

  return <PortfolioProject caseStudy={caseStudy} />;
};

export default PortfolioTwo; 