import React from "react";
import memoryCards from "../mock-data/memory-cards";
import { handleClicks } from "../pages/PlayersPage";
// import toDisplayDate from "date-fns/format";
//const memoryCard = memoryCards.players;

function playerTemplate() {
   return (
      <div className="mb-2">
         {Object.keys(memoryCards.data).map(key => (
         <div className="card bg-primary">
            <div className="card-body">
               <div rows="6">{memoryCards.data[key].name}</div>
               <div rows="6">{memoryCards.data[key].email}</div>
               <div rows="6">{memoryCards.data[key].phone}</div>
               {/* <p>{toDisplayDate(memoryCard.createdAt, "MMM")}</p> */}
            </div>
            <div>
               <button className="btn btn-primary btn-success" onClick={handleClicks(this)}>
               Click to see availability
               </button>
            </div>
         </div>))}
      </div>
   )
}

export default function UserDataFront() {
   return playerTemplate();
}
