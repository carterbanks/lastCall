import React, { Component } from "react";
import "./FirstImpression.css";

export class FirstImpression extends Component {
  render() {
    return (
      
        <div className="contentarea">
          <canvas id="canvas" />
          <div className="output">
            <img id="photo" alt="The screen capture will appear in this box." />
          </div>
        </div>
      
    );
  }
}
  export default FirstImpression;