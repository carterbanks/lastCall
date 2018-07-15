import React, { Component } from 'react';
import '/Users/carterbanks/Desktop/lastCall/client/src/components/Pages/Home/Home.css';

export class Home extends Component {
  render() {
    return (
      <div>
        <div class="section">
          <div class="container-flex">
            <div class="jumbotron jumbotron-fluid phone-screen">
            
              {/* SPACE */}
              <div class="container-flex" className="space">
              </div>
              {/* SPACE */}
              <div class="container-flex" className="space">
              </div>
              {/* LOGO */}
              <div class="container-flex">
              <img className="lcLogo" src="https://github.com/carterbanks/test-images/blob/master/lc-logo-placeholder.png?raw=true"/>
              </div>
              {/* SPACE */}
              <div class="container-flex" className="space">
              </div>
              {/* TITLE/TAGLING */}
              <div class="container">
                <h1 class="display-4" className="title-font">The Uber of</h1>
                <h1 class="display-4" className="title-font">Partying</h1>
              </div>
              {/* BUTTON: LOGIN */}
              <div class="containter">
              <button type="button" class="btn btn-primary btn-lg">Login</button>
              </div>
              {/* SPACE */}
              <div class="container-flex" className="space">
              </div>
              {/* BUTTON: SIGN UP */}
              <div class="containter">
              <button type="button" class="btn btn-primary btn-lg">Sign Up</button>
              </div>
              {/* SPACE */}
              <div class="container-flex" className="space">
              </div>
              {/* SPACE */}
              <div class="container-flex" className="space">
              </div>
              {/* SPACE */}
              <div class="container-flex" className="space">
              </div>
              {/* SPACE */}
              <div class="container-flex" className="space">
              </div>
              {/* DISCLAIMER */}
              <div class="container-flex">
              <p class="lead" className="disclaimer">We do not post or share your information. By proceeding, you're confirming that you're 21+ and accept our terms of service.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      
      
    )
  }
}

export default Home;
