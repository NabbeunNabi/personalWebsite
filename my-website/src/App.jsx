import "./App.css";

import StickyContactButton from "./components/StickyContactButton";
import VideoWithOverlay from "./components/VideoWithOverlay";
import data from "../text.json";

function App() {
  return (
    <>
      <div className="z-20">
        <StickyContactButton />
      </div>

      <div className="flex justify-center items-center h-[50vh] rounded">
        <VideoWithOverlay
          videoSrc={"/MeAndCocoaLowerRes.mp4"}
          text={data.text}
        />
      </div>
    </>
  );
}

export default App;
