import React, { useState } from "react";
import { MessageCircleIcon, XCircleIcon } from "lucide-react";

const StickyContactButton = () => {
  const [contactOpen, setContactOpen] = useState(false);

  function modalOfContact() {
    setContactOpen((prev) => !prev);
  }

  return (
    <>
      {!contactOpen ? (
        <div className="fixed top-5 right-5">
          <button
            className="bg-blue-600 text-black rounded-full p-4 hover:bg-pink-600 focus:outline-none focus:ring focus:border-blue-100 hover:scale-110"
            onClick={modalOfContact}
          >
            <MessageCircleIcon />
          </button>
        </div>
      ) : (
        <div className="absolute top-0 right-0 h-screen w-screen z-50 bg-sky-100 flex flex-col items-center justify-center">
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
          <div className="my-4">
            <a href="https://github.com/NabbeunNabi">
              <img src="/github-mark.png" alt="the github logo" />
            </a>
          </div>
          <div cl>
            <a href="https://www.linkedin.com/in/william-brammer/">
              <img
                src="/linkedin-black.png"
                alt="the linkedIn logo"
                className="h-1/5"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyContactButton;
