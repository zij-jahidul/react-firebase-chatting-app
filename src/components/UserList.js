import React from "react";

const UserList = () => {
  return (
    <div className="shadow-sm shadow-black p-5 h-[490px] overflow-y-auto scrollbar-hide rounded-3xl mt-3">
      <h3 className="font-nunito font-semibold text-xl">Users</h3>
      <div className="flex justify-between items-center border-b border-solid pb-1 m-5">
        <picture>
          <img
            src="images/profileimg.png"
            alt="profile-01"
            className="w-[70px] h-[70px] rounded"
          />
        </picture>
        <div>
          <h3 className="font-nunito font-semibold text-lg">MERN Stack</h3>
          <p className="font-nunito font-semibold text-sm">Be a MERN Warior</p>
        </div>
        <div>
          <button className="font-nunito font-bold text-md text-white bg-primary px-2.5 py-1.5 rounded">
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-2.5 m-5">
        <picture>
          <img
            src="images/profileimg.png"
            alt="profile-01"
            className="w-[70px] h-[70px] rounded"
          />
        </picture>
        <div>
          <h3 className="font-nunito font-semibold text-lg">MERN Stack</h3>
          <p className="font-nunito font-semibold text-sm">Be a MERN Warior</p>
        </div>
        <div>
          <button className="font-nunito font-bold text-md text-white bg-primary px-2.5 py-1.5 rounded">
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-2.5 m-5">
        <picture>
          <img
            src="images/profileimg.png"
            alt="profile-01"
            className="w-[70px] h-[70px] rounded"
          />
        </picture>
        <div>
          <h3 className="font-nunito font-semibold text-lg">MERN Stack</h3>
          <p className="font-nunito font-semibold text-sm">Be a MERN Warior</p>
        </div>
        <div>
          <button className="font-nunito font-bold text-md text-white bg-primary px-2.5 py-1.5 rounded">
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-2.5 m-5">
        <picture>
          <img
            src="images/profileimg.png"
            alt="profile-01"
            className="w-[70px] h-[70px] rounded"
          />
        </picture>
        <div>
          <h3 className="font-nunito font-semibold text-lg">MERN Stack</h3>
          <p className="font-nunito font-semibold text-sm">Be a MERN Warior</p>
        </div>
        <div>
          <button className="font-nunito font-bold text-md text-white bg-primary px-2.5 py-1.5 rounded">
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-solid pb-2.5 m-5 last:border-0">
        <picture>
          <img
            src="images/profileimg.png"
            alt="profile-01"
            className="w-[70px] h-[70px] rounded"
          />
        </picture>
        <div>
          <h3 className="font-nunito font-semibold text-lg">MERN Stack</h3>
          <p className="font-nunito font-semibold text-sm">Be a MERN Warior</p>
        </div>
        <div>
          <button className="font-nunito font-bold text-md text-white bg-primary px-2.5 py-1.5 rounded">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
