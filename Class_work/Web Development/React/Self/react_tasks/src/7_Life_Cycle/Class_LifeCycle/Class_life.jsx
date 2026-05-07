import React, { Component } from "react";
import Img from "./Img";

export class Class_life extends Component {
  constructor() {
    super();
    this.state = {
      isImageVisible: false,
    };
  }
  render() {
    return (
      <div className="container mt-5">
        <h1>Class Life Cycle</h1>

        <button
          onClick={() =>
            this.setState({ isImageVisible: !this.state.isImageVisible })
          }
        >
          Toggle Image
        </button>
        {this.state.isImageVisible ? <Img /> : null}
      </div>
    );
  }
}

export default Class_life;
