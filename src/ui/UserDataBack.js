import React from "react";
import memoryCards from "../mock-data/memory-cards";

const memoryCard = memoryCards[0];

function handleChange(e) {
   console.log(e.target.value);
}

export default function UserDataBack() {
   return (
      <div className="card">
         <div className="card-body">
            <div rows="6" defaultValue={memoryCard.answer}></div>
            <div rows="6">{memoryCard.availability.monday.am8.toString()}</div>
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
                  onChange={handleChange}
               />
               <input
                  id="tuesAm11"
                  type="checkbox"
                  className="col"
                  checked={memoryCard.availability.tuesday.am11}
                  onChange={handleChange}
               />
               <input
                  id="wedAm11"
                  type="checkbox"
                  className="col"
                  checked={memoryCard.availability.wednesday.am11}
                  onChange={handleChange}
               />
               <input
                  id="thursAm11"
                  type="checkbox"
                  className="col"
                  checked={memoryCard.availability.thursday.am11}
                  onChange={handleChange}
               />
               <input
                  id="friAm11"
                  type="checkbox"
                  className="col"
                  checked={memoryCard.availability.friday.am11}
                  onChange={handleChange}
               />
               <input
                  id="satAm11"
                  type="checkbox"
                  className="col"
                  checked={memoryCard.availability.saturday.am11}
                  onChange={handleChange}
               />
               <input
                  id="sunAm11"
                  type="checkbox"
                  className="col"
                  checked={memoryCard.availability.sunday.am11}
                  onChange={handleChange}
               />
            </div>
         </div>
      </div>
   );
}
