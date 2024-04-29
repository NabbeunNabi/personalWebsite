import "./App.css";
import { useEffect, useState } from "react";
import StickyContactButton from "./components/stickyContactButton/StickyContactButton";
import VideoWithOverlay from "./components/VideoWithOverlay";
import { ChevronUpIcon } from "lucide-react";
import data from "../text.json";
import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/about-me/AboutMe";
import ContactFooter from "./components/contact-footer/ContactFooter";
import WorkExperience from "./components/WorkExperience";

function App() {
  const [mainAnimation, setMainAnimation] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleScroll = () => {
    setScrollPosition(true);
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");
    rootElement.addEventListener("scroll", handleScroll);

    return () => {
      rootElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className={`main  ${mainAnimation ? " active" : ""}`}>
        <div id="top" />

        <Navbar contactOpen={contactOpen} />

        <div className="z-20">
          <StickyContactButton
            setMainAnimation={setMainAnimation}
            setContactOpen={setContactOpen}
            contactOpen={contactOpen}
          />
        </div>
        {scrollPosition ? (
          <a
            href="#top"
            className="flex justify-center items-center z-20 rounded-l fixed right-0 bottom-5 bg-gray-500 bg-opacity-50 h-[5vh] lg:w-[3.5vw]"
          >
            <ChevronUpIcon />
          </a>
        ) : null}
        <div className="flex justify-center items-center h-[50vh] rounded mb-12">
          <VideoWithOverlay
            videoSrc={"/MeAndCocoaLowerRes.mp4"}
            text={data.textVideo}
          />
        </div>
        <div id="about" className="flex justify-center">
          <AboutMe />
        </div>
        <div id="work-exp" className="flex justify-center">
          <WorkExperience />
        </div>
        <div className="flex justify-center">
          <ContactFooter />
        </div>
      </main>
    </>
  );
}

export default App;
