import React from "react";
import AppTemplate from "../ui/AppTemplate";
import ReactCardFlip from "react-card-flip";
import UserDataFront1 from "../mock-data/player-page-cards/UserDataFront-1";
import UserDataBack1 from "../mock-data/player-page-cards/UserDataBack-1";

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
                  <UserDataFront1 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Click to see availability
                  </button>
               </div>

               <div>
                  <UserDataBack1 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Back to info
                  </button>
               </div>
            </ReactCardFlip>

            <ReactCardFlip
               isFlipped={this.state.isFlipped}
               flipDirection="horizontal"
            >
               <div>
                  <UserDataFront1 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Click to see availability
                  </button>
               </div>

               <div>
                  <UserDataBack1 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Back to info
                  </button>
               </div>
            </ReactCardFlip>

            {/* <ReactCardFlip
               isFlipped={this.state.isFlipped}
               flipDirection="horizontal"
            >
               <div>
                  <UserDataFront1 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Click to see availability
                  </button>
               </div>

               <div>
                  <UserDataBack1 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Back to info
                  </button>
               </div>
            </ReactCardFlip>

            <ReactCardFlip
               isFlipped={this.state.isFlipped}
               flipDirection="horizontal"
            >
               <div>
                  <UserDataFront1 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Click to see availability
                  </button>
               </div>

               <div>
                  <UserDataBack1 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Back to info
                  </button>
               </div>
            </ReactCardFlip>

            <ReactCardFlip
               isFlipped={this.state.isFlipped}
               flipDirection="horizontal"
            >
               <div>
                  <UserDataFront1 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Click to see availability
                  </button>
               </div>

               <div>
                  <UserDataBack1 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Back to info
                  </button>
               </div>
            </ReactCardFlip> */}
         </AppTemplate>
      );
   }
}
