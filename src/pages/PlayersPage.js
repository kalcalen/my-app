import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../mock-data/memory-cards";
const memoryCard = memoryCards[0];

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

   render() {
      return (
         <AppTemplate>
            <h4 className="my-4 text-center text-primary text-muted">
               Players
            </h4>
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

            <div className="card">
               <div className="card-body bg-secondary">
                  <div rows="6" defaultValue={memoryCard.answer}></div>
               </div>
            </div>
         </AppTemplate>
      );
   }
}
