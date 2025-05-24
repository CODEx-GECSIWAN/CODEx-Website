import React from "react";

const Hero = () => {
  return (
    <section className=" min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Unleash Your <span className="text-yellow-400">Creative</span> Potential
        </h1>
        <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto mt-6 mb-10">
          Join <span className="font-semibold text-yellow-300">CODEx</span> – Where beginners transform into creators, innovators, and digital artists.
          Together, we code, design, and build the future.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
          Join Us 🚀
        </button>
      </div>
    </section>
  );
};

export default Hero;
