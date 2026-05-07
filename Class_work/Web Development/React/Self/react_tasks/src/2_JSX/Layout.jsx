import React from "react";

import "./Style.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";
import Article from "./Article";
import Aside from "./Aside";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="container-fluid">
      <Header />
      <Navbar />

      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <Section />
            </div>
            <div className="col-md-12 p-0">
              <Article />
            </div>
          </div>
        </div>
        <div className="col-md-4 p-0">
          <Aside />
        </div>
        <div className="col-md-12 p-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
