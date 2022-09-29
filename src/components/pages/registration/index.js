import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="sm:flex">
      <div className="md:w-1/2 flex flex-col items-center md:items-end md:mr-[69px] mx-[30px] justify-center">
        <div className="md:w-[520px]">
          <h2 className="font-nunito md:text-4xl font-bold text-center mt-10 sm:mt-0 ">
            Get started with easily register
          </h2>
          <p className="font-nunito md:text-xl mt-2.5 font-normal text-center md:text-left">
            Free register and you can enjoy it
          </p>

          <div className="w-[320px] md:w-[420px] mt-3">
            <form>
              <div className="relative">
                <p className="font-nunito text-sm font-semibold bg-white text-textcolor px-2.5 absolute top-6 left-8">
                  Email Address
                </p>
                <input
                  type="email"
                  className="border-solid w-full py-6 border-[#B8B9CE] border mt-9 rounded-lg px-10 placeholder:text-inputcolor placeholder:font-semibold focus:outline-none"
                  placeholder="Enter Email"
                />
              </div>

              <div className="relative">
                <p className="font-nunito text-sm font-semibold bg-white text-textcolor px-2.5 absolute top-6 left-8">
                  Full Name
                </p>
                <input
                  type="email"
                  className="border-solid w-full py-6 border-[#B8B9CE] border mt-9 rounded-lg px-10 placeholder:text-inputcolor placeholder:font-semibold focus:outline-none"
                  placeholder="Enter Full Name"
                />
              </div>

              <div className="relative">
                <p className="font-nunito text-sm font-semibold bg-white text-textcolor px-2.5 absolute top-6 left-8">
                  Password
                </p>
                <input
                  type="password"
                  className="border-solid w-full py-6 border-[#B8B9CE] border mt-9 rounded-lg px-10 placeholder:text-inputcolor placeholder:font-semibold focus:outline-none"
                  placeholder="Enter Password"
                />
              </div>

              <button className="w-full text-center bg-primary py-5 font-nunito font-semibold text-xl text-white mt-10 rounded-full">
                Sign up
              </button>

              <p className="font-nunito mt-7 w-full font-normal text-sm text-center">
                Already have an account ?
                <Link className="font-bold text-[#EA6C00] ml-2" to="/login">
                  Sign In
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
            src="images/registrationimg.webp"
            loading="lazy"
            alt="img-one"
          />
        </picture>
      </div>
    </div>
  );
}

export default Registration;
