import React, { Component } from 'react';

export class Navigation extends Component {
  render() {
    return (
      <div>
        {/* NAV BAR */}
        <div class="container-flex">
          <nav class="navbar navbar-light bg-light" className="lcNav">
            <ul class="nav nav-fill">
              <li class="nav-item">
                <a class="navbar-brand" href="#">
                  <img className="left-arrow" src="https://github.com/carterbanks/test-images/blob/master/left-arrow.png?raw=true" />
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="#"> */}
                <h2 className="home-button nav-title">Home</h2>
                  <img className="account-profile" src="https://github.com/carterbanks/test-images/blob/master/lc-account-img.png?raw=true" />
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="#">
                  <img className="message-bubble" src="https://github.com/carterbanks/test-images/blob/master/lc-message-img.png?raw=true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navigation
