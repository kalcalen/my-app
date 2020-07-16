import React from "react";

import landingLogoBlk from "../img/landing-logo-blk.png";

export default function Header() {
   return (
      <div>
         <img src={landingLogoBlk} alt="Who's Got Next" />

         {/* <Link href="/" class="btn btn-link float-right">
            Log out
         </Link> */}
         <div className="clearfix"></div>
      </div>
   );
}
