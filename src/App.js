import React from "react";
import MainRoutes from "./routes";
import { ResetCSS } from "./global/resetCss";



function App() {
  return (
     <>
      <ResetCSS/>
      <MainRoutes/>
     </>
  );
}

export default App;
