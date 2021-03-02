import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CountryData from "../json/countries.json";
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
   country: {
      display: "flex",
      justifyContent: "center",
      margin: "20px 0",
   },
   selc: {
      padding: "10px 20px",
      fontSize: "16px",
   },
}));

export default function CountryStats() {
   const classes = useStyles();

   let [countryVal, setCountryVal] = useState("AFG");
   let [data, setData] = useState({});

   useEffect(() => {
      async function fetchData() {
         try {
            let res = await fetch(
               `https://covid19.mathdro.id/api/countries/${countryVal}`
            );
            let jsonData = await res.json();

            delete jsonData["lastUpdate"];

            setData(jsonData);
         } catch (error) {
            console.log(error);
         }
      }

      fetchData();
   }, []);

   if (!data.confirmed) {
      return <h1>Loading....</h1>;
   }

   let { countries } = CountryData;

   console.log(countryVal);
   return (
      <div>
         <div className={classes.country}>
            <select
               onChange={(e) => setCountryVal(e.target.value)}
               className={classes.selc}
            >
               {Object.values(countries).map((val, ind) => {
                  return (
                     <>
                        <option value={val.iso3}>{val.name}</option>
                     </>
                  );
               })}
            </select>
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
            <Graph
               confirmed={data.confirmed.value}
               recovered={data.recovered.value}
               deaths={data.deaths.value}
            />
         </div>
      </div>
   );
}

//
