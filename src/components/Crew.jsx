import { useState } from "react";
import data from "../data.json";

const crews = data.crew;

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(0);
  return (
    <>
      <div className="crew-image"></div>

      <div className="w-[90%] max-w-6xl m-auto pt-8 md:pt-12">
        <h1 className="text-gray-300 uppercase tracking-[4px] text-xl sm:text-2xl text-center md:text-left mb-8">
          <span className="text-gray-500">02</span> Meet your crew
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between gap-10">
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left md:py-6">
            <p className="text-gray-400 uppercase font-light tracking-[4px] text-lg sm:text-xl mb-6">
              {crews[selectedCrew].role}
            </p>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-wider mb-5 md:mb-8 uppercase">
              {crews[selectedCrew].name}
            </h1>
            <p className="text-gray-400 font-sans leading-relaxed mb-10 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              {crews[selectedCrew].bio}
            </p>

            {/* Bullets */}
            <div className="flex justify-center md:justify-start my-6">
              {crews.map((crew, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCrew(index)}
                  className={`${
                    selectedCrew === index
                      ? "bg-white w-[15px] h-[15px]"
                      : "bg-gray-600"
                  } w-[14px] h-[14px] rounded-full inline-block mr-4 transition-all duration-300 cursor-pointer my-5`}
                ></button>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <figure className="w-[70%] sm:w-[60%] md:w-[80%] lg:w-[450px]">
              <img
                className="w-full h-auto object-contain"
                src={crews[selectedCrew].images.webp}
                alt={crews[selectedCrew].name}
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
