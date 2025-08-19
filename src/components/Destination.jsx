import { useState } from "react";
import data from "../data.json";

const destinations = data.destinations;

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(0);

  return (
    <>
      <div className="destination-image"></div>

      <div className="w-[90%] max-w-6xl m-auto py-8 md:py-12">
        <h1 className="text-gray-300 uppercase tracking-[4px] text-xl sm:text-2xl text-center md:text-left md:mb-7">
          <span className="text-gray-500">01</span> Pick your destination
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 py-10">
          {/* Image */}
          <figure className="flex-[1.2] flex justify-center md:justify-start">
            <img
              src={destinations[selectedDestination].images.png}
              alt={destinations[selectedDestination].name}
              className="w-48 sm:w-64 md:w-[80%] mx-auto"
            />
          </figure>

          {/* Details */}
          <div className="flex-1 text-center md:text-left">
            {/* Tabs */}
            <div className="destination-buttons flex justify-center md:justify-start gap-6 mb-8 flex-wrap">
              {destinations.map((destination, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDestination(index)}
                  className={`uppercase tracking-[3px] sm:tracking-[6px] font-light text-base sm:text-lg md:text-xl cursor-pointer pb-2 transition border-b-2 ${
                    selectedDestination === index
                      ? "border-white text-white"
                      : "border-transparent text-gray-400 hover:text-white hover:border-gray-500"
                  }`}
                >
                  {destination.name}
                </button>
              ))}
            </div>

            {/* Destination Info */}
            <div className="destination-details">
              <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-wider mt-6 mb-5 md:mt-6 md:mb-8 uppercase">
                {destinations[selectedDestination].name}
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed mb-10 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
                {destinations[selectedDestination].description}
              </p>

              <hr className="mb-5 border-gray-700" />

              {/* Extra Info */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8 sm:gap-16 uppercase font-light">
                <div>
                  <h3 className="text-gray-400 tracking-widest text-sm mb-2">
                    Avg. distance
                  </h3>
                  <p className="text-2xl sm:text-3xl tracking-widest text-gray-300">
                    {destinations[selectedDestination].distance}
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-400 tracking-widest text-sm mb-2">
                    Est. travel time
                  </h3>
                  <p className="text-2xl sm:text-3xl tracking-widest text-gray-300">
                    {destinations[selectedDestination].travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
