import React from "react";
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
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Grid container spacing={3} className={classes.Grids}>
            <Grid item xs={4}>
               <Paper className={classes.paper} elevation={3}>
                  xs=12
               </Paper>
            </Grid>{" "}
            <Grid item xs={4}>
               <Paper className={classes.paper} elevation={3}>
                  xs=12
               </Paper>
            </Grid>{" "}
            <Grid item xs={4}>
               <Paper className={classes.paper} elevation={3}>
                  xs=12
               </Paper>
            </Grid>
         </Grid>
      </div>
   );
}
