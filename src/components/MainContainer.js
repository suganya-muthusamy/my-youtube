import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="relative">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
