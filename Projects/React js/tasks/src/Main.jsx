import React from "react";
import Props from "./Props";
import Cart from "./Cart";

function Main() {
  return (
    <div className="container">
      <h1>Cards</h1>
      <div className="row">
        <Props
          img="download1.jpeg"
          title="John Doe"
          text="Some example text."
        />
        <Props
          img="download2.jpeg"
          title="John Doe"
          text="Some example text."
        />
        <Props img="download3.png" title="John Doe" text="Some example text." />
        <Props
          img="download1.jpeg   "
          title="John Doe"
          text="Some example text."
        />
      </div>

      <Cart />
    </div>
  );
}

export default Main;
