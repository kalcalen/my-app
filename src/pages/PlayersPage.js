import React from "react";
import AppTemplate from "../ui/AppTemplate";
import UserDataFront from "../ui/UserDataFront";
import UserDataBack from "../ui/UserDataBack";
import ReactCardFlip from "react-card-flip";

export function handleClicks(e) {
   return Players.handleClick(e); 
}

export default class Players extends React.Component {
   //create external access to internal method
   //handleClicks = this.handleClick;
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

   constructor() {
      super();
      this.state = {
         isFlipped: false,
      };
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(e) {
      e.preventDefault();
      this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
   }

   render() {
      return (
         <AppTemplate>
            <h4 className="my-4 text-center text-color-white">Players</h4>

            <ReactCardFlip
               isFlipped={this.state.isFlipped}
               flipDirection="horizontal"
            >
               <div>
                  <UserDataFront />
               </div>

               <div>
                  <UserDataBack />
               </div>
            </ReactCardFlip>
         </AppTemplate>
      );
   }
}
