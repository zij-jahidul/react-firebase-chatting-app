import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // validation error
  const [emailErr, setEmailErr] = useState();
  const [passwordErr, setPasswordErr] = useState();

  // password show icon for state
  const [show, setShow] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  // password show handler
  const handlerPasswordShow = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailErr("Email field is required");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailErr("Valid email is required.");
      }
    }

    if (!password) {
      setPasswordErr("Password Field is required.");
    }
  };

  return (
    <div className="sm:flex">
      <div className="md:w-1/2 flex flex-col items-center md:items-end md:mr-[69px] mx-[30px] justify-center">
        <div className="md:w-[520px]">
          <h2 className="font-nunito md:text-4xl font-bold text-center md:text-left mt-10 sm:mt-0">
            Login to your account!
          </h2>

          <Link to="/">
            <div className="border border-solid border-[#B3B3C9] rounded-lg py-4 flex w-[220px] my-10 mx-auto md:mx-0 items-center justify-center cursor-pointer">
              <FcGoogle className="mr-3 text-lg" /> Go to Home
            </div>
          </Link>

          <div className="w-[320px] md:w-[420px] mt-5">
            <div className="mb-10">
              <p className="font-nunito text-sm font-semibold bg-white text-textcolor px-2.5">
                Email Address
              </p>
              <input
                type="email"
                className="border-solid w-full py-3 border-[#B8B9CE] border-b px-2  placeholder: text-inputcolor placeholder:font-semibold focus:outline-none"
                placeholder="Enter Email"
                onChange={handleEmail}
              />

              {emailErr && (
                <p className="text-red-500 font-nunito font-normal my-2 pl-2">
                  {emailErr}
                </p>
              )}
            </div>

            <div className="relative">
              <p className="font-nunito text-sm font-semibold bg-white text-textcolor px-2.5">
                Password
              </p>
              <input
                type={show ? "text" : "password"}
                className="border-solid w-full py-3 border-[#B8B9CE] border-b px-2  placeholder: text-inputcolor placeholder:font-semibold focus:outline-none"
                placeholder="Enter Password"
                onChange={handlePassword}
              />

              {show ? (
                <RiEyeFill
                  onClick={handlerPasswordShow}
                  className="absolute right-5 top-10 cursor-pointer text-lg"
                />
              ) : (
                <RiEyeCloseFill
                  onClick={handlerPasswordShow}
                  className="absolute right-5 top-10 cursor-pointer text-lg"
                />
              )}

              {passwordErr && (
                <p className="text-red-500 font-nunito font-normal my-2 pl-2">
                  {passwordErr}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full text-center bg-primary py-5 font-nunito font-semibold text-xl text-white mt-10 rounded-lg"
            >
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
