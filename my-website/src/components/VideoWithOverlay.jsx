import React, { useEffect, useRef, useState } from "react";

const VideoWithOverlay = ({ videoSrc, text, imageSrc }) => {
  const [typedText, setTypedText] = useState("");
  const [subText, setSubText] = useState("");
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const textRef = useRef();
  const videoRef = useRef(null);

  // Type out text and subtext
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

        let subIndex = 0;
        setSubText(textToTypeSubtext[0]);

        const subIntervalId = setInterval(() => {
          subIndex++;
          if (subIndex < textToTypeSubtext.length) {
            setSubText(
              (prevSubText) => prevSubText + textToTypeSubtext[subIndex]
            );
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

  // Listen for the video ending
  useEffect(() => {
    const handleVideoEnd = () => setIsVideoEnded(true);

    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnd);

      return () => {
        videoRef.current.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [videoRef]);

  return (
    <div className="relative flex justify-center items-center w-full h-full bg-gray-500">
      {!isVideoEnded ? (
        <video ref={videoRef} autoPlay muted playsInline className=" h-full">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="/high-res-will.jpg"
          alt="High-resolution image of Will Brammer"
          className="fade-n h-full"
        />
      )}
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
