import Suggestions from "./Suggestions";
import VideoPlayer from "./VideoPlayer";

const WatchPage = () => {
  return (
    <div className="my-10 absolute">
      <div className="flex justify-between">
        <VideoPlayer />
        <Suggestions />
      </div>
    </div>
  );
};

export default WatchPage;
