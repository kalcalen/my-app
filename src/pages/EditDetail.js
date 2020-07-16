import React from "react";
import AppTemplate from "../ui/AppTemplate";

export default function EditDetail() {
   return (
      <AppTemplate>
         <h4 class="my-4 text-center text-primary text-muted">Edit Detail</h4>
         <br />
         <p for="exampleInputEmail1">Name</p>
         <input
            type="email"
            className={{
               "form-control": true,
               "mb-2": true,
            }}
            id="signup-email-input"
         />
         <p for="exampleInputEmail1">Email</p>
         <input
            type="email"
            className={{
               "form-control": true,
               "mb-2": true,
            }}
            id="signup-email-input"
         ></input>
         <p for="exampleInputEmail1">Phone Number</p>
         <input
            type="email"
            className={{
               "form-control": true,
               "mb-2": true,
            }}
            id="signup-email-input"
         ></input>
         <p for="exampleInputEmail1">Password</p>
         <input
            type="email"
            className={{
               "form-control": true,
               "mb-2": true,
            }}
            id="signup-email-input"
         ></input>
         <p>Location</p>
         <select className="custom-select" id="inputGroupSelect01">
            <option value>Summerlin</option>
            <option value="1">SouthWest</option>
            <option value="2">Downtown</option>
            <option value="3">Spring Valley</option>
         </select>
         <p>Availability</p>
         <input
            className={{ "form-check-input": true }}
            type="checkbox"
            value=""
            id="defaultCheck1"
         ></input>
         Monday
         <input
            className={{ "form-check-input": true }}
            type="checkbox"
            value=""
            id="defaultCheck1"
         ></input>
         Tuesday
         <input
            className={{ "form-check-input": true }}
            type="checkbox"
            value=""
            id="defaultCheck1"
         ></input>
         Wednesday
         <br />
         <input
            className={{ "form-check-input": true }}
            type="checkbox"
            value=""
            id="defaultCheck1"
         ></input>
         Thursday
         <input
            className={{ "form-check-input": true }}
            type="checkbox"
            value=""
            id="defaultCheck1"
         ></input>
         Friday
         <input
            className={{ "form-check-input": true }}
            type="checkbox"
            value=""
            id="defaultCheck1"
         ></input>
         Saturday
         <input
            className={{ "form-check-input": true }}
            type="checkbox"
            value=""
            id="defaultCheck1"
         ></input>
         Sunday
      </AppTemplate>
   );
}
