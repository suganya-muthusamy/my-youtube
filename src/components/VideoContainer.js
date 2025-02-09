import React, { useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import useYoutubeVideos from "../custom-hooks/useYoutubeVideos";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { playVideo } from "../redux/videoSlice";

const VideoContainer = () => {
  const videos = useYoutubeVideos();

  const fetchVideo = useSelector((store) => store?.video?.videos);
  // console.log(fetchVideo, "fetchVideo");

  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap gap-5 mx-5 my-5">
      {fetchVideo?.length > 0 && (
        <Link to={`/watch?v=${fetchVideo[0].id}`}>
          <AdVideoCard data={fetchVideo[0]} />
        </Link>
      )}

      {fetchVideo?.map((item, i) => {
        return (
          <Link
            key={item?.id}
            onClick={() => {
              dispatch(playVideo(item));
            }}
            to={`/watch?v=${item?.id?.videoId ? item?.id?.videoId : item?.id}`}
          >
            <VideoCard data={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
