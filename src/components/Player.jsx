import React from "react";
import Iframe from "react-iframe";

const Player = ({ src }) => {
  return (
    <Iframe
      src={src}
      frameborder="0"
      allow="fullscreen;autoplay"
      title="video"
      width="800px"
      height="500px"
      controls
    />
  );
};

export default Player;
