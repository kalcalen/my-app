import React from "react";
import AppTemplate from "../ui/AppTemplate";
import ReactCardFlip from "react-card-flip";
import UserDataFront1 from "../mock-data/player-page-cards/UserDataFront-1";
import UserDataBack1 from "../mock-data/player-page-cards/UserDataBack-1";
import UserDataFront2 from "../mock-data/player-page-cards/UserDataFront-2";
import UserDataBack2 from "../mock-data/player-page-cards/UserDataBack-2";
import UserDataFront3 from "../mock-data/player-page-cards/UserDataFront-3";
import UserDataBack3 from "../mock-data/player-page-cards/UserDataBack-3";
import UserDataFront4 from "../mock-data/player-page-cards/UserDataFront-4";
import UserDataBack4 from "../mock-data/player-page-cards/UserDataBack-4";
import UserDataFront5 from "../mock-data/player-page-cards/UserDataFront-5";
import UserDataBack5 from "../mock-data/player-page-cards/UserDataBack-5";

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
                  <UserDataFront2 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Click to see availability
                  </button>
               </div>

               <div>
                  <UserDataBack2 />
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
                  <UserDataFront3 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Click to see availability
                  </button>
               </div>

               <div>
                  <UserDataBack3 />
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
                  <UserDataFront4 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Click to see availability
                  </button>
               </div>

               <div>
                  <UserDataBack4 />
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
                  <UserDataFront5 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Click to see availability
                  </button>
               </div>

               <div>
                  <UserDataBack5 />
                  <button
                     className="btn btn-primary btn-success mb-5"
                     onClick={this.handleClick}
                  >
                     Back to info
                  </button>
               </div>
            </ReactCardFlip>
         </AppTemplate>
      );
   }
}
