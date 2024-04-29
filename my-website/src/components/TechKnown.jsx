import React from "react";
import data from "../../text.json";
import StaticCardForTech from "./flipcard/static-card/StaticCard";

const TechKnown = () => {
  return (
    <div className="flex flex-col border-4 rounded-lg shadow-lg shadow-gray-500 p-2 m-4 w-4/5 justify-center items-center">
      <h1 className="font-bold text-3xl underline mb-2">Tech Skills</h1>
      <StaticCardForTech
        typeOfTech="Languages"
        arrayOfTechImages={Object.values(data.techPics.Languages)}
      />
      <StaticCardForTech
        typeOfTech="Frontend"
        arrayOfTechImages={Object.values(data.techPics.Frontend)}
      />
      <StaticCardForTech
        typeOfTech="Backend and Databases"
        arrayOfTechImages={Object.values(data.techPics.BackendAndDB)}
      />
      <StaticCardForTech
        typeOfTech="Testing and Deployment"
        arrayOfTechImages={Object.values(data.techPics.TestingAndDeployment)}
      />
    </div>
  );
};

export default TechKnown;
