import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-dark text-info d-flex justify-content-center align-items-center vh-100">
        <h1 className="text-center">Welcome to the Home Page</h1>
      </div>
    </>
  );
}

export default Home;
