import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../../utils/API';
import { getFromStorage, setInStorage } from '../../../utils/storage';
import { withRouter } from "react-router-dom";
import './Home.css';
import ChooseRole from '../ChooseRole/ChooseRole';

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      token: ""
    };

  }
  // this.handleDateChange = this.handleDateChange.bind(this);
  // this.onSuggestSelect = this.onSuggestSelect.bind(this);

  componentDidMount() {
    const obj = getFromStorage('lastCall');
    console.log(obj);
    if (obj && obj.token) {
      //Verify token
      const token = obj.token;
      console.log(token);
      API.verifySignIn(token)
        .then(res => res.data.success)
        .then(res => {
          //If there is a token
          //Update state to token and halt loading
          if (res) {
            this.setState({
              token: token,
              isLoading: false
            });

          } else if (!res) {
            this.setState({
              isLoading: false
            });
          }
        });
    }
    else {
      this.setState({
        isLoading: false
      });
    }
  }


  render() {

    const {
      isLoading,
      token
    } = this.state;

    if (this.state.isLoading) {
      console.log(isLoading);
      return (<div><p>Loading...</p></div>);
    }

    if (this.state.token.length === 24) {
      return(
      <ChooseRole token={this.state.token}></ChooseRole>
      )
    }

    if (!this.state.isLoading) {
      console.log(token);
      console.log(token.length);
      return (
        <div className="container-flex row">
          <div className="jumbotron jumbotron-fluid phone-screen">
            {/* LOGO */}
            <div className="container-flex col-sm-12">
              <img className="lcLogo" src="https://github.com/carterbanks/test-images/blob/master/lc-logo-placeholder.png?raw=true" />
            </div>
            {/* DISCLAIMER */}
            <div className="container-flex col-sm-12">
              <p className="lead-disclaimer">We do not post or share your information. By proceeding, you're confirming that you're 21+ and accept our terms of service.</p>
            </div>
            {/* TITLE/TAGLING */}
            {/* <div className="container">
                  <h1 className="display-4 title-font">The Uber of</h1>
                  <h1 className="display-4 title-font">Partying</h1>
                </div> */}
            {/* BUTTON: LOGIN */}
            <div className="container" className="login-signup-buttons col-sm-12">
              <Link to="/login"
                className={
                  window.location.pathname === "/login"
                }><button type="button" className="btn btn-primary btn-lg">

                  Login
                      </button></Link>

              {/* BUTTON: SIGN UP */}

              <Link
                to="/signup"
                className={
                  window.location.pathname === "/signup"
                }
              ><button type="button" className="btn btn-primary btn-lg">
                  Sign Up
                      </button></Link>
            </div>
          </div>
        </div>


      );
    }
  }
}


export default withRouter(Home);
