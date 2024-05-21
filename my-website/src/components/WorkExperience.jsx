import FlipCard from "./flipcard/FlipCard";
import data from "../../text.json";

const WorkExperience = () => {
  return (
    <div className="flex flex-col border-4 rounded-lg shadow-lg shadow-gray-500 p-2 m-4 w-4/5 justify-center">
      <h1 className="font-bold text-3xl underline mb-2">Work Experience</h1>
      <div className="flex flex-col justify-center items-center">
        <FlipCard
          textForCard={data.workProjects.javco}
          imgSource="/javco_logo.png"
        />
        <FlipCard
          textForCard={data.workProjects.daizen}
          imgSource="/daizen.png"
        />
        <FlipCard
          textForCard={data.workProjects.findAdoc}
          imgSource="/findadoc.svg"
        />
        <FlipCard
          textForCard={data.workProjects.expressAi}
          imgSource="/expressai.svg"
        />
        <FlipCard
          textForCard={data.workProjects.codeChrysalis}
          imgSource="/codechrysalis.png"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
