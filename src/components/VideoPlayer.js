import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoPlayer = () => {
  const [searchparams] = useSearchParams();
  // console.log(searchparams.get("v"));

  const playVideo = useSelector((store) => store?.video?.singleVideo);
  // console.log(playVideo, "result");

  const { snippet, statistics } = playVideo;
  const { channelTitle, title, thumbnails } = snippet;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="mx-20">
      <iframe
        width={850}
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
        <h1>{channelTitle}</h1>
      </div>
    </div>
  );
};

export default VideoPlayer;
