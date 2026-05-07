import React from "react";
import ReactDOM from "react-dom/client";
import Myapp from "./Myapp"; // Importing the custom app component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Myapp />
  </React.StrictMode>
);
