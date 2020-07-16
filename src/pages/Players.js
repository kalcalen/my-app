import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../mock-data/memory-cards";
const memoryCard = memoryCards[0];

export default function Players() {
   return (
      <AppTemplate>
         <h4 class="my-4 text-center text-primary text-muted">Players</h4>
         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body">
                  <div rows="6">{memoryCard.name}</div>
               </div>
            </div>
         </div>

         <div className="card">
            <div className="card-body bg-secondary">
               <div rows="6" defaultValue={memoryCard.answer}></div>
            </div>
         </div>
      </AppTemplate>
   );
}
