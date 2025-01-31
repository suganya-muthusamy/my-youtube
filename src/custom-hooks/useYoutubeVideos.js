import { useState, useEffect } from "react";
import { YOUTUBE_API_URL } from "../utilis/constant";

const useYoutubeVideos = () => {
  const [fetchVideo, setFetchVideo] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API_URL);
      const data = await response.json();
      setFetchVideo(data);
      console.log(data, "data");
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
  };

  return fetchVideo;
};

export default useYoutubeVideos;
