import React from "react";
import { BiDotsVerticalRounded, BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="relative mt-5">
      <span>
        <BiSearch className="font-nunito font-semibold text-[28px] cursor-pointer absolute top-6 left-3" />
      </span>
      <input
        type="text"
        className="shadow-lg shadow-black-500/50 p-3.5 pl-12 mt-3 w-[540px] rounded-2xl focus:outline-none"
        placeholder="Search"
      />

      <span>
        <BiDotsVerticalRounded className="font-nunito font-semibold text-[28px] cursor-pointer text-primary absolute top-6 right-3" />
      </span>
    </div>
  );
};

export default Search;
