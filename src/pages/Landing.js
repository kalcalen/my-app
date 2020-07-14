import React from "react";

export default function Landing() {
   return (
      <>
         <div className="background-image">
            <div className="container-fluid">
               <div className="row"></div>

               <div className="row card-index">
                  <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-2 col-lg-4 offset-xl-1 col-xl-4">
                     <div className="card mb-5">
                        <div className="card-body landing-text">
                           <h2 className="card-title">Nice to meet you</h2>
                           <p className="mb-2">Sign up for White Bear.</p>
                           <p className="mb-3">Free forever.</p>
                           <button
                              id="sign-up"
                              className="btn btn-block btn-success mb-4"
                           >
                              Let's get you signed up
                           </button>

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
                                 href="create-answer"
                              >
                                 Lets go!
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-1 col-lg-4 offset-xl-1 col-xl-5">
                     <div className="card mb-5">
                        <div className="card-body landing-text">
                           <h2 className="card-title">Welcome Back</h2>
                           <p className="mb-3">
                              Log-in with your email address and password.
                           </p>
                           <form className="form-group">
                              <label className="text-muted" for="email">
                                 Email Address
                              </label>
                              <input
                                 className="form-control"
                                 type="email"
                                 id="emailWelcome"
                                 name="email"
                              />
                              <label className="text-muted" for="password">
                                 Password
                              </label>
                              <input
                                 className="form-control mb-3"
                                 type="password"
                                 id="passwordWelcome"
                                 name="password"
                              />
                              <a
                                 href="create-answer"
                                 className="btn btn-success float-right"
                              >
                                 Log in
                              </a>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
