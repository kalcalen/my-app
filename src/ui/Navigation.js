import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
   return (
      <div
         className="btn-group d-flex mt-1"
         role="navigation"
         aria-label="navigation"
      >
         <Link type="players" className={"btn btn-secondary"}>
            Players
         </Link>

         <Link to="edit-detail" className="btn btn-secondary">
            Edit Details
         </Link>
      </div>
   );
}
