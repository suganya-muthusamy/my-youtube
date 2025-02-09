import VideoPlayer from "./VideoPlayer";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { closeMenu } from "../redux/appSlice";
import CommentsConatiner from "./CommentsConatiner";
import CommentsContainer1 from "./CommentsContainer1";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [liveComment, setLiveComment] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      setLiveComment(!liveComment);
    }, 10000);
    return () => {
      clearInterval(i);
    };
  }, [liveComment]);

  useEffect(() => {
    dispatch(closeMenu());
    fetchComments();
  }, []);

  const [comments, setComments] = useState([]);

  const playVideo = useSelector((store) => store?.video?.singleVideo);

  const videoId = playVideo?.id;

  // console.log("........", playVideo, "result");

  const fetchComments = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&videoId=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    // console.log(json);
    setComments(json?.items);
  };
  return (
    <div className="my-14 absolute left-0 mx-10 w-11/12">
      <div className="flex justify-between">
        <VideoPlayer />
        <LiveChat />
      </div>

      <div className="mt-5 w-1/2">
        {liveComment ? (
          <>
            <h1 className="font-bold text-2xl bg-gray-50 w-fit p-2 text-red-600">
              This is Live Data from Youtube API
            </h1>
            <CommentsConatiner comments={comments} />
          </>
        ) : (
          <>
            <h1 className="font-bold text-2xl bg-gray-50 w-fit p-2 text-red-600">
              This is Mock Data with n-level nesting comments
            </h1>
            <CommentsContainer1 />
          </>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
