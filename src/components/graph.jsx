import React from "react";
import { Bar } from "react-chartjs-2";

export default function Graph({ confirmed, recovered, deaths }) {
   const data = {
      labels: ["2020"],

      datasets: [
         {
            label: "Confirmed Cases",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [confirmed],
         },
         {
            label: "Recovered Paitent",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [recovered],
         },
         {
            label: "Deaths",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [deaths],
         },
      ],
   };

   return (
      <div>
         <h2>Crona Cases Chart</h2>
         <Bar
            data={data}
            width={100}
            height={150}
            options={{
               maintainAspectRatio: false,
            }}
         />
      </div>
   );
}
