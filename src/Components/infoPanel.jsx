import React, { useEffect, useState } from "react";
import { NavBar } from "./navBar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
         margin: theme.spacing(1),
         width: theme.spacing(16),
         height: theme.spacing(16),
      },
   },
}));

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

         console.log(jsonData);
      }
      data();
   }, []);
   return (
      <div>
         <NavBar />

         <div className={classes.root}>
            <Paper elevation={0} />
            <Paper />
            <Paper elevation={3} />
         </div>
      </div>
   );
};
