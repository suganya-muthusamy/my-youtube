import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // this is called early return
  if (!isMenuOpen) return null;
  return (
    <div
      className="py-5 px-7 bg-gray-100 shadow-lg z-10 sticky top-14  overflow-y-scroll"
      style={{
        width: "240px",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <ul className="">
        <li>
          <Link to="/">Home</Link>
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
      </ul>{" "}
    </div>
  );
};
export default Sidebar;
