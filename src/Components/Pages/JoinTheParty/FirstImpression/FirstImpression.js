import React, { Component } from 'react'

export class FirstImpression extends Component {
  render() {
    return (
      <div>
        <video id="player" controls autoplay></video>
<button id="capture">Capture</button>
<canvas id="canvas" width=320 height=240 />

      </div>
    )
  }
}

export default FirstImpression;