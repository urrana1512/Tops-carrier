/********************************************************************
 * main.jsx
 * Entry point of React frontend
 ********************************************************************/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Render App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
