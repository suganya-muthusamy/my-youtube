import Suggestions from "./Suggestions";
import VideoPlayer from "./VideoPlayer";

const WatchPage = () => {
  return (
    <div className="my-14 absolute">
      <div className="flex">
        <VideoPlayer />
        <Suggestions />
      </div>
    </div>
  );
};

export default WatchPage;
