import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../../utils/API';
import { getFromStorage, setInStorage } from '../../../utils/storage';
import { Route, Redirect } from 'react-router';
import './Home.css';

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      token: ''
    };

  }
    // this.handleDateChange = this.handleDateChange.bind(this);
    // this.onSuggestSelect = this.onSuggestSelect.bind(this);

    componentDidMount() {
      const token = getFromStorage('lastCall');
      if(token) {
        //Verify token
        API.verifySignIn({token})
        .then(res => res.json())
        .then(json => {
          if(json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
      } else {
        this.setState({
          isLoading: false
        });
      }
    };


  render() {

    const {
      isLoading,
      token
    } = this.state;

    if(isLoading) {
      return(<div><p>Loading...</p></div>);
    } 
    if(token) {
<Redirect to="/dashboard"/>
    }
    if(!token) {

    return (
      <div>
        <div className="section">
          <div className="container-flex">
            <div className="jumbotron jumbotron-fluid phone-screen">
            {/* NAV BAR */}
              {/* <div class="container-flex">
              <nav class="navbar navbar-light bg-light" className="lcNav">
                <ul class="nav nav-fill">
                <li class="nav-item">
                <a class="navbar-brand" href="#">
                <img className="left-arrow" src="https://github.com/carterbanks/test-images/blob/master/left-arrow.png?raw=true"/>
                </a>
                </li>
                <li class="nav-item">
                <a class="navbar-brand" href="#"> */}
                {/* <h2 className="home-button nav-title">Home</h2>  */}
                {/* <img className="account-profile" src="https://github.com/carterbanks/test-images/blob/master/lc-account-img.png?raw=true"/>
                </a>
                </li>
                <li class="nav-item">
                <a class="navbar-brand" href="#">
                <img className="message-bubble" src="https://github.com/carterbanks/test-images/blob/master/lc-message-img.png?raw=true"/>
                </a>
                </li>
                </ul>
              </nav>
              </div> */}
              {/* SPACE */}
              <div className="container-flex space">
              </div>
              {/* SPACE */}
              <div className="container-flex space">
              </div>
              {/* LOGO */}
              <div className="container-flex">
              <img className="lcLogo" src="https://github.com/carterbanks/test-images/blob/master/lc-logo-placeholder.png?raw=true"/>
              </div>
              {/* SPACE */}
              <div className="container-flex space">
              </div>
              {/* TITLE/TAGLING */}
              <div className="container">
                <h1 className="display-4 title-font">The Uber of</h1>
                <h1 className="display-4 title-font">Partying</h1>
              </div>
              {/* BUTTON: LOGIN */}
              <div className="container">
              <Link                     to="/login"
                    className={
                      window.location.pathname === "/login"
                    }><button type="button" className="btn btn-primary btn-lg">
            
                  Login
                      </button></Link>
              </div>
              {/* SPACE */}
              <div className="container-flex space">
              </div>
              {/* BUTTON: SIGN UP */}
              <div className="container">
              <Link
                    to="/signup"
                    className={
                      window.location.pathname === "/signup"
                    }
                  ><button type="button" className="btn btn-primary btn-lg">
Sign Up
                      </button></Link>
              </div>
              {/* SPACE */}
              <div className="container-flex space">
              </div>
              {/* SPACE */}
              <div className="container-flex space">
              </div>
              {/* SPACE */}
              <div className="container-flex space">
              </div>
              {/* SPACE */}
              <div className="container-flex space">
              </div>
              {/* DISCLAIMER */}
              <div className="container-flex">
              <p className="lead disclaimer">We do not post or share your information. By proceeding, you're confirming that you're 21+ and accept our terms of service.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      
      
    );
  }
  }
}

export default Home;
