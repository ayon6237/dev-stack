import React from "react";
import BannerIMG from '../assets/banner-stack.png'

const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto min-h-screen flex items-center justify-between">
      <div className="w-[44%] flex flex-col gap-6">
        <h1 className="text-5xl font-bold">
          Build Your Ideal <br /> <span className="bg-gradient-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-1.5 items-center">
          <button className="w-60 h-10 bg-gradient-to-r from-[#FF5722] to-[#7C3AED] text-white rounded-lg">
            Explore Texhnologies
          </button>
          <button className="w-50 text-black/50 border border-gray-400/50 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img src={BannerIMG} alt="" />
      </div>
    </div>
  );
};

export default Hero;
