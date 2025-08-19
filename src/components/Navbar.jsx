import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const [linkList, setLinkList] = useState([
    { name: "Home", id: "home", counter: "00" },
    { name: "Destination", id: "destination", counter: "01" },
    { name: "Crew", id: "crew", counter: "02" },
    { name: "Technology", id: "technology", counter: "03" },
  ]);
  const [onMobile, setOnMobile] = useState(false);

  // Sync active link with current path
  useEffect(() => {
    const currentPath =
      location.pathname === "/" ? "home" : location.pathname.slice(1);
    setLinkList((prev) =>
      prev.map((link) => ({
        ...link,
        active: link.id === currentPath,
      }))
    );
  }, [location]);

  const handleActiveState = (selectedId) => {
    setOnMobile(false); // just close mobile menu
  };

  return (
    <header className="mobile flex justify-between items-center sm:pl-10 bg-transparent text-white md:mt-0 lg:my-10 relative z-50">
      <figure>
        <img src="logo.svg" alt="logo" />
      </figure>

      {/* Desktop */}
      <nav>
        <ul className="hidden sm:flex gap-10 text-md font-light uppercase tracking-widest bg-white/5 backdrop-blur-lg pl-10 md:pl-15 lg:pl-30 lg:pr-40 md:pr-20 pr-5">
          {linkList.map(({ name, id, counter, active }) => (
            <li
              key={id}
              className={`${
                active
                  ? "border-b-3 border-white"
                  : "border-b-3 border-transparent hover:border-gray-400"
              } text-gray-300 cursor-pointer py-8 relative flex flex-row`}
              onClick={() => handleActiveState(id)}
            >
              <Link
                to={`/${
                  name.toLowerCase() === "home" ? "" : name.toLowerCase()
                }`}
                className="flex items-center"
              >
                <span className="font-bold mr-2">{counter}</span> {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <div className="sm:hidden z-50">
        <img
          src={onMobile ? "icon-close.svg" : "icon-hamburger.svg"}
          onClick={() => setOnMobile(!onMobile)}
          alt="hamburger"
          className="cursor-pointer"
        />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-white/10 backdrop-blur-lg transform ${
          onMobile ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out sm:hidden flex flex-col gap-8 p-10 uppercase tracking-widest`}
      >
        <ul className="flex flex-col gap-6 mt-20 text-lg">
          {linkList.map(({ name, id, counter, active }) => (
            <li
              key={id}
              className={`${
                active
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              } text-gray-300 cursor-pointer font-light relative`}
              onClick={() => handleActiveState(id)}
            >
              <Link
                to={`/${
                  name.toLowerCase() === "home" ? "" : name.toLowerCase()
                }`}
                className="flex items-center"
              >
                <span className="font-bold mr-2">{counter}</span> {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
