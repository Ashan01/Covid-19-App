import React, { useEffect, useState } from "react";
import NavBar from "./navBar";

export const InfoPanel = () => {
   let [data, setData] = useState();

   useEffect(() => {
      fetch("https://covid19.mathdro.id/api")
         .then((res) => res.json())
         .then((res2) => delete data.source);
   }, []);
   return <NavBar />;
};
