import React, { Component } from "react";

export class Class_props extends Component {
  render() {
    return (
      <div className="col-md-3 d-flex">
        <div className="card" style={{ width: "100%" }}>
          <img
            className="card-img-top"
            src={this.props.img}
            alt="Card image"
            height={"350px"}
            width={"100%"}
          />
          <div className="card-img p-2 text-center">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.info}</p>
            <a
              href="#"
              className="btn btn-primary d-flex justify-content-center"
            >
              See Profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Class_props;
