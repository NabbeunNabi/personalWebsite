import React, { useState, useEffect } from "react";

const FadeInImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image(); // Create a new image to preload
    img.src = src; // Set the source
    img.onload = () => setIsLoaded(true); // When loaded, update state
  }, [src]);

  return (
    <div className={`image-wrapper ${isLoaded ? "is-loaded" : "loading"}`}>
      {" "}
      <img
        src={src}
        alt={alt}
        className={`fade-in ${isLoaded ? "is-loaded" : ""}`} // Apply fade-in when loaded
      />
    </div>
  );
};

export default FadeInImage;
