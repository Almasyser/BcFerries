import React, { useState } from "react";
import "./MainScreen.css";

function MainScreen({ parameters }) {
  const [baseTimes, setBaseTimes] = useState([]);
  setBaseTimes(parameters.schedule.BOW.HSB.sailings);
  return (
    <div className="container">
      <h1>Affichage</h1>
      <ul className="blockTime">
        {baseTimes.map((el) => {
          return (
            <li key={el.time}>
              Departure: {el.time} ↔ Arrival: {el.arrivalTime}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MainScreen;
