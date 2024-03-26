import "./App.css";
import { useState } from "react";
import StickyContactButton from "./components/stickyContactButton/StickyContactButton";
import FlipCard from "./components/flipcard/FlipCard";
import VideoWithOverlay from "./components/VideoWithOverlay";
import data from "../text.json";

function App() {
  const [mainAnimation, setMainAnimation] = useState(false);

  return (
    <>
      <main className={`main ${mainAnimation ? " active" : ""}`}>
        <div className="z-20">
          <StickyContactButton setMainAnimation={setMainAnimation} />
        </div>

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
      </main>
    </>
  );
}

export default App;
