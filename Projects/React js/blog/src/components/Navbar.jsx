import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* ***** Preloader Start ***** */}
      <div id="preloader">
        <div className="jumper">
          <div />
          <div />
          <div />
        </div>
      </div>
      {/* ***** Preloader End ***** */}
      {/* Header */}
      <header className>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <h2>
                Stand Blog<em>.</em>
              </h2>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Blog">
                    Blog Entries
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Post-details">
                    Post Details
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">
                    Contact Us
                  </NavLink>
                </li>

                <li classname="nav-item" style={{ marginLeft: "10px" }}>
                  <NavLink
                    className="nav-link px-5"
                    to="/Login"
                    style={{ border: "1px solid rgb(244, 136, 64)" }}
                  >
                    Login | Sign Up
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
