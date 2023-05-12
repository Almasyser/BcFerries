import React, { useState } from "react";

function MainScreen({ parameter }) {
  const [sailingTime, setSailingTime] = useState([]);
  setSailingTime(parameter.schedule.BOW.HSB.sailings);
  console.log(sailingTime);

  return;
}
export default MainScreen;
