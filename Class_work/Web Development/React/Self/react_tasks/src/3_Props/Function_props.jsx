import React from "react";

function Function_props({ img, title, info }) {
  return (
    <div className="col-md-3 d-flex">
      <div className="card" style={{ width: "100%" }}>
        <img
          className="card-img-top"
          src={img}
          alt="Card image"
          height={"350px"}
          width={"100%"}
        />
        <div className="card-img p-2 text-center">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{info}</p>
          <a href="#" className="btn btn-primary d-flex justify-content-center">
            See Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Function_props;
