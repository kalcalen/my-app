import React from "react";
import landingLogo from "../img/landingLogo.PNG";
import { Link } from "react-router-dom";
import TimeTemplate from "../ui/TimeTemplate";

export default class SignUp extends React.Component {
   render() {
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
                                 for="name"
                              >
                                 Name
                              </p>
                              <input
                                 className="form-control mb-3"
                                 type="name"
                                 id="name"
                                 name="name"
                              />
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
                                 className=""
                                 for="phone"
                              >
                                 Phone
                              </p>
                              <input
                                 className="form-control mb-3"
                                 type="phone"
                                 id="phone"
                                 name="phone"
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
                              <p
                                 style={{ color: "white" }}
                                 className="mt-5"
                                 for="password"
                              >
                                 Location
                              </p>
                              <select
                                 className="custom-select"
                                 id="inputGroupSelect01"
                              >
                                 <option value>Summerlin</option>
                                 <option value="1">SouthWest</option>
                                 <option value="2">Downtown</option>
                                 <option value="3">Spring Valley</option>
                              </select>
                              <TimeTemplate />

                              <Link
                                 id="letsGo"
                                 className="btn btn-success btn-block mt-3"
                                 to="/players"
                              >
                                 Lets go!
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
}
