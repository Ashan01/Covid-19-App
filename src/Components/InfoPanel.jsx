import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      maxWidth: "1000px",
   },
   paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
   },
   Grids: {
      marginLeft: 100,
      marginTop: 30,
   },
}));

export function InfoPanel() {
   let [data_1, setData] = useState({});
   useEffect(() => {
      async function getData() {
         try {
            let response = await fetch("https://covid19.mathdro.id/api");
            let json = await response.json();

            delete json["dailySummary"];
            delete json["dailyTimeSeries"];
            delete json["dailySummary"];
            delete json["image"];
            delete json["countries"];
            delete json["source"];
            delete json["countryDetail"];
            delete json["lastUpdate"];

            setData(json);
         } catch (error) {
            console.log(error);
         }
      }
      getData();
   }, []);
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Grid container spacing={3} className={classes.Grids}>
            {Object.keys(data_1).map((val, ind) => {
               return (
                  <Grid item xs={4} key={ind}>
                     <Paper className={classes.paper} elevation={3}>
                        <div>
                           <h3>{val}</h3>
                           <h3>{data_1[val].value}</h3>
                        </div>
                     </Paper>
                  </Grid>
               );
            })}
         </Grid>
      </div>
   );
}
