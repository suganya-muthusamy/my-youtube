import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-3 py-1 mx-2 bg-gray-100 rounded-lg">{name}</button>
  );
};

export default Button;
