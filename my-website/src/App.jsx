import "./App.css";

import StickyContactButton from "./components/StickyContactButton";
import FlipCard from "./components/flipcard/FlipCard";
import VideoWithOverlay from "./components/VideoWithOverlay";
import data from "../text.json";

function App() {
  return (
    <>
      <div className="z-20">
        <StickyContactButton />
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
    </>
  );
}

export default App;
