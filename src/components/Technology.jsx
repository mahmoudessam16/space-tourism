import React, { useState } from "react";
import data from "../data.json";

const technologies = data.technology;

const Technology = () => {
  const [currentTech, setCurrentTech] = useState(0);
  return (
    <>
      <div className="technology-image"></div>

      <div>
        {/* Title */}
        <h1 className="w-[90%] max-w-6xl m-auto pt-8 md:pt-12 text-gray-300 uppercase tracking-[4px] text-xl sm:text-2xl text-center md:text-left mb-8">
          <span className="text-gray-500">03</span> space launch 101
        </h1>

        {/* Content */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between py-8">
          {/* Left Section */}
          <div className="flex-[1.2] flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-28 px-6 sm:px-12 md:px-20 lg:px-32">
            {/* Buttons */}
            <div className="flex md:flex-col gap-4">
              {technologies.map((tech, index) => (
                <button
                  key={index}
                  className={`${
                    currentTech === index
                      ? "bg-white text-gray-900"
                      : "border border-gray-500 text-gray-400"
                  } w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center text-lg sm:text-xl transition`}
                  onClick={() => setCurrentTech(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Details */}
            <div className="text-center md:text-left max-w-xl">
              <p className="text-gray-400 uppercase font-light tracking-[2px] text-sm mb-6">
                the terminology...
              </p>
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-wider mb-5 md:mb-8 uppercase">
                {technologies[currentTech].name}
              </h1>
              <p className="text-gray-400 font-sans leading-relaxed text-base sm:text-lg">
                {technologies[currentTech].description}
              </p>
            </div>
          </div>

          {/* Right Image (touching right edge on desktop) */}
          <figure className="w-full md:w-[50%] lg:w-[40%] flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src={technologies[currentTech].images.portrait}
              alt={technologies[currentTech].name}
              className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain md:object-right"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Technology;
