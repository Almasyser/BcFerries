import React, { useEffect, useState } from "react";
import ListPort from "./list_port.json";
// le problème est le suivant:
// je cherche à récupérer le 1er terme et son enfant, exp:
// [TSA][SWB] puis [TSA][SGI]...
// je veux imbriquer deux map (ou foreach) et envoyer
// les 2 parametres en props à MainScreen.
// ça marche sauf que j'ai "undefine"comme réponses.
// je dois mal déstructurer.
// je veux puorsuivre avec le render, mais ce -petit- problème me bloque.
// tu peux m'aider stp?
function SelectPort() {
  const [departure, setDeparture] = useState([]);
  const [arrival, setArrival] = useState([]);
  useEffect(() => {
    if (ListPort) {
      const keys = Object.keys(ListPort);
      const departurePorts = [];
      const arrivalPorts = [];
      keys.forEach((keys) => {
        departurePorts.push(keys);
        arrivalPorts.push(...ListPort[keys]);
      });
      setDeparture(departurePorts);
      setArrival(arrivalPorts);
    }
  }, [ListPort]);

  return <div></div>;
}
export default SelectPort;
// list_port.json
/*
{"TSA": [
    "SWB",
    "SGI",
    "DUK"
],
"SWB": [
    "TSA",
    "FUL",
    "SGI"
],
"HSB": [
    "NAN",
    "LNG",
    "BOW"
],
"DUK": [
    "TSA"
],
"LNG": [
    "HSB"
],
"NAN": [
    "HSB"
],
"FUL": [
    "SWB"
],
"BOW": [
    "HSB"
]
}
*/
