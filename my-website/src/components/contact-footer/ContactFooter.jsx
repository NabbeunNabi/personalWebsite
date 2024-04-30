import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const ContactFooter = () => {
  return (
    <div className="flex flex-col w-4/5 mt-4  p-2 items-center justify-around md:flex-row rounded-t border-4 border-t border-l border-r border-gray-200 shadow-lg shadow-gray-500">
      <button className="font-bold p-2 md:ml-4">
        <a
          className="flex flex-row"
          href="https://github.com/NabbeunNabi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </button>
      <button className="font-bold p-2">
        <a
          href="https://www.linkedin.com/in/william-brammer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </button>
      <button className="font-bold flex flex-row p-2 md:mr-4">
        <MailIcon />

        <a href="mailto:williamedwardbrammer@gmail.com">
          williamedwardbrammer@gmail.com
        </a>
      </button>
    </div>
  );
};

export default ContactFooter;
