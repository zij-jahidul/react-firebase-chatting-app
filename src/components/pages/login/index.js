import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

function Login() {
  return (
    <div className="flex">
      <div className="main-div">
        <div className="w-[520px]">
          <h2 className="heading-title">Login to your account!</h2>

            <Link to='#'>
              <div className="google-btn">
                    <FcGoogle className="mr-3 text-lg" /> Login with Google
              </div>
            </Link>

          <div className="w-[370px] mt-5">
            <form>
              <div className="">
                <p className="input-label">Email Address</p>
                <input
                  type="email"
                  className="input-login custom-css-style mb-10"
                  placeholder="Enter Email"
                />
              </div>

              <div className="">
                <p className="input-label">Password</p>
                <input
                  type="password"
                  className="input-login custom-css-style"
                  placeholder="Enter Password"
                />
              </div>

              <button className="btn rounded-lg">Login to Continue</button>

              <p className="footer-para">
                Don’t have an account ?
                <Link className="btn-link" to="/registration">
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
