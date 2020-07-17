import React from "react";
import landingLogo from "../img/landingLogo.PNG";
import { Link } from "react-router-dom";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container">
            <div className="row card-index">
               <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <img className="justify-center" src={landingLogo} alt="" />
                  <div id="landingCard" className="card mb-5">
                     <div className="card-body landing-text">
                        <div id="form-toggle">
                           <p
                              style={{ color: "white" }}
                              className=""
                              for="email"
                           >
                              Email Address
                           </p>
                           <input
                              className="form-control mb-3"
                              type="email"
                              id="emailCreate"
                              name="email"
                           />
                           <p
                              style={{ color: "white" }}
                              className="mt-5"
                              for="password"
                           >
                              Password
                           </p>
                           <input
                              className="form-control mb-3"
                              type="password"
                              id="passwordCreate"
                              name="password"
                           />
                           <Link
                              id="letsGo"
                              className="btn btn-success btn-block mt-3"
                              to="/players"
                           >
                              Lets go!
                           </Link>
                           <Link
                              to="sign-up"
                              className="btn btn-success btn-block mt-3"
                           >
                              Sign Up!
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
