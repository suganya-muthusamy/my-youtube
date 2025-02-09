import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CommentsConatiner from "./CommentsConatiner";
import { FaUserCircle } from "react-icons/fa";

const VideoPlayer = () => {
  const [searchparams] = useSearchParams();
  // console.log("searchparams", searchparams);

  // console.log(searchparams.get("v"));

  const [comments, setComments] = useState([]);

  const playVideo = useSelector((store) => store?.video?.singleVideo);
  // console.log(playVideo, "result");

  const { snippet, statistics } = playVideo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-8/12">
      <iframe
        width={950}
        height={450}
        className="rounded-2xl"
        src={`https://www.youtube.com/embed/${searchparams.get(
          "v"
        )}?si=rcuIRK1orGAN8WKn`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="my-2">
        <h1 className="font-bold text-lg">{title}</h1>
        <div className="flex">
          <span className="text-3xl">
            <FaUserCircle />
          </span>
          <h1>{channelTitle}</h1>
          <button className="rounded-full px-4 py-2 bg-gray-500 text-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
