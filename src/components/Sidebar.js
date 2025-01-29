import React from "react";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.youtube.com/">Home</a>
        </li>
        <li>
          <a href="https://www.youtube.com/feed/trending">Trending</a>
        </li>
        <li>
          <a href="https://www.youtube.com/feed/subscriptions">Subscriptions</a>
        </li>
        <li>
          <a href="https://www.youtube.com/feed/library">Library</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
