import React from "react";
import landingLogo from "../img/landing-logo.png";
import { Link } from "react-router-dom";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container">
            <div className="row content-center">
               <div className="col-12">
                  <img src={landingLogo} alt="" />
               </div>
            </div>

            <div className="row card-index">
               <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <div id="landingCard" className="card mb-5">
                     <div className="card-body landing-text">
                        <h2 style={{ color: "white" }} className="card-title">
                           Nice to meet you
                        </h2>
                        <Link to="sign-up" className="text-success mb-4">
                           Not a member?
                        </Link>

                        <div id="form-toggle">
                           <label className="text-muted" for="email">
                              Email Address
                           </label>
                           <input
                              className="form-control mb-3"
                              type="email"
                              id="emailCreate"
                              name="email"
                           />

                           <p className="text-danger" id="emailError"></p>
                           <label className="text-muted" for="password">
                              Password
                           </label>
                           <input
                              className="form-control mb-3 mt-3"
                              type="password"
                              id="passwordCreate"
                              name="password"
                           />
                           <div
                              className="text-danger"
                              id="passwordError"
                           ></div>
                           <a
                              id="letsGo"
                              className="btn btn-success btn-block float-right mt-3"
                              href="players"
                           >
                              Lets go!
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
