import React, { useEffect, useState } from "react";
import { NavBar } from "./navBar";
i;

export const InfoPanel = () => {
   const classes = useStyles();

   let [data, setData] = useState("");
   useEffect(() => {
      async function data() {
         let res = await fetch("https://covid19.mathdro.id/api");
         let jsonData = await res.json();

         delete jsonData["dailySummary"];
         delete jsonData["dailyTimeSeries"];
         delete jsonData["image"];
         delete jsonData["source"];
         delete jsonData["countries"];
         delete jsonData["countryDetail"];
         delete jsonData["lastUpdate"];

         setData(jsonData);
      }
      data();
   }, []);
   return (
      <div>
         <NavBar />
      </div>
   );
};
