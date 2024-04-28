import { useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

const Navbar = ({ contactOpen }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const pathsForNav = [
    { href: "#about", text: "About" },
    { href: "#work-exp", text: "Work Experience" },
    { href: "#contributions", text: "Contributions" },
    { href: "#skills", text: "Skills" },
  ];

  function handleBlur() {
    setToggleMenu(false);
  }

  return (
    <>
      <div
        className={
          contactOpen
            ? "hidden"
            : "flex items-center justify-between h-[10vh] w-full bg-gray-500 text-white"
        }
      >
        <nav className="w-full">
          {/* Navigation */}
          <div className="flex items-center gap-6 md:gap-12">
            {/* Mobile Navigation Toggle (aligned to left) */}
            <div className="lg:hidden flex items-center ml-4 z-50">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? (
                  <XCircleIcon className="h-6 text-white fixed top-6 left-40" />
                ) : (
                  <Bars3Icon className="h-6 text-white" />
                )}
              </button>
            </div>

            {/* Primary Navigation (Visible on Large Screens) */}
            <div className="hidden lg:flex justify-around w-4/5 gap-8 md:gap-12">
              {pathsForNav.map((element, index) => (
                <div className="font-bold " key={`nav-${index}`}>
                  <a href={element.href}>{element.text}</a>
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Panel (aligns left) */}
        <div
          onBlur={handleBlur}
          onMouseLeave={handleBlur}
          className={`fixed z-20 p-2 bg-gray-500 overflow-hidden flex flex-col lg:hidden gap-8 top-0 left-0 ${
            toggleMenu ? "w-auto h-auto" : "w-0 h-0"
          }`}
        >
          <div className="mt-4 px-8 flex flex-col items-start text-start gap-8 font-bold tracking-wider">
            {pathsForNav.map((element, index) => (
              <a
                key={index}
                href={element.href}
                onClick={() => setToggleMenu(false)}
              >
                {element.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
