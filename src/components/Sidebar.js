import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // this is called early return
  if (!isMenuOpen) return;
  return (
    <div className="py-5 px-7 bg-gray-100 shadow-lg col-span-1">
      <ul>
        <li>
          <a href="https://www.youtube.com/">Home</a>
        </li>
        <li>
          <a href="https://www.youtube.com/feed/trending">Shorts</a>
        </li>
        <li>
          <a href="https://www.youtube.com/feed/subscriptions">Videos</a>
        </li>
        <li>
          <a href="https://www.youtube.com/feed/library">Live</a>
        </li>
      </ul>
      <h1 className="font-bold mt-4">Subscriptions</h1>
      <ul>
        <li>
          <a href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">
            Music
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw">
            Sports
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCOpNcN46UbXVtpKMrmU4Abg">
            Gaming
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCz97F7dMxBNOfGYu3rx8aCw">
            Movies
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
