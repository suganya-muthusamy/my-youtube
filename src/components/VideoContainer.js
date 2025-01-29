import React from "react";
import VideoCard from "./VideoCard";
import useYoutubeVideos from "../custom-hooks/useYoutubeVideos";

const VideoContainer = () => {
  const fetchVideo = useYoutubeVideos();
  console.log(fetchVideo.items[0]);

  return (
    <div className="flex flex-wrap gap-7">
      <VideoCard data={fetchVideo.items[0]} />
    </div>
  );
};

export default VideoContainer;
