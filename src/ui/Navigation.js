import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
   const url = window.location.pathname;
   console.log(url);
   const tabActiveOnPlayers = (url) => {
      if (url.indexOf("players") > 0) {
         return "tab-active";
      } else return "";
   };

   return (
      <div className="btn-group d-flex mt-1 " role="navigation" id="navigation">
         <Link
            to="players"
            className={`btn btn-secondary  btn-success ${tabActiveOnPlayers(
               url
            )}`}
         >
            Players
         </Link>

         <Link to="edit-detail" className="btn btn-secondary  btn-success">
            Edit Details
         </Link>
      </div>
   );
}
