import React, { useEffect, useState } from "react";
import NavBar from "./navBar";

export const InfoPanel = () => {
   let [data, setData] = useState({});

   useEffect(() => {
      try {
         async function fetchData() {
            const req = await fetch("https://covid19.mathdro.id/api");
            const jsonData = await req.json();

            delete jsonData["dailySummary"];
            delete jsonData["dailyTimeSeries"];
            delete jsonData["image"];
            delete jsonData["source"];
            delete jsonData["countries"];
            delete jsonData["countryDetail"];
            delete jsonData["lastUpdate"];

            setData(jsonData);
         }
         fetchData();
      } catch (error) {
         console.log(error);
      }
   }, []);

   return (
      <div>
         <NavBar />

         {Object.keys(data).map((val, index) => {
            return <h1>{val.value}</h1>;
         })}
      </div>
   );
};
