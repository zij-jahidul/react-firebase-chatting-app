import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { getDatabase, ref, set } from "firebase/database";

function Registration() {
  const auth = getAuth();
  const db = getDatabase();
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [password, setPassword] = useState();
  // validation error
  const [emailErr, setEmailErr] = useState();
  const [fullNameErr, setFullNameErr] = useState();
  const [passwordErr, setPasswordErr] = useState();

  // password error for characters
  const [passAZ, setPassAZ] = useState(false);
  const [passAzz, setPassAzz] = useState(false);
  const [pass09, setPass09] = useState(false);
  const [passC, setPassC] = useState(false);
  const [pass8, setPass8] = useState(false);
  // password show icon for state
  const [show, setShow] = useState(false);

  // registration
  let [emailError, setEmailError] = useState("");
  let [success, setSuccess] = useState("");
  let [loading, setLoading] = useState(false);

  // all password is correct
  const [passCorrect, setPassCorrect] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNameErr("");
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
      setPassAzz(true);
      count++;
    } else {
      setPassAzz(false);
    }

    // 0-9 validation
    if (/^(?=.*[0-9])/.test(e.target.value)) {
      setPass09(true);
      count++;
    } else {
      setPass09(false);
    }
    // spacial character validation
    if (/^(?=.*[!@#$%^&*])/.test(e.target.value)) {
      setPassC(true);
      count++;
    } else {
      setPassC(false);
    }
    // 8 character validation
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

    if (!fullName) {
      setFullNameErr("Full Name field is required");
    } else {
      if (fullName.length <= 3 || fullName.length >= 20) {
        setFullNameErr("Your full name must be between 4 to 20 characters.");
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

    if (
      email &&
      password &&
      fullName &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        password
      )
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: "images/avatar.webp",
          })
            .then(() => {
              sendEmailVerification(auth.currentUser)
                .then(() => {
                  setLoading(false);
                  setSuccess(
                    "Registration Successfull. Please varify your email address"
                  );
                  setTimeout(() => {
                    navigate("/login");
                  }, 2000);
                })
                .then(() => {
                  set(ref(db, "users/" + user.user.uid), {
                    name: user.user.displayName,
                    photoURL: user.user.photoURL,
                    email: user.user.email,
                  })
                    .then(() => {
                      setTimeout(() => {
                        navigate("/login");
                      }, 2000);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setEmailError("Email alredy in use");
          }
          setLoading(false);
        });
    }
  };

  return (
    <div className="sm:flex">
      <div className="md:w-1/2 flex flex-col items-center md:items-end md:mr-[69px] mx-[30px] justify-center">
        <div className="md:w-[520px]">
          <h2 className="font-nuncio md:text-4xl font-bold text-center mt-10 sm:mt-0 ">
            Get started with easily register
          </h2>
          <p className="font-nuncio md:text-xl mt-2.5 font-normal text-center md:text-left">
            Free register and you can enjoy it
          </p>

          {emailError && (
            <p className="font-nuncio font-semibold font-sm text-red-500 p-1 rounded mt-2.5">
              {emailError}
            </p>
          )}
          {success && (
            <p className="font-nuncio font-semibold font-sm text-green-500 p-1 rounded mt-2.5">
              {success}
            </p>
          )}

          <Link to="/">
            <div className="border border-solid border-[#B3B3C9] rounded-lg py-4 flex w-[220px] my-10 mx-auto md:mx-0 items-center justify-center cursor-pointer">
              <FcGoogle className="mr-3 text-lg" /> Go to Home
            </div>
          </Link>

          <div className="w-[320px] md:w-[420px] mt-3">
            <div className="relative">
              <p className="font-nuncio text-sm font-semibold bg-white text-textColor px-2.5 absolute top-6 left-8">
                Email Address
              </p>
              <input
                type="email"
                className={`border-solid w-full py-6 border mt-9 rounded-lg px-10 placeholder:text-inputColor placeholder:font-semibold focus:outline-none ${
                  emailErr ? "border-red-500" : "border-[#B8B9CE]"
                }`}
                placeholder="Enter Email"
                onChange={handleEmail}
              />

              {emailErr && (
                <p className="text-red-500 font-nuncio font-normal pl-3 mt-1">
                  {emailErr}
                </p>
              )}
            </div>

            <div className="relative">
              <p className="font-nuncio text-sm font-semibold bg-white text-textColor px-2.5 absolute top-6 left-8">
                Full Name
              </p>
              <input
                type="text"
                className={`border-solid w-full py-6 border mt-9 rounded-lg px-10 placeholder:text-inputColor placeholder:font-semibold focus:outline-none ${
                  fullNameErr ? "border-red-500" : "border-[#B8B9CE]"
                }`}
                placeholder="Enter Full Name"
                onChange={handleFullName}
              />

              {fullNameErr && (
                <p className="text-red-500 font-nuncio font-normal pl-3 mt-1">
                  {fullNameErr}
                </p>
              )}
            </div>

            <div className="relative">
              <p className="font-nuncio text-sm font-semibold bg-white text-textColor px-2.5 absolute top-6 left-8">
                Password
              </p>
              <input
                type={show ? "text" : "password"}
                className={`border-solid w-full py-6 border mt-9 rounded-lg px-10 placeholder:text-inputColor placeholder:font-semibold focus:outline-none ${
                  passwordErr ? "border-red-500" : "border-[#B8B9CE]"
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
                <p className="text-red-500 font-nuncio font-normal pl-3 mt-1">
                  {passwordErr}
                </p>
              )}

              {passCorrect ? (
                <p className="text-green-500 font-nuncio font-normal pl-3 mt-1">
                  Correct & Strong Password
                </p>
              ) : (
                <p className="font-nuncio font-bold text-[12px] md:text-sm pl-3 mt-1">
                  <span className={passAZ ? "text-green-500" : "text-red-500"}>
                    [A-Z]
                  </span>
                  ,
                  <span className={passAzz ? "text-green-500" : "text-red-500"}>
                    [a-z]
                  </span>
                  ,
                  <span className={pass09 ? "text-green-500" : "text-red-500"}>
                    [0-9]
                  </span>
                  ,
                  <span className={passC ? "text-green-500" : "text-red-500"}>
                    [Spcial character]
                  </span>
                  ,
                  <span className={pass8 ? "text-green-500" : "text-red-500"}>
                    [8 characters]
                  </span>
                </p>
              )}
            </div>

            {loading ? (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#5F35F5"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ justifyContent: "center" }}
                visible={true}
              />
            ) : (
              <button
                onClick={handleSubmit}
                className="w-full text-center bg-primary py-5 font-nuncio font-semibold text-xl text-white mt-10 rounded-full"
              >
                Sign up
              </button>
            )}

            <p className="font-nuncio mt-7 w-full font-normal text-sm text-center">
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
