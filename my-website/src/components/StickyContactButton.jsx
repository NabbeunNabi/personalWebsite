import React, { useState } from "react";
import { MessageCircleIcon, XCircleIcon } from "lucide-react";

const StickyContactButton = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function modalOfContact() {
    setContactOpen((prev) => !prev);
    handleToggleActive;
  }

  const handleToggleActive = () => {
    setIsActive((prev) => !prev);
  };

  const boxStyle = {
    width: "200px",
    height: "200px",
    background: isActive
      ? "linear-gradient(to top right, #ffcc00, #ff6600)"
      : "linear-gradient(to bottom left, #ffcc00, #ff6600)",
    transition: "background 0.5s ease",
    cursor: "pointer",
  };

  return (
    <>
      {!contactOpen ? (
        <div className="z-20 fixed top-6 right-8">
          <button
            className="bg-blue-600 text-black rounded-full p-4 hover:bg-pink-600 focus:outline-none focus:ring focus:border-blue-100 hover:scale-110"
            onClick={modalOfContact}
            on
          >
            <MessageCircleIcon />
          </button>
        </div>
      ) : (
        <>
          <div className="contact-fill absolute top-0 right-0 h-screen w-screen z-50 bg-sky-100 flex flex-col items-center justify-center">
            <div className="fixed top-5 right-5">
              <button
                onClick={modalOfContact}
                className="bg-blue-600 text-black rounded-full p-4 hover:bg-pink-600 focus:outline-none focus:ring focus:border-blue-100 transform transition-transform duration-300 hover:rotate-180 hover:scale-110"
                role="img"
                aria-label="Close"
              >
                <XCircleIcon />
              </button>
            </div>
            <a
              href="https://github.com/NabbeunNabi"
              className="button-fill-l-to-r flex items-center justify-center mb-4 h-2/5 w-4/5 rounded-full"
              target="_blank"
            >
              <img
                src="/github.svg"
                alt="the github logo"
                className="h-2/5 mr-4"
              />
              <span className="text-4xl">Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/william-brammer/"
              className="button-fill-l-to-r flex items-center justify-center h-2/5 w-4/5 rounded-full"
              target="_blank"
            >
              <img
                src="/linkedin.svg"
                alt="the linkedIn logo"
                className="h-2/5 mr-4"
              />
              <span className="text-4xl">LinkedIn</span>
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default StickyContactButton;
