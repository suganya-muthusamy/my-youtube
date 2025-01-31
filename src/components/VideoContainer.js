import React from "react";
import VideoCard from "./VideoCard";
import useYoutubeVideos from "../custom-hooks/useYoutubeVideos";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playVideo } from "../redux/videoSlice";

const VideoContainer = () => {
  const fetchVideo = useYoutubeVideos();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap gap-7 mx-5 my-10">
      {fetchVideo?.items?.map((item, i) => {
        return (
          <Link
            onClick={() => {
              dispatch(playVideo(item));
            }}
            to={`/watch?v=${item.id}`}
          >
            <VideoCard key={item.id} data={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
