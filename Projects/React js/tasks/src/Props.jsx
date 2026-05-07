import React from "react";

function props({ img, title, text }) {
  return (
    <div className="col-md-3 p-1 d-flex">
      <div className="card" style={{ width: "100%" }}>
        <img className="card-img-top" src={`img/${img}`} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default props;
