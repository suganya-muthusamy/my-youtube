import React from "react";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;

  const formatViews = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num;
  };

  return (
    <div className="rounded-lg shadow w-72">
      <img
        alt="thumbnails"
        src={thumbnails.medium.url}
        className="rounded-lg w-full"
      />
      <ul className="p-2">
        <h1
          className="text-gray-800 font-semibold line-clamp-2 cursor-pointer"
          title={title}
        >
          {title.length > 60 ? title.substring(0, 57) + "..." : title}
        </h1>
        <h1 className="text-gray-500 text-sm font-medium">{channelTitle}</h1>
        {statistics && (
          <h1 className="text-gray-500 text-sm font-medium">
            {formatViews(statistics?.viewCount)} Views
          </h1>
        )}
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ data }) => {
  return (
    <div className="border-red-500 border-2 rounded-lg">
      <VideoCard data={data} />
    </div>
  );
};

export default VideoCard;
