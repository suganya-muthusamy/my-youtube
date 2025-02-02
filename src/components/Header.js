import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utilis/constant";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = async (e, searchText) => {
    setSearchText(e.target.value);
    const fetchSuggestions = await fetch(
      YOUTUBE_SEARCH_SUGGESTIONS_API + searchText
    );

    const data = await fetchSuggestions.json();
    setSearchResult(data);
  };

  return (
    <div className="grid grid-flow-col gap-4 bg-white px-4 sticky top-0 z-20 ">
      <div className="col-span-1 flex items-center">
        <span
          onClick={handleMenu}
          className="text-xl cursor-pointer p-2  hover:bg-gray-300 rounded-full transition-all ease-in-out delay-75"
        >
          <TiThMenu />
        </span>
        <img
          className="h-14 mx-4"
          alt="logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
        />
      </div>
      <div className="col-span-10 flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="w-7/12 py-2 px-4 border border-gray-700 rounded-tl-full rounded-bl-full flex justify-between">
            <form className="w-full">
              <input
                onChange={(e) => handleSearch(e, searchText)}
                value={searchText}
                className="w-full focus:outline-none"
                type="text"
                placeholder="search"
              />
            </form>
            {searchText && (
              <span
                onClick={() => {
                  setSearchText("");
                }}
                className="cursor-pointer"
              >
                close
              </span>
            )}
          </div>
          {searchText && searchResult.length > 0 && (
            <div className="bg-gray-100 w-5/12 absolute top-16 rounded-lg">
              <ul className="w-full p-5">
                {searchText &&
                  searchResult[1] &&
                  searchResult[1].map((result, i) => {
                    return (
                      <li key={i} className="my-2">
                        {result}
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
          <button className="text-2xl font-lighter py-2 px-4 border border-gray-700  border-l-0  rounded-tr-full rounded-br-full">
            <CiSearch />
          </button>
        </div>
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
