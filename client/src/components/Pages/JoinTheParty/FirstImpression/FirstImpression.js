import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./FirstImpression.css";

export class FirstImpression extends Component {
  render() {
    return (
      <div>
        <div className="contentarea">
          <div className="camera">
            <video
              id="video"
              ref={stream => {
                this.videoStream = stream;
              }}
              muted="muted"
            />
          </div>
          <div className="snap">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              id="startbutton"
              style={{ width: "max-content" }}
            >
              Take Your First Impression
            </button>
          </div>
        </div>
        <div className="output">
          <canvas
            ref={canvas => {
              this.canvas = canvas;
            }}
            id="canvas"
          />
          <img id="photo" alt="The screen capture will appear in this box." />
        </div>
      </div>
    );
  }

  componentDidMount() {
    (function() {
      // The width and height of the captured photo. We will set the
      // width to the value defined here, but the height will be
      // calculated based on the aspect ratio of the input stream.

      var width = window.innerWidth; // We will scale the photo width to this
      var height = window.innerWidth; // This will be computed based on the input stream

      // |streaming| indicates whether or not we're currently streaming
      // video from the camera. Obviously, we start at false.

      var streaming = false;

      // The various HTML elements we need to configure or control. These
      // will be set by the startup() function.

      var video = null;
      var canvas = null;
      var photo = null;
      var startbutton = null;

      function startup() {
        video = document.getElementById("video");
        canvas = document.getElementById("canvas");
        photo = document.getElementById("photo");
        startbutton = document.getElementById("startbutton");

        navigator.getMedia =
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia;

        navigator.getMedia(
          {
            video: true,
            audio: false
          },
          function(stream) {
            if (navigator.mozGetUserMedia) {
              video.mozSrcObject = stream;
            } else {
              var vendorURL = window.URL || window.webkitURL;
              video.src = vendorURL.createObjectURL(stream);
            }
            video.play();
          },
          function(err) {
            console.log("An error occured! " + err);
          }
        );

        video.addEventListener(
          "canplay",
          function(ev) {
            ev.preventDefault();
            if (!streaming) {
              height = video.videoHeight / (video.videoWidth / width);

              // Firefox currently has a bug where the height can't be read from
              // the video, so we will make assumptions if this happens.

              if (isNaN(height)) {
                height = video.height;
                width = video.width;
              }

              //video.setAttribute("width", width);
              // video.setAttribute("height", height);
              //ReactDOM.render(<video width={ window.innerWidth} height={window.innerHeight} id="video" muted= "muted">Video stream not available.</video>, document.getElementById("video"));
              video.setAttribute("width", window.innerWidth);
              video.setAttribute("height", window.innerHeight);

              canvas.setAttribute("width", width);
              canvas.setAttribute("height", height);
              streaming = true;
            }
          },
          false
        );

        startbutton.addEventListener(
          "click",
          function(ev) {
            takepicture();
            ev.preventDefault();
          },
          false
        );

        clearphoto();
      }

      // Fill the photo with an indication that none has been
      // captured.

      function clearphoto() {
        var context = canvas.getContext("2d");
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var data = canvas.toDataURL("image/png");
        photo.setAttribute("src", data);
      }

      // Capture a photo by fetching the current contents of the video
      // and drawing it into a canvas, then converting that to a PNG
      // format data URL. By drawing it on an offscreen canvas and then
      // drawing that to the screen, we can change its size and/or apply
      // other changes before drawing it.

      function takepicture() {
        var context = canvas.getContext("2d");
        if (width && height) {
          canvas.width = video.width;
          canvas.height = video.height;
          context.drawImage(video, 0, 0, video.width, video.height);

          var data = canvas.toDataURL("image/png");
          photo.setAttribute("src", data);
          console.log(canvas);
          console.log(photo);
        } else {
          clearphoto();
        }
      }

      // Set up our event listener to run the startup process
      // once loading is complete.
      window.addEventListener("load" || "select", startup, false)
    })();
  }
}
export default FirstImpression;
