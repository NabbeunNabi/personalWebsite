import React from "react";

const StaticCardForTech = ({ typeOfTech, arrayOfTechImages }) => {
  return (
    <>
      <div className="border-4 rounded-lg shadow-lg shadow-gray-500 p-2 m-4 w-4/5 ">
        <h1 className="underline text-xl font-semibold p-1 mb-2">
          {typeOfTech}
        </h1>
        <div className="flex flex-wrap justify-around">
          {arrayOfTechImages?.map((imageSource) => {
            return (
              <img
                className="img-tech-zoom p-2"
                src={imageSource}
                height={70}
                width={70}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StaticCardForTech;
