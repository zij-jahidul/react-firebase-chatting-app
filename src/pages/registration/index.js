import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   updateProfile,
// } from "firebase/auth";

function Registration() {
  // const auth = getAuth();
  const [email, setEmail] = useState();
  const [fullname, setFullname] = useState();
  const [password, setPassword] = useState();
  // validation error
  const [emailErr, setEmailErr] = useState();
  const [fullnameErr, setFullnameErr] = useState();
  const [passwordErr, setPasswordErr] = useState();

  // password error for charecters
  const [passAZ, setPassAZ] = useState(false);
  const [passazz, setPassazz] = useState(false);
  const [pass09, setPass09] = useState(false);
  const [passsc, setPasssc] = useState(false);
  const [pass8, setPass8] = useState(false);
  // password show icon for state
  const [show, setShow] = useState(false);



  // all password is correct
  const [passCorrect, setPassCorrect] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handleFullName = (e) => {
    setFullname(e.target.value);
    setFullnameErr("");
  };

  const handlePassword = (e) => {
    let count = 0;
    // A-Z validation
    if (/^(?=.*[A-Z])/.test(e.target.value)) {
      setPassAZ(true);
      count++;
    } else {
      setPassAZ(false);
    }

    // a-z validation
    if (/^(?=.*[a-z])/.test(e.target.value)) {
      setPassazz(true);
      count++;
    } else {
      setPassazz(false);
    }

    // 0-9 validation
    if (/^(?=.*[0-9])/.test(e.target.value)) {
      setPass09(true);
      count++;
    } else {
      setPass09(false);
    }
    // spacial charecter validation
    if (/^(?=.*[!@#$%^&*])/.test(e.target.value)) {
      setPasssc(true);
      count++;
    } else {
      setPasssc(false);
    }
    // 8 charecter validtion
    if (/^(?=.{8,})/.test(e.target.value)) {
      setPass8(true);
      count++;
    } else {
      setPass8(false);
    }

    // Correct Password
    if (count === 5) {
      setPassCorrect(true);
      // password save from this;
    } else {
      setPassCorrect(false);
    }
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
      if (!/^\w+([\.-]?\=w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailErr("Valid email is required.");
      }
    }

    if (!fullname) {
      setFullnameErr("Full Name field is required");
    } else {
      if (fullname.length <= 3 || fullname.length >= 20) {
        setFullnameErr("Your full name must be between 4 to 20 characters.");
      }
    }

    if (!password) {
      setPasswordErr("Password Field is required.");
    } else {
      if (!/^(?=.*[A-Z])/.test(password)) {
        setPasswordErr("Password must be 1 capital letter.");
      } else if (!/^(?=.*[a-z])/.test(password)) {
        setPasswordErr("Password must be 1 small letter.");
      } else if (!/^(?=.*[0-9])/.test(password)) {
        setPasswordErr("Password must be 1 digit.");
      } else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
        setPasswordErr("Password must be 1 special character.");
      } else if (!/^(?=.{8,})/.test(password)) {
        setPasswordErr("Password must be eight characters or longer.");
      } else {
        console.log("Correct Password");
      }
    }




  };

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

          <Link to="/">
            <div className="border border-solid border-[#B3B3C9] rounded-lg py-4 flex w-[220px] my-10 mx-auto md:mx-0 items-center justify-center cursor-pointer">
              <FcGoogle className="mr-3 text-lg" /> Go to Home
            </div>
          </Link>

          <div className="w-[320px] md:w-[420px] mt-3">
            <div className="relative">
              <p className="font-nunito text-sm font-semibold bg-white text-textcolor px-2.5 absolute top-6 left-8">
                Email Address
              </p>
              <input
                type="email"
                className={`border-solid w-full py-6 border mt-9 rounded-lg px-10 placeholder:text-inputcolor placeholder:font-semibold focus:outline-none ${emailErr ? "border-red-500" : "border-[#B8B9CE]"
                  }`}
                placeholder="Enter Email"
                onChange={handleEmail}
              />

              {emailErr && (
                <p className="text-red-500 font-nunito font-normal pl-3 mt-1">
                  {emailErr}
                </p>
              )}
            </div>

            <div className="relative">
              <p className="font-nunito text-sm font-semibold bg-white text-textcolor px-2.5 absolute top-6 left-8">
                Full Name
              </p>
              <input
                type="email"
                className={`border-solid w-full py-6 border mt-9 rounded-lg px-10 placeholder:text-inputcolor placeholder:font-semibold focus:outline-none ${fullnameErr ? "border-red-500" : "border-[#B8B9CE]"
                  }`}
                placeholder="Enter Full Name"
                onChange={handleFullName}
              />

              {fullnameErr && (
                <p className="text-red-500 font-nunito font-normal pl-3 mt-1">
                  {fullnameErr}
                </p>
              )}
            </div>

            <div className="relative">
              <p className="font-nunito text-sm font-semibold bg-white text-textcolor px-2.5 absolute top-6 left-8">
                Password
              </p>
              <input
                type={show ? "text" : "password"}
                className={`border-solid w-full py-6 border mt-9 rounded-lg px-10 placeholder:text-inputcolor placeholder:font-semibold focus:outline-none ${passwordErr ? "border-red-500" : "border-[#B8B9CE]"
                  }`}
                placeholder="Enter Password"
                onChange={handlePassword}
              />
              {show ? (
                <RiEyeFill
                  onClick={handlerPasswordShow}
                  className="absolute right-5 top-16 cursor-pointer text-lg"
                />
              ) : (
                <RiEyeCloseFill
                  onClick={handlerPasswordShow}
                  className="absolute right-5 top-16 cursor-pointer text-lg"
                />
              )}

              {passwordErr && (
                <p className="text-red-500 font-nunito font-normal pl-3 mt-1">
                  {passwordErr}
                </p>
              )}

              {passCorrect ? (
                <p className="text-green-500 font-nunito font-normal pl-3 mt-1">
                  Correct & Strong Password
                </p>
              ) : (
                <p className="font-nunito font-bold text-[12px] md:text-sm pl-3 mt-1">
                  <span className={passAZ ? "text-green-500" : "text-red-500"}>
                    [A-Z]
                  </span>{" "}
                  ,
                  <span className={passazz ? "text-green-500" : "text-red-500"}>
                    [a-z]
                  </span>{" "}
                  ,
                  <span className={pass09 ? "text-green-500" : "text-red-500"}>
                    [0-9]
                  </span>{" "}
                  ,
                  <span className={passsc ? "text-green-500" : "text-red-500"}>
                    [Spcial character]
                  </span>{" "}
                  ,
                  <span className={pass8 ? "text-green-500" : "text-red-500"}>
                    [8 characters]
                  </span>{" "}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full text-center bg-primary py-5 font-nunito font-semibold text-xl text-white mt-10 rounded-full"
            >
              Sign up
            </button>

            <p className="font-nunito mt-7 w-full font-normal text-sm text-center">
              Already have an account ?
              <Link className="font-bold text-[#EA6C00] ml-2" to="/login">
                Sign In
              </Link>
            </p>
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
