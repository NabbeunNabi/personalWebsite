import "./App.css";
import { useEffect, useState } from "react";
import StickyContactButton from "./components/stickyContactButton/StickyContactButton";
import FlipCard from "./components/flipcard/FlipCard";
import VideoWithOverlay from "./components/VideoWithOverlay";
import { ChevronUpIcon } from "lucide-react";
import data from "../text.json";

function App() {
  const [mainAnimation, setMainAnimation] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

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
      <main className={`main ${mainAnimation ? " active" : ""}`}>
        <div id="top" />
        <div className="z-20">
          <StickyContactButton setMainAnimation={setMainAnimation} />
        </div>
        {scrollPosition ? (
          <a
            href="#top"
            className="flex justify-center items-center z-20 rounded-l fixed right-0 bottom-5 bg-gray-500 bg-opacity-50 h-[5vh] w-[3.5vw]"
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
        <div>
          <FlipCard
            textFront={data.textFlip.cardOne.front}
            textBack={data.textFlip.cardOne.back}
          ></FlipCard>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>hi</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>hi</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>hi</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>hi</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>hi</p>
      </main>
    </>
  );
}

export default App;
