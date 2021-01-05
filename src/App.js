import React from "react";
import { NavBar } from "./Components/NavBar";
import { InfoPanel } from "./Components/InfoPanel";
import { BarChart } from "./Components/chart";

function App() {
   return (
      <div>
         <NavBar />
         <InfoPanel />
         <BarChart />
      </div>
   );
}

export default App;
