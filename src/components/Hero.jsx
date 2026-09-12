import React from "react";
import BannerIMG from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 py-12">
      <div className="w-full md:w-[44%] flex flex-col gap-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-2 md:mt-6 text-base md:text-lg text-gray-600">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
          <button className="w-full sm:w-60 h-10 bg-gradient-to-r from-[#FF5722] to-[#7C3AED] text-white rounded-lg">
            Explore Technologies
          </button>

          <button className="w-full sm:w-50 text-black/50 border border-gray-400/50 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full md:w-[50%] flex justify-center">
        <img
          className="w-[80%] sm:w-[70%] md:w-full max-w-[550px]"
          src={BannerIMG}
          alt="Development Stack"
        />
      </div>
    </div>
  );
};

export default Hero;
