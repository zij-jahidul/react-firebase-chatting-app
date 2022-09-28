import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex">
      <div className="main-div">
        <div className="w-[520px]">
          <h2 className="heading-title">Login to your account!</h2>

          <div className="w-[420px] mt-3">
            <form>
              <div className="relative">
                <p className="input-label">Email Address</p>
                <input
                  type="email"
                  className="input-reg "
                  placeholder="Enter Email"
                />
              </div>

              <div className="relative">
                <p className="input-label">Password</p>
                <input
                  type="password"
                  className="input-reg placeholder:text-inputcolor placeholder:font-semibold focus:outline-none"
                  placeholder="Enter Password"
                />
              </div>

              <button className="btn rounded-lg">Login to Continue</button>

              <p className="footer-para">
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
      <div className="w-1/2">
        <picture>
          <img
            className="w-full h-screen object-cover"
            src="images/registrationimg.webp"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
}

export default Login;
