import React from "react";
import AppTemplate from "../ui/AppTemplate";
import UserDataFront from "../ui/UserDataFront";
import UserDataBack from "../ui/UserDataBack";

export default class Players extends React.Component {
   componentDidMount() {
      // Function for today
      let date = new Date();
      let day = date.getDay();
      console.log(day);
      let today =
         day === 0
            ? "sunday"
            : day === 1
            ? "monday"
            : day === 2
            ? "tuesday"
            : day === 3
            ? "wednesday"
            : day === 4
            ? "thursday"
            : day === 5
            ? "friday"
            : "saturday";
      console.log(today);
   }

   render() {
      return (
         <AppTemplate>
            <h4 className="my-4 text-center text-primary text-muted">
               Players
            </h4>
            <UserDataFront />
            <UserDataBack />
         </AppTemplate>
      );
   }
}
