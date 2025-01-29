import React from "react";
import { TiThMenu } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="grid grid-flow-col gap-4 bg-gray-200 px-6">
      <div className="col-span-1 flex items-center">
        <span className="text-xl">
          <TiThMenu />
        </span>
        <img
          className="h-14 mx-4"
          alt="logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
        />
      </div>
      <div className="col-span-10 flex justify-center items-center">
        <input
          className="w-1/2 py-2 px-4 border border-gray-700 rounded-tl-full rounded-bl-full focus:outline-none"
          type="text"
          placeholder="search"
        />
        <button className="text-2xl font-lighter py-2 px-4 border border-gray-700  border-l-0  rounded-tr-full rounded-br-full">
          <CiSearch />
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <span className="text-4xl">
          <FaUserCircle />
        </span>
      </div>
    </div>
  );
};

export default Header;
