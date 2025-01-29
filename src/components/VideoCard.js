import React from "react";

const VideoCard = ({ data }) => {
  const { id, statistics, snippet } = data;

  return (
    <div>
      <h1>{id}</h1>
      <h1>{statistics.viewCount}</h1>
      <h1>{snippet.channelTitle}</h1>
    </div>
  );
};

export default VideoCard;
