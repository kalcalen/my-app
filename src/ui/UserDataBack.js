import React from "react";
import memoryCards from "../mock-data/memory-cards";
import { handleClicks } from "../pages/PlayersPage";
// import { time } from "console";

//const memoryCard = JSON.parse(memoryCards);

// function handleChange(e) {
//    console.log(e.target.value);
// }

function createSchedule() {
   return (
   <div className="mb-2">
      <div className="card">
         <div className="card-body">
            <table className="table table-sm">
               <thead>
                  <tr>
                     <th scope="col"></th>
                     <th scope="col">S</th>
                     <th scope="col">M</th>
                     <th scope="col">T</th>
                     <th scope="col">W</th>
                     <th scope="col">T</th>
                     <th scope="col">F</th>
                     <th scope="col">S</th>
                  </tr>
               </thead>
               <tbody>
               {Object.keys(memoryCards.data).map(key => (
                  <tr>
                     <td>
                        {console.log("poop=" + memoryCards.data[key])}
                        {memoryCards.data[key].availability.sunday.time}
                     </td>
                     <td>
                        <label display={memoryCards.data[key].availability.sunday.time}>X</label>
                     </td>
                     <td>
                        <label display={memoryCards.data[key].availability.monday.time}>X</label>
                     </td>
                     <td>
                        <label display={memoryCards.data[key].availability.tuesday.time}>X</label>
                     </td>
                     <td>
                        <label display={memoryCards.data[key].availability.wednesday.time}>X</label>
                     </td>
                     <td>
                        <label display={memoryCards.data[key].availability.thursday.time}>X</label>
                     </td>
                     <td>
                        <label display={memoryCards.data[key].availability.friday.time}>X</label>
                     </td>
                     <td>
                        <label display={memoryCards.data[key].availability.saturday.time}>X</label>
                     </td>
                  </tr>
               ))}
               </tbody>
            </table>
            <div>
               <button className="btn btn-primary btn-success" onClick={handleClicks(this)}>
                  Back to info
               </button>
            </div>
         </div>
      </div>
   </div>
   )
}

export default function UserDataBack() {
   return createSchedule();
}
