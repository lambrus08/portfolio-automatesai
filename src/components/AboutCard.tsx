import React from "react";

const AboutCard = () => {
  return (
    <div
      className="about-card group transition-all duration-500 w-full max-w-full mx-auto px-4 lg:px-8 overflow-hidden rounded-2xl bg-gradient-to-b from-white via-neutral-100 to-neutral-200 shadow-lg hover:scale-105 hover:-translate-y-2"
    >
      {/* Optional Glow */}
      <div className="relative p-10 flex flex-col items-center text-center bg-transparent">
        {/* Icon with black circular background */}
        <div className="w-24 h-24 rounded-full mb-4 shadow-lg border-4 border-primary-100 bg-black flex items-center justify-center">
          <img
            src="/uploads/automatesai-icon.png"
            alt="AutomatesAI Icon"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="w-40 h-0.5 mb-3 rounded-full bg-gradient-to-r from-transparent via-primary-100/40 to-transparent"></div>
        {/* About Me */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-dark-400 mb-2">Lorem Ipsum</h3>
          <p className="text-neutral-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        {/* Experience */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-dark-400 mb-2">Dolor Sit Amet</h3>
          <p className="text-neutral-700 leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>
        {/* Philosophy */}
        <section>
          <h3 className="text-xl font-bold text-dark-400 mb-2">Consectetur</h3>
          <p className="text-neutral-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutCard; 