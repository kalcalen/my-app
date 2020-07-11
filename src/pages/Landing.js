import React from "react";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container-fluid ">
            <div className="row d-flex ">
               {/* <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-2 col-lg-4 offset-xl-1 col-xl-4"> */}
               <div className="col d-flex usjtify-content-center">
                  <div className="card mb-5 mx-auto">
                     <div className="card-body landing-text">
                        <h2 className="card-title">Welcome Back</h2>
                        <p className="mb-3">
                           Log-in with your email address and password.
                        </p>
                        <form className="form-group">
                           <label className="text-muted" htmlFor="email">
                              Email Address
                           </label>
                           <input
                              className="form-control"
                              type="email"
                              id="emailWelcome"
                              name="email"
                           />
                           <label className="text-muted" htmlFor="password">
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
   );
}
