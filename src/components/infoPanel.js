import React from "react";
import GlobalData from "./GloabalStats";
import CountryStats from "./CountryStats";

export default function InfoPanel({ currentScreen }) {
   if (currentScreen === 0) {
      return <GlobalData />;
   } else {
      return <CountryStats />;
   }
}
