import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import TimeTemplate from "../ui/TimeTemplate";

export default function EditDetail() {
   return (
      <AppTemplate>
         <h4 className="my-4 text-center text-color-white">Edit Detail</h4>
         <br />
         <p className="text-color-white" htmlFor="exampleInputEmail1">
            Name
         </p>
         <input
            className="form-control mb-3"
            type="name"
            id="name"
            name="name"
         />
         <p className="text-color-white" htmlFor="exampleInputEmail1">
            Email
         </p>
         <input
            className="form-control mb-3"
            type="email"
            id="email"
            name="emailEditDetail"
         />
         <p className="text-color-white" htmlFor="exampleInputEmail1">
            Phone Number
         </p>
         <input
            className="form-control mb-3"
            type="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
         />
         <p className="text-color-white" htmlFor="exampleInputEmail1">
            Password
         </p>
         <input
            className="form-control mb-3"
            type="password"
            id="password"
            name="password"
         />
         <p className="text-color-white">Location</p>
         <select className="custom-select" id="inputGroupSelect01">
            <option value>Summerlin</option>
            <option value="1">SouthWest</option>
            <option value="2">Downtown</option>
            <option value="3">Spring Valley</option>
         </select>
         <TimeTemplate />
         <Link
            className="btn btn-lg btn-primary btn-success float-right mt-5"
            id="save-imagery"
            to=""
         >
            <img
               width="20px"
               style={{ marginBottom: "5px", marginRight: "4px" }}
               alt=""
            />
            Save
         </Link>
      </AppTemplate>
   );
}
