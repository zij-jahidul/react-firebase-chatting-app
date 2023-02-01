import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../../slices/userSlice";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const auth = getAuth();
  const dispatch = useDispatch();
  // push route
  let navigate = useNavigate();
  // google login
  const provider = new GoogleAuthProvider();
  // state management
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // error, success, loading
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  // validation error
  const [emailErr, setEmailErr] = useState();
  const [passwordErr, setPasswordErr] = useState();
  // password show icon for state
  const [show, setShow] = useState(false);
  const [forgetshow, setForgetShow] = useState(false);
  // forgetpassword
  let [forgotEmail, setForgotEmail] = useState("");

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

  const setForgetPassShow = () => {
    setForgetShow(!forgetshow);
  };

  // google login handler
  let handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/");
    });
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

    if (
      email &&
      password &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        password
      )
    ) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          toast("Login Successfull! Wait for redirect");
          dispatch(userLoginInfo(user.user));
          localStorage.setItem("userInfo", JSON.stringify(user));

          setTimeout(() => {
            setLoading(false);
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode.includes("auth/wrong-password")) {
            setError("Password Not match");
          }
          if (errorCode.includes("auth/user-not-found")) {
            setError("Email not match");
          }
        });
    }
  };

  let handleForgotPassword = () => {
    sendPasswordResetEmail(auth, forgotEmail).then(() => {
      toast("Please Check Your Email");
      setTimeout(() => {
        setShow(false);
      }, 2000);
    });
  };

  return (
    <div className="sm:flex">
      <div className="md:w-1/2 flex flex-col items-center md:items-end md:mr-[69px] mx-[30px] justify-center">
        <ToastContainer position="bottom-center" theme="dark" />
        <div className="md:w-[520px]">
          {error && (
            <p className="font-nuncio font-semibold font-sm text-red-500 p-1 rounded mt-2.5">
              {error}
            </p>
          )}
          <h2 className="font-nuncio md:text-4xl font-bold text-center md:text-left mt-10 sm:mt-0">
            Login to your account!
          </h2>

          <div
            onClick={handleGoogleLogin}
            className="border border-solid border-[#B3B3C9] rounded-lg py-4 flex w-[220px] my-10 mx-auto md:mx-0 items-center justify-center cursor-pointer"
          >
            <FcGoogle className="mr-3 text-lg" /> Login with Google
          </div>

          <div className="w-[320px] md:w-[420px] mt-5">
            <div className="mb-10">
              <p className="font-nuncio text-sm font-semibold bg-white text-textColor px-2.5">
                Email Address
              </p>
              <input
                type="email"
                className="border-solid w-full py-3 border-[#B8B9CE] border-b px-2  placeholder: text-inputColor placeholder:font-semibold focus:outline-none"
                placeholder="Enter Email"
                onChange={handleEmail}
              />

              {emailErr && (
                <p className="text-red-500 font-nuncio font-normal my-2 pl-2">
                  {emailErr}
                </p>
              )}
            </div>

            <div className="relative">
              <p className="font-nuncio text-sm font-semibold bg-white text-textColor px-2.5">
                Password
              </p>
              <input
                type={show ? "text" : "password"}
                className="border-solid w-full py-3 border-[#B8B9CE] border-b px-2  placeholder: text-inputColor placeholder:font-semibold focus:outline-none"
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
                <p className="text-red-500 font-nuncio font-normal my-2 pl-2">
                  {passwordErr}
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
                className="w-full text-center bg-primary py-5 font-nuncio font-semibold text-xl text-white mt-10 rounded-lg"
              >
                Login to Continue
              </button>
            )}

            <p className="font-nuncio mt-7 w-full font-normal text-sm">
              Don’t have an account ?
              <Link
                className="font-bold text-[#EA6C00] ml-2"
                to="/registration"
              >
                Sign Up
              </Link>
            </p>

            <p className="font-nuncio font-regular text-xs mt-9 w-full text-center">
              <button
                onClick={() => setForgetPassShow(!forgetshow)}
                className="font-bold text-primary"
                to="/forgotpassword"
              >
                Forgot Password?
              </button>
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

      {/* ForgetPassword Modal */}
      {forgetshow && (
        <div className="w-full h-screen bg-primary flex justify-center items-center fixed">
          <div className="p-10 bg-white rounded">
            <h1 className="text-5xl text-primary font-bold font-nuncio">
              Forgot Password
            </h1>
            <div className="relative">
              <input
                className="border border-solid border-black w-full rounded-lg px-14 py-6 sml:p-4 md:!px-14 md:!py-6 mt-9 sml:mt-4 md:!mt-9"
                placeholder="Email Address"
                onChange={(e) => setForgotEmail(e.target.value)}
              />
            </div>
            <button
              onClick={handleForgotPassword}
              className=" text-center bg-primary rounded-[5px] p-5 font-nuncio font-semibold text-xl text-white mt-5 sml:mt-4 md:!mt-5"
            >
              Change Password
            </button>
            <button
              onClick={() => setForgetPassShow(false)}
              className=" text-center ml-5 bg-[#EA6C00] rounded-[5px] p-5 font-nuncio font-semibold text-xl text-white mt-5 sml:mt-4 md:!mt-5"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
