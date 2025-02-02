import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Live",
    "Learning",
    "Sports",
    "Fashion",
    "Travel",
    "Comedy",
    "Movies",
    "Shows",
  ];
  return (
    <div className="m-5 flex flex-wrap gap-2 sticky top-14 pb-2 bg-white">
      {buttonList.map((list, i) => {
        return <Button key={i} name={list} />;
      })}
    </div>
  );
};

export default ButtonList;
