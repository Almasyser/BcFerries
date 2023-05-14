import React, { useEffect, useState } from "react";
import axios from "axios";
import MainScreen from "./MainScreen";

function FindFerries() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://www.bcferriesapi.ca/api/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <MainScreen parameter={data} />
    </>
  );
}
export default FindFerries;
