import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utilis/constant";
import { IoCloseOutline } from "react-icons/io5";
import { cacheResults } from "../redux/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search.result);
  // console.log("searchCache", searchCache);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    // Debouncing
    // after 200ms, it will make an API call,
    // after 200ms the new timer will be generated again
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchResult(searchCache[searchText]);
      } else {
        handleSearch();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const handleSearch = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchText);
    const json = await data.json();
    setSearchResult(json[1]);
    setSearchText(searchText);
    dispatch(
      cacheResults({
        [searchText]: json[1],
      })
    );
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
          <div className="w-7/12 py-2 px-4 border border-gray-700 rounded-tl-full rounded-bl-full flex justify-between items-center">
            {showResult && (
              <span className="px-2 text-xl">
                <CiSearch />
              </span>
            )}
            <form className="w-full">
              <input
                onFocus={() => {
                  setShowResult(true);
                }}
                onBlur={() => {
                  setShowResult(false);
                }}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setShowResult(true);
                }}
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
                className="cursor-pointer text-xl"
              >
                <IoCloseOutline />
              </span>
            )}
          </div>
          {searchText && showResult && searchResult.length > 0 && (
            <div className="bg-gray-100 w-5/12 absolute top-16 rounded-lg">
              <ul className="w-full p-5">
                {searchText &&
                  searchResult &&
                  searchResult.map((result, i) => {
                    return (
                      <div className="flex items-center">
                        <span className="cursor-pointer text-xl">
                          <CiSearch />
                        </span>
                        <li key={i} className="m-2 cursor-pointer ">
                          {result}
                        </li>
                      </div>
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
