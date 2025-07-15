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

const PortfolioThree = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToHashWithOffset();
  }, [location]);

  const caseStudy = {
    title: "Sed Do Eiusmod Tempor",
    subtitle: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Adipiscing Elit",
    client: "Lorem Ipsum",
    location: "Dolor Sit Amet",
    website: "https://seddoeiusmod.com",
    industry: "Adipiscing Elit Industry",
    impact: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    timeline: "3 months",
    teamSize: "4 people",
    role: "Adipiscing Elit Role",
    challenge: {
      title: "The Challenge",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: "challenge"
    },
    approach: {
      title: "Our Approach",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    results: {
      title: "Results & Impact",
      content: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
    },
    techStack: [
      "Sed", "Do", "Eiusmod", "Tempor", "Adipiscing"
    ],
    visualAsset: (
      <div className="bg-neutral-200 rounded-2xl p-12 text-center border-2 border-dashed border-neutral-400">
        <div className="text-neutral-500">
          <div className="text-4xl mb-4">⚙️</div>
          <h3 className="text-xl font-semibold mb-2">Visual Asset</h3>
          <p className="text-neutral-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
    )
  };

  return <PortfolioProject caseStudy={caseStudy} />;
};

export default PortfolioThree; 