import React from "react";
import Function_props from "./Function_props";
import Class_props from "./Class_props";

function Main_props() {
  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col-md-12 text-center mb-2">
          <h1>Function Components with Function Props</h1>
        </div>
        <Function_props
          img="https://i.pinimg.com/736x/84/a4/b8/84a4b821f2dcb203f1321ec0638896a0.jpg"
          title="RCB vs CSK"
          info="Kohli vs Dhoni"
        />
        <Function_props
          img="https://i.ytimg.com/vi/bDnIDRNNsDE/maxresdefault.jpg"
          title="RCB vs DC"
          info="Kohli vs KL Rahul"
        />
        <Function_props
          img="https://theindiasaga.com/wp-content/uploads/2024/04/Untitled-design-17.png"
          title="RCB vs MI"
          info="Kohli vs Rohit"
        />
        <Function_props
          img="https://i.ytimg.com/vi/dfzHRQvoC0s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBCOkZyUwX7cGdA4-qCrN1pd0NSBA"
          title="RCB vs GT"
          info="Kohli vs Gill"
        />
      </div>

      <div className="row p-5">
        <div className="col-md-12 text-center mb-2">
          <h1>Class Components with Class Props</h1>
        </div>
        <Function_props
          img="https://i.ytimg.com/vi/bDnIDRNNsDE/maxresdefault.jpg"
          title="RCB vs DC"
          info="Kohli vs KL Rahul"
        />
        <Class_props
          img="https://i.pinimg.com/736x/84/a4/b8/84a4b821f2dcb203f1321ec0638896a0.jpg"
          title="RCB vs CSK"
          info="Kohli vs Dhoni"
        />
        <Function_props
          img="https://i.ytimg.com/vi/dfzHRQvoC0s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBCOkZyUwX7cGdA4-qCrN1pd0NSBA"
          title="RCB vs GT"
          info="Kohli vs Gill"
        />
        <Function_props
          img="https://theindiasaga.com/wp-content/uploads/2024/04/Untitled-design-17.png"
          title="RCB vs MI"
          info="Kohli vs Rohit"
        />
      </div>
    </div>
  );
}

export default Main_props;
