import React from "react";
import Navigation from "../ui/Navigation";

export default function Players() {
   return (
      <div class="container">
         <div class="row">
            <div class="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <Navigation />
               <h4 class="my-4 text-center text-primary text-muted">
                  Add memorable imagery
               </h4>

               <div class="mb-2">
                  <div class="card bg-primary">
                     <div class="card-body">
                        <textarea rows="11" class="d-sm-none">
                           {" "}
                        </textarea>
                        <textarea rows="6" class="d-none d-sm-block"></textarea>
                     </div>
                  </div>

                  <div class="card bg-secondary">
                     <div class="card-body"> </div>
                  </div>
               </div>

               <p class="float-right mb-5">0/240</p>

               <div class="clearfix"></div>

               <button id="back2-answer" class="btn btn-link">
                  Back to answer
               </button>
               <div class="float-right">
                  <button
                     class="btn btn-lg btn-primary float-right"
                     id="save-imagery"
                  >
                     Save
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
