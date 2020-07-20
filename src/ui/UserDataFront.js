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
               <div rows="6">
                  {memoryCard.availability.monday.am8.toString()}
               </div>
               <div className="row">
                  <label className="col"></label>
                  <label className="col">M</label>
                  <label className="col">T</label>
                  <label className="col">W</label>
                  <label className="col">Th</label>
                  <label className="col">F</label>
                  <label className="col">Sa</label>
                  <label className="col">Su</label>
               </div>
               <div className="row" rows="6">
                  <label className="col">11am</label>
                  <input
                     id="monAm11"
                     type="checkbox"
                     className="col"
                     checked={memoryCard.availability.monday.am11}
                  />
                  <input
                     id="tuesAm11"
                     type="checkbox"
                     className="col"
                     checked={memoryCard.availability.tuesday.am11}
                  />
                  <input
                     id="wedAm11"
                     type="checkbox"
                     className="col"
                     checked={memoryCard.availability.wednesday.am11}
                  />
                  <input
                     id="thursAm11"
                     type="checkbox"
                     className="col"
                     checked={memoryCard.availability.thursday.am11}
                  />
                  <input
                     id="friAm11"
                     type="checkbox"
                     className="col"
                     checked={memoryCard.availability.friday.am11}
                  />
                  <input
                     id="satAm11"
                     type="checkbox"
                     className="col"
                     checked={memoryCard.availability.saturday.am11}
                  />
                  <input
                     id="sunAm11"
                     type="checkbox"
                     className="col"
                     checked={memoryCard.availability.sunday.am11}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
