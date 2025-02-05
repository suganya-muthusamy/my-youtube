import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-3 py-1 mx-1 bg-button-bg  rounded-lg">{name}</button>
  );
};

export default Button;
