import React from "react";
import "./SassStyle.scss"; // Importing the SASS file

function Main_Sass() {
  return (
    <>
      <div className="container">
        <h2>SASS CSS</h2>
        <br />
      </div>
      {/* SASS CSS Variables */}
      <div className="container">
        <div className="sass-var row">
          <h3 className="">SASS CSS Variables</h3>
          <p>
            SASS allows you to define variables that can be reused throughout
            your stylesheets. This is useful for maintaining consistency and
            making changes easier.
          </p>
        </div>
      </div>
      {/* SASS Nesting */}
      <div className="container">
        <div className="nested-css">
          <h3 className="">Nested CSS</h3>
          <nav>
            <ul>
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">SASS</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* SASS Nested Properties */}
      <div className="container">
        <div className="sass-properties">
          <h3 className="">Nested Properties</h3>
          <p>
            SASS allows you to nest properties within selectors, making your
            stylesheets more organized and easier to read.
          </p>
        </div>
      </div>

      {/* SASS Extends */}
      <div className="container">
        <div className="sass-extends row">
          <h3 className="">SASS Extends</h3>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button className="btn-basic btn-purple" type="button">
              Button
            </button>
            <button className="btn-basic btn-red" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_Sass;
