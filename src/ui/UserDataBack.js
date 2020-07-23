import React from "react";
import memoryCards from "../mock-data/player-cards";
// import { time } from "console";

const memoryCard = memoryCards[0];

// function handleChange(e) {
//    console.log(e.target.value);
// }

// function createSchedule() {
//    // var html = " ";
//    // var returnValue = "";

//    // for (var i = 0; i < memoryCard.availability.sunday.length(); i++) {}
//    return (
//       <tr>
//          {memoryCard.availability.sunday.map((time) => (
//             <td>{time}</td>
//          ))}
//          {memoryCard.availability.sunday.map((time) => (
//             <td>
//                <label display={memoryCard.availability.sunday.time}>X</label>
//             </td>
//          ))}
//          <td>
//             <label display={memoryCard.availability.monday.am11}>X</label>
//          </td>
//          <td>
//             <label display={memoryCard.availability.tuesday.am11}>X</label>
//          </td>
//          <td>
//             <label display={memoryCard.availability.wednesday.am11}>X</label>
//          </td>
//          <td>
//             <label display={memoryCard.availability.thursday.am11}>X</label>
//          </td>
//          <td>
//             <label display={memoryCard.availability.friday.am11}>X</label>
//          </td>
//          <td>
//             <label display={memoryCard.availability.saturday.am11}>X</label>
//          </td>
//       </tr>
//    );
// }

export default function UserDataBack() {
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
                     <tr>
                        <td>9a</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     {/* {createSchedule()} */}
                     <tr>
                        <td>10a</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>11a</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>12p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>1p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>2p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>3p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>4p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>5p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>6p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>7p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>8p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>9p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                     <tr>
                        <td>10p</td>
                        <td>
                           <label display={memoryCard.availability.sunday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.monday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.tuesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.wednesday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.thursday.am11}
                           >
                              X
                           </label>
                        </td>
                        <td>
                           <label display={memoryCard.availability.friday.am11}>
                              X
                           </label>
                        </td>
                        <td>
                           <label
                              display={memoryCard.availability.saturday.am11}
                           >
                              X
                           </label>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
}
