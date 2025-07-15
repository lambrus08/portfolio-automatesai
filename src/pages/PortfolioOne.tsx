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

const PortfolioOne = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToHashWithOffset();
  }, [location]);

  const caseStudy = {
    title: "Lorem Ipsum Dolor Sit Amet",
    subtitle: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Lorem Ipsum",
    client: "Dolor Sit Amet",
    location: "Adipiscing Elit",
    website: "https://loremipsum.com",
    industry: "Lorem Ipsum Industry",
    impact: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    timeline: "1 month",
    teamSize: "3 people",
    role: "Lorem Ipsum Role",
    challenge: {
      title: "The Challenge",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      id: "challenge"
    },
    approach: {
      title: "Our Approach",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    results: {
      title: "Results & Impact",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    techStack: [
      "Lorem", "Ipsum", "Dolor", "Sit", "Amet"
    ],
    visualAsset: (
      <div className="bg-neutral-200 rounded-2xl p-12 text-center border-2 border-dashed border-neutral-400">
        <div className="text-neutral-500">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">Visual Asset</h3>
          <p className="text-neutral-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    )
  };

  return <PortfolioProject caseStudy={caseStudy} />;
};

export default PortfolioOne; 