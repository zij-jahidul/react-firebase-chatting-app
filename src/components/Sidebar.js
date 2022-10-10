import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ active }) => {
  return (
    <div className="w-full bg-primary py-9 px-11 rounded-3xl overflow-x-hidden">
      <picture>
        <img
          src="images/profileimg.png"
          alt="profile-01"
          className="w-[100px] h-[100px] rounded"
        />
      </picture>
      <div className="flex flex-col items-center text-white gap-y-16 mt-20">
        <Link to="/">
          <div
            className={`${active === "home" &&
              "relative z-10  after:absolute after:top-0 after:left-0 after:bg-white after:w-[242%] after:h-full after:content-[''] text-center flex flex-col items-center after:z-[-1] p-10 after:rounded-2xl before:absolute before:top-0 before:right-[-32px] before:rounded before:bg-primary before:w-[15px] before:h-full before:content-[''] before:shadow-lg shadow-cyan-500/50"
              }`}
          >

            <AiOutlineHome
              className={`${active === "home" ? "text-5xl text-primary" : "text-5xl text-white"
                }`}
            />

          </div>
        </Link>

        <Link to="/message">
          <div
            className={`${active === "message" &&
              "relative z-10  after:absolute after:top-0 after:left-0 after:bg-white after:w-[242%] after:h-full after:content-[''] text-center flex flex-col items-center after:z-[-1] p-10 after:rounded-2xl before:absolute before:top-0 before:right-[-32px] before:rounded before:bg-primary before:w-[15px] before:h-full before:content-[''] before:shadow-lg shadow-cyan-500/50"
              }`}
          >
            <FiMessageSquare
              className={`${active === "message"
                ? "text-5xl text-primary"
                : "text-5xl text-white"
                }`}
            />
          </div>
        </Link>

        <IoMdNotificationsOutline className="text-5xl" />
        <FiSettings className="text-5xl" />
        <MdLogout className="text-5xl mt-32" />
      </div>
    </div>
  );
};

export default Sidebar;