import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      {/* ***** Preloader Start ***** */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot" />
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      {/* ***** Preloader End ***** */}
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="info">
                <li>
                  <i className="fa fa-envelope" /> info@company.com
                </li>
                <li>
                  <i className="fa fa-map" /> Sunny Isles Beach, FL 33160
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/minthu" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <h1>Villa</h1>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li>
                    <NavLink to="/" className="active">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Properties">Properties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Property_details">Property Details</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-calendar" /> Schedule a visit
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
    </>
  );
}

export default Header;
