import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
   const url = window.location.pathname;
   console.log(url);
   return (
      <div
         className="btn-group d-flex mt-1"
         role="navigation"
         aria-label="navigation"
      >
         <Link
            type="button"
            className={"btn btn-secondary $(tabActiveOnCreate(url)}"}
         >
            Players
         </Link>
         <Link to="editdetail" className="btn btn-secondary">
            Edit Details
         </Link>
      </div>
   );
}
