import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
const BlockUser = () => {
  return (
    <div className="shadow-lg shadow-black-500/50 p-5 h-[427px] overflow-y-auto scrollbar-hide rounded-3xl mt-5">
      <div className="flex justify-between">
        <h3 className="font-nunito font-semibold text-xl">
          Block User
        </h3>

        <span>
          <Link to="#">
            <BiDotsVerticalRounded className="font-nunito font-semibold text-[28px] cursor-pointer text-primary" />
          </Link>
        </span>
      </div>


      <div className="flex justify-between items-center border-b border-solid pb-1 m-5">
        <div className="flex items-center gap-5">
          <picture>
            <img
              src="images/profileimg.png"
              alt="profile-01"
              className="w-[70px] h-[70px] rounded"
            />
          </picture>
          <div>
            <h3 className="font-nunito font-bold text-lg">Friends Reunion</h3>
            <p className="font-nunito font-normal text-sm text-[#4D4D4D]">Hi Guys, Wassup!</p>
          </div>
        </div>
        <div>
          <button className="font-nunito font-bold text-md text-white bg-primary p-1.5 rounded">
            Unblock
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-1 m-5">
        <div className="flex items-center gap-5">
          <picture>
            <img
              src="images/profileimg.png"
              alt="profile-01"
              className="w-[70px] h-[70px] rounded"
            />
          </picture>
          <div>
            <h3 className="font-nunito font-bold text-lg">Friends Reunion</h3>
            <p className="font-nunito font-normal text-sm text-[#4D4D4D]">Hi Guys, Wassup!</p>
          </div>
        </div>
        <div>
          <button className="font-nunito font-bold text-md text-white bg-primary p-1.5 rounded">
            Unblock
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-1 m-5">
        <div className="flex items-center gap-5">
          <picture>
            <img
              src="images/profileimg.png"
              alt="profile-01"
              className="w-[70px] h-[70px] rounded"
            />
          </picture>
          <div>
            <h3 className="font-nunito font-bold text-lg">Friends Reunion</h3>
            <p className="font-nunito font-normal text-sm text-[#4D4D4D]">Hi Guys, Wassup!</p>
          </div>
        </div>
        <div>
          <button className="font-nunito font-bold text-md text-white bg-primary p-1.5 rounded">
            Unblock
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-1 m-5">
        <div className="flex items-center gap-5">
          <picture>
            <img
              src="images/profileimg.png"
              alt="profile-01"
              className="w-[70px] h-[70px] rounded"
            />
          </picture>
          <div>
            <h3 className="font-nunito font-bold text-lg">Friends Reunion</h3>
            <p className="font-nunito font-normal text-sm text-[#4D4D4D]">Hi Guys, Wassup!</p>
          </div>
        </div>
        <div>
          <button className="font-nunito font-bold text-md text-white bg-primary p-1.5 rounded">
            Unblock
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-1 m-5 last:border-0">
        <div className="flex items-center gap-5">
          <picture>
            <img
              src="images/profileimg.png"
              alt="profile-01"
              className="w-[70px] h-[70px] rounded"
            />
          </picture>
          <div>
            <h3 className="font-nunito font-bold text-lg">Friends Reunion</h3>
            <p className="font-nunito font-normal text-sm text-[#4D4D4D]">Hi Guys, Wassup!</p>
          </div>
        </div>
        <div>
          <button className="font-nunito font-bold text-md text-white bg-primary p-1.5 rounded">
            Unblock
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockUser;
