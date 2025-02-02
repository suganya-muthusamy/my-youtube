import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import useYoutubeVideos from "../custom-hooks/useYoutubeVideos";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playVideo } from "../redux/videoSlice";

const VideoContainer = () => {
  const fetchVideo = useYoutubeVideos();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap gap-5 mx-5 my-5">
      {fetchVideo?.items?.length > 0 && (
        <AdVideoCard data={fetchVideo?.items[0]} />
      )}
      {fetchVideo?.items?.map((item, i) => {
        return (
          <Link
            key={item.id}
            onClick={() => {
              dispatch(playVideo(item));
            }}
            to={`/watch?v=${item.id}`}
          >
            <VideoCard data={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
