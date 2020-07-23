import React from "react";
import memoryCards from "../player-cards";
import toDisplayDate from "date-fns/format";
const memoryCard = memoryCards[3];

export default function UserDataFront() {
   return (
      <div className="mb-2">
         <div className="card bg-primary">
            <div className="card-body">
               <h2>{memoryCard.name}</h2>
               <p>{memoryCard.email}</p>
               <p>{memoryCard.phone}</p>
               <p>
                  Joined on: {toDisplayDate(memoryCard.createdAt, "MMM. d, y")}
               </p>
            </div>
         </div>
      </div>
   );
}
