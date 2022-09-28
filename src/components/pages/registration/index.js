import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="flex">
      <div className="main-div">
        <div className="w-[520px]">
          <h2 className="heading-title">Get started with easily register</h2>
          <p className="heading-para">Free register and you can enjoy it</p>

          <div className="w-[420px] mt-3">
            <form>
              <div className="relative">
                <p className="input-label input-label-possition">
                  Email Address
                </p>
                <input
                  type="email"
                  className="input-reg custom-css-style"
                  placeholder="Enter Email"
                />
              </div>

              <div className="relative">
                <p className="input-label input-label-possition">Full Name</p>
                <input
                  type="email"
                  className="input-reg custom-css-style"
                  placeholder="Enter Full Name"
                />
              </div>

              <div className="relative">
                <p className="input-label input-label-possition">Password</p>
                <input
                  type="password"
                  className="input-reg custom-css-style"
                  placeholder="Enter Password"
                />
              </div>

              <button className="btn rounded-full">Sign up</button>

              <p className="footer-para text-center">
                Already have an account ?
                <Link className="btn-link" to="/login">
                  Sign In
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
            alt="img-one"
          />
        </picture>
      </div>
    </div>
  );
}

export default Registration;
