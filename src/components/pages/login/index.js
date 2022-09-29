import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div className="sm:flex">
      <div className="md:w-1/2 flex flex-col items-center md:items-end md:mr-[69px] mx-[30px] justify-center">
        <div className="md:w-[520px]">
          <h2 className="font-nunito md:text-4xl font-bold text-center mt-10 sm:mt-0">
            Login to your account!
          </h2>

          <Link to="#">
            <div className="border border-solid border-[#B3B3C9] rounded-lg py-4 flex w-[220px] my-10 items-center justify-center cursor-pointer">
              <FcGoogle className="mr-3 text-lg" /> Login with Google
            </div>
          </Link>

          <div className="w-[320px] md:w-[420px] mt-5">
            <form>
              <div className="">
                <p className="font-nunito text-sm font-semibold bg-white text-textcolor px-2.5">
                  Email Address
                </p>
                <input
                  type="email"
                  className="border-solid w-full py-6 border-[#B8B9CE] border-b px-2  placeholder: text-inputcolor placeholder:font-semibold focus:outline-none mb-10"
                  placeholder="Enter Email"
                />
              </div>

              <div className="">
                <p className="font-nunito text-sm font-semibold bg-white text-textcolor px-2.5">
                  Password
                </p>
                <input
                  type="password"
                  className="border-solid w-full py-6 border-[#B8B9CE] border-b px-2  placeholder: text-inputcolor placeholder:font-semibold focus:outline-none"
                  placeholder="Enter Password"
                />
              </div>

              <button className="w-full text-center bg-primary py-5 font-nunito font-semibold text-xl text-white mt-10 rounded-lg">
                Login to Continue
              </button>

              <p className="font-nunito mt-7 w-full font-normal text-sm">
                Don’t have an account ?
                <Link
                  className="font-bold text-[#EA6C00] ml-2"
                  to="/registration"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden sm:block">
        <picture>
          <img
            className="w-full md:h-screen h-full object-cover"
            src="images/loginimg.webp"
            loading="lazy"
            alt="img-one"
          />
        </picture>
      </div>
    </div>
  );
}

export default Login;
