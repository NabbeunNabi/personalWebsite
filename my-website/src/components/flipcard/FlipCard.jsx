import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../flipcard/flip-card.css";
import "../flipcard/flip-transition.css";

const FlipCard = ({ textForCard, imgSource }) => {
  const [showFront, setShowFront] = useState(true);

  function handleClick() {
    setShowFront((prev) => !prev);
  }

  return (
    <div className="card w-4/5 h-[50vh] md:h-[28vh] p-2 mb-4">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <div
          className={`card-inner rounded text-black  cursor-pointer`}
          onClick={handleClick}
        >
          <div
            onMouseEnter={window.innerWidth >= 1024 ? handleClick : null}
            className="card-front flex flex-col justify-start md:flex-row bg-blue-600"
          >
            <div className="flex justify-center items-center w-full h-2/5  md:h-full bg-white">
              <img src={imgSource} className="h-auto max-h-full" />
            </div>
            <div className="flex flex-col text-white justify-center items-center p-8 md:justify-start h-2/5 w-full">
              <h1 className="font-bold text-start">
                Company: {textForCard.companyName}
              </h1>
              <h2 className="font-semibold">Position: {textForCard.role}</h2>
              <div className="text-start p-2">
                <h3 className="text-center underline">About the company</h3>
                <p>- {textForCard.about}</p>
              </div>
            </div>
            <button className="fixed md:left-2 bottom-2 px-6 py-2 opacity-70 bg-blue-500 text-white rounded-full hover:bg-blue-700">
              {showFront && (
                <>
                  {/* Small screens */}
                  <span className="block lg:hidden">Tap for more info</span>
                  {/* Large screens */}
                  <span className="hidden lg:block">Hover for more info</span>
                </>
              )}
            </button>
          </div>
          <div
            onMouseLeave={window.innerWidth >= 1024 ? handleClick : null}
            className="card-back flex flex-col md:flex-row bg-sky-100"
          >
            <div className="proj-details flex flex-col p-4 text-black justify-center items-center h-2/5 md:h-full w-full">
              <h1 className="font-bold underline p-2">Tech Used</h1>

              <p className="flex flex-wrap justify-around items-center p-2 text-start p-2 w-full overflow-scroll md:overflow-auto ">
                {Object.entries(textForCard.techUsed).map((entry, index) => (
                  <span
                    className="flex justify-center mt-1 text-black items-center space-x-2"
                    key={index}
                    style={{ flex: "0 0 33.333%" }}
                  >
                    {/* <span className="text-lg font-medium">-{entry[0]}: </span> */}
                    <img
                      src={entry[1]}
                      alt={entry[0]}
                      className="img-tech-zoom w-6 h-6 rounded-full"
                    />
                  </span>
                ))}
              </p>
            </div>

            <div className="flex flex-col p-2 text-black justify-center items-center h-2/5 md:h-full w-full">
              <h1 className="font-bold text-start mt-2">Project Details:</h1>

              <p className="text-start p-2 overflow-scroll md:overflow-auto">
                - {textForCard.projectDetails}
              </p>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default FlipCard;
