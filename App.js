import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import "./index.css"
import "@fontsource/poppins";

const App = () => {
  
  return (
    <div>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)