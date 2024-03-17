import React, { useEffect, useRef, useState } from "react";

const VideoWithOverlay = ({ videoSrc, text }) => {
  const [typedText, setTypedText] = useState("");
  const [subText, setSubText] = useState("");
  const textRef = useRef();

  useEffect(() => {
    const textToType = text.videoOverlay.split("");
    const textToTypeSubtext = text.videoOverlaySubtext.split("");
    let index = 0;

    setTypedText(textToType[0]);

    const intervalId = setInterval(() => {
      index++;

      if (index < textToType.length) {
        setTypedText((prevText) => prevText + textToType[index]);
      } else {
        clearInterval(intervalId);

        const subTextToType = text.videoOverlaySubtext.split("");
        let subIndex = 0;
        setSubText(textToTypeSubtext[0]);

        const subIntervalId = setInterval(() => {
          subIndex++;
          if (subIndex < subTextToType.length) {
            setSubText((prevSubText) => prevSubText + subTextToType[subIndex]);
          } else {
            clearInterval(subIntervalId);
          }
        }, 200);
      }
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [text.videoOverlay, text.videoOverlaySubtext]);

  return (
    <div className="relative w-full h-full bg-gray-500">
      <video autoPlay muted playsInline className="w-full h-full">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        ref={textRef}
        className="absolute w-full h-full flex flex-col justify-center items-center top-1/2 left-1/2 tracking-wide transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded text-white whitespace-pre-wrap"
      >
        <span className="text-4xl">{typedText}</span>
        <br />
        <span>{subText}</span>
      </div>
    </div>
  );
};

export default VideoWithOverlay;
