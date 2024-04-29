import React from "react";
import FlipCard from "./flipcard/FlipCard";
import data from "../../text.json";

const Contributions = () => {
  return (
    <div className="flex flex-col border-4 rounded-lg shadow-lg shadow-gray-500 p-2 m-4 w-4/5 justify-center items-center">
      <h1 className="font-bold text-3xl underline mb-2">
        Company Contributions
      </h1>

      <FlipCard
        textForCard={data.workProjects.findAdoc}
        imgSource="/findadoc.svg"
      />
      <FlipCard
        textForCard={data.workProjects.sustainabilityPage}
        imgSource="/sustainabilityPageLogo.svg"
      />
    </div>
  );
};

export default Contributions;
