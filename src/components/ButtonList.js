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
    <div className="m-5">
      {buttonList.map((list, i) => {
        return <Button name={list} />;
      })}
    </div>
  );
};

export default ButtonList;
