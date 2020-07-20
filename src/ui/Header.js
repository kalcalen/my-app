import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
         }}
      >
         <Link to="/" className="HeaderLogo"></Link>
      </div>
   );
}
