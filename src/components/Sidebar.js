import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Sidebar = ({ active }) => {
  const auth = getAuth();
  let navigate = useNavigate();

  let handleSignOut = () => {
    toast("Logout Successfull!");
    signOut(auth).then(() => {
      navigate("/login");
    });
  };


  return (
    <div className="w-full bg-primary p-2.5 xl:py-7 xl:px-11 xl:rounded-3xl overflow-x-hidden flex gap-x-5 justify-center xl:flex-col fixed bottom-0 left-0 xl:static">
      <ToastContainer position="bottom-center" theme="dark" />
      <picture>
        <img
          src={auth.currentUser.photoURL}
          alt="profile-01"
          className="w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] rounded-full mb-2"
        />
      </picture>

      <h4 className="text-white font-bold font-nunito text-sm text-center">
        {auth.currentUser.displayName}
      </h4>


      <div className="flex xl:flex-col items-center text-white gap-x-5 xl:gap-y-16 xl:mt-14">

        <Link to="/">
          <div
            className={`${active === "home" &&
              "relative z-10 after:absolute after:top-0 after:left-[-5px] xl:after:left-0 after:bg-white after:w-[130%] xl:after:w-[242%] after:h-full after:content-[''] text-center flex flex-col items-center after:z-[-1] xl:p-10 after:rounded-2xl before:absolute before:top-0 before:right-[-32px] before:rounded xl:before:bg-primary xl:before:w-[15px] before:h-full before:content-[''] before:shadow-lg shadow-cyan-500/5"
              }`}
          >
            <AiOutlineHome
              className={`${active === "home"
                ? "text-5xl text-primary"
                : "text-5xl text-white"
                }`}
            />

          </div>
        </Link>

        <Link to="/message">
          <div
            className={`${active === "message" &&
              "relative z-10 after:absolute after:top-0 after:left-[-5px] xl:after:left-0 after:bg-white after:w-[130%] xl:after:w-[242%] after:h-full after:content-[''] text-center flex flex-col items-center after:z-[-1] xl:p-10 after:rounded-2xl before:absolute before:top-0 before:right-[-32px] before:rounded xl:before:bg-primary xl:before:w-[15px] before:h-full before:content-[''] before:shadow-lg shadow-cyan-500/5"
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

        <IoMdNotificationsOutline className="text-3xl xl:text-5xl" />
        <FiSettings className="text-3xl xl:text-5xl" />
        <MdLogout onClick={handleSignOut} className="text-3xl xl:text-5xl xl:mt-[105px]" />
      </div >
    </div >
  );
};

export default Sidebar;
