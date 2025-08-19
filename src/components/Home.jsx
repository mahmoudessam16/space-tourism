const Home = () => {
  return (
    <>
      <div className="home-image"></div>
      <div className="w-[80%] m-auto gap-20 lg:gap-0 flex flex-col lg:flex-row justify-between items-center py-15 md:py-40">
        <div className="flex-1 uppercase tracking-widest text-center lg:text-left">
          <p className=" text-gray-300 font-light text-xl md:text-2xl">
            so, you want to travel to
          </p>
          <h1 className="text-white text-8xl md:text-9xl font-serif mt-6 mb-8 md:mt-8 md:mb-10">
            space
          </h1>
          <p className="text-gray-400 tracking-normal font-sans capitalize text-base sm:text-lg leading-relaxed w-auto md:w-[500px] lg:w-[490px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <button className="cursor-pointer uppercase w-56 h-56 rounded-full bg-white text-2xl tracking-widest text-gray-800 font-serif font-light hover:bg-gray-200 transition-colors duration-300">
            explore
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
