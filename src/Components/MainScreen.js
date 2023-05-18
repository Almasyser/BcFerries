import React, { useEffect, useState } from "react";
import "./MainScreen.css";

function MainScreen({ parameter }) {
  const [baseTimes, setBaseTimes] = useState([]);

  useEffect(() => {
    if (
      parameter &&
      parameter.schedule &&
      parameter.schedule.BOW &&
      parameter.schedule.BOW.HSB &&
      parameter.schedule.BOW.HSB.sailings
    ) {
      setBaseTimes(parameter.schedule.BOW.HSB.sailings);
    }
  }, [parameter]);
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
