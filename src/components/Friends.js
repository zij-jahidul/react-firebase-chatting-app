import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
const Friends = () => {
  return (
    <div className="shadow-sm shadow-black p-5 h-[490px] overflow-y-auto scrollbar-hide rounded-3xl mt-3">
      <div className="flex justify-between">
        <h3 className="font-nunito font-semibold text-xl">
          Friends
        </h3>

        <span>
          <Link to="#">
            <BiDotsVerticalRounded className="font-nunito font-semibold text-[28px] cursor-pointer text-primary" />
          </Link>
        </span>
      </div>


      <div className="flex justify-between items-center border-b border-solid pb-1.5 m-5">
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
            <p className="font-nunito font-normal text-sm">Hi Guys, Wassup!</p>
          </div>
        </div>
        <div>
          <span>Friday, 2.00PM</span>
          {/* <button className="font-nunito font-bold text-lg text-white bg-primary p-1.5 rounded">
            Join
          </button> */}
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-1.5 m-5">
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
            <p className="font-nunito font-normal text-sm">Hi Guys, Wassup!</p>
          </div>
        </div>
        <div>
          <span>Friday, 2.00PM</span>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-1.5 m-5">
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
            <p className="font-nunito font-normal text-sm">Hi Guys, Wassup!</p>
          </div>
        </div>
        <div>
          <span>Friday, 2.00PM</span>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-1.5 m-5">
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
            <p className="font-nunito font-normal text-sm">Hi Guys, Wassup!</p>
          </div>
        </div>
        <div>
          <span>Friday, 2.00PM</span>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-1.5 m-5 last:border-0">
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
            <p className="font-nunito font-normal text-sm">Hi Guys, Wassup!</p>
          </div>
        </div>
        <div>
          <span>Friday, 2.00PM</span>
        </div>
      </div>
    </div>
  );
};

export default Friends;
