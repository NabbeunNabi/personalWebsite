import React from "react";

const FlipCard = ({ textFront, textBack }) => {
  return (
    <div className="card rounded  ">
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
