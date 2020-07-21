import React from "react";
import memoryCards from "../mock-data/memory-cards";
const memoryCard = memoryCards[0];

export default function UserDataFront() {
   return (
      <div className="mb-2">
         <div className="card bg-primary">
            <div className="card-body">
               <div rows="6">{memoryCard.name}</div>
               <div rows="6">{memoryCard.email}</div>
               <div rows="6">{memoryCard.phone}</div>
            </div>
         </div>
      </div>
   );
}
