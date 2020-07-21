import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
   const url = window.location.pathname;
   console.log(url);
   const tabActiveOnPlayers = (url) => {
      if (url.indexOf("players") > 0 || url.indexOf("edit-detail") > 0) {
         return "tab-active";
      } else return "";
   };

   const tabActiveOnEditDetail = (url) => {
      if (url.indexOf("edit-detail") > 0 || url.indexOf("players") > 0) {
         return "tab-active";
      } else return "";
   };

   return (
      <div className="btn-group d-flex mt-1 " role="navigation" id="navigation">
         <NavLink
            to="players"
            className={`btn btn-secondary  btn-success tab-separator ${tabActiveOnPlayers(
               url
            )}`}
         >
            Players
         </NavLink>

         <NavLink
            to="edit-detail"
            className={`btn btn-secondary  btn-success tab-separator ${tabActiveOnEditDetail(
               url
            )}`}
         >
            Edit Details
         </NavLink>
      </div>
   );
}
