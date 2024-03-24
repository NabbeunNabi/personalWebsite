import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../flipcard/flip-card.css";
import "../flipcard/flip-transition.css";

const FlipCard = ({ textFront, textBack }) => {
  const [showFront, setShowFront] = useState(true);

  function handleClick() {
    setShowFront((prev) => !prev);
  }

  return (
    <div className="card">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <div
          className={`card-inner rounded text-black  cursor-pointer`}
          onClick={handleClick}
        >
          <div className="card-front bg-blue-600">{textFront}</div>
          <div className="card-back bg-sky-100">{textBack}</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default FlipCard;
