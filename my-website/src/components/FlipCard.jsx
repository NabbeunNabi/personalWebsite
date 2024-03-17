import React, { useState } from "react";
import { isMobile } from "react-device-detect"; // Importing from react-device-detect

const FlipCard = ({ textFront, textBack }) => {
  const [flipped, setFlipped] = useState(false);

  const handleToggle = () => {
    if (isMobile && flipped) {
      setFlipped(false); // Reset flipped state on mobile devices when clicked again
    } else {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className={`card rounded ${flipped ? "is-flipped" : ""}`}
      onClick={handleToggle}
    >
      <div className="card-inner rounded">
        <div className="card-front bg-blue-600 rounded text-black">
          {textFront}
        </div>
        <div className="card-back rounded">{textBack}</div>
      </div>
    </div>
  );
};

export default FlipCard;
