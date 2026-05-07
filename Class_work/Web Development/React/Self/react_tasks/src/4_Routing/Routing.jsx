import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import "./style.css";
import About from "./About";
import Contact from "./Contact";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
