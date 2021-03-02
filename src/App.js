import React, { useState } from "react";
import InfoPanel from "./components/infoPanel";
import FootNav from "./components/FootNav";
import AppBar from "./components/navBar";

function App() {
   const screenConfig = useState(0);

   return (
      <div>
         <AppBar />
         <InfoPanel currentScreen={screenConfig[0]} />
         <FootNav screenConfig={screenConfig} />
      </div>
   );
}

export default App;
