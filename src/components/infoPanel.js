import React, { useEffect, useState } from "react";
import NavBar from "./navBar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Graph from "./graph";

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      margin: "50px",
   },
}));

export const InfoPanel = () => {
   const classes = useStyles();

   let [data, setData] = useState({});

   useEffect(() => {
      async function fetchData() {
         try {
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
         } catch (error) {
            console.log(error);
         }
      }
      fetchData();
   }, []);

   return (
      <div>
         <NavBar />

         <div className={classes.root}>
            <Grid container spacing={3}>
               {Object.keys(data).map((obj, ind) => {
                  return (
                     <Grid item xs key={ind}>
                        <Paper className={classes.paper} elevation={3}>
                           <h3>{obj.toUpperCase()}</h3>
                           <h3>{data[obj].value}</h3>
                        </Paper>
                     </Grid>
                  );
               })}
            </Grid>
         </div>

         <Graph />
      </div>
   );
};
