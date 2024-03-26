const ContactPage = () => {
  return (
    <div>
      <a
        href="https://github.com/NabbeunNabi"
        className="button-fill-l-to-r flex items-center justify-center mb-4 h-2/5 w-4/5 rounded-full"
        target="_blank"
      >
        <img src="/github.svg" alt="the github logo" className="h-2/5 mr-4" />
        <span className="text-4xl">Github</span>
      </a>

      <a
        href="https://www.linkedin.com/in/william-brammer/"
        className="button-fill-l-to-r flex items-center justify-center h-2/5 w-4/5 rounded-full"
        target="_blank"
      >
        <img
          src="/linkedin.svg"
          alt="the linkedIn logo"
          className="h-2/5 mr-4"
        />
        <span className="text-4xl">LinkedIn</span>
      </a>
    </div>
  );
};

export default ContactPage;
