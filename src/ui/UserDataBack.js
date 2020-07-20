import React from "react";
import memoryCards from "../mock-data/memory-cards";

const memoryCard = memoryCards[0];

export default function UserDataBack() {
   return (
      <div className="card">
         <div className="card-body bg-secondary">
            <div rows="6" defaultValue={memoryCard.answer}></div>
         </div>
      </div>
   );
}
