import data from "../../../text.json";

const AboutMe = () => {
  return (
    <div className="flex flex-col border-4 rounded-lg shadow-lg shadow-gray-500 p-2 w-4/5 justify-center">
      <h1 className="font-bold text-3xl mb-4 underline">About Me</h1>
      <ul className="list-disc pl-4 space-y-2 text-left">
        <li className="font-normal">{data.aboutMe.nameAndLocation}</li>
        <li className="font-normal">{data.aboutMe.interests}</li>
        <li className="font-normal">{data.aboutMe.workExperience}</li>
      </ul>

      <h2 className="font-bold mt-2 mb-2 underline">Watch my Story</h2>
      <div className="flex justify-center items-center">
        <iframe
          width="400"
          height="350"
          src="https://www.youtube.com/embed/lMnKuDn0Z3Q"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutMe;
