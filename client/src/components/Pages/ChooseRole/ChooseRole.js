import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//routing
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
//API
import API from '../../../utils/API';
//storage 
import { getFromStorage, setInStorage } from '../../../utils/storage';
import Home from '../Home/Home';
import './ChooseRole.css';

export class ChooseRole extends Component {

  //passing properties 
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      token: "",
      email: "",
      firstName: "",
      birthdate: ""
    };
    //bind functions for 'this' usage

  }

  getUser = (props) => {
    //set state to loading for loading animation
    //set state the the email property passed from login
    this.setState({
      isLoading: true,
      email: this.props.email
    });

    //email = email in props
    const email = this.props.email;
    console.log(this.props.email);

    //send api get request to match the email in props to email in db
    API.getUser(email).then(res => {
      
      //once the email matches a user in the db
      if(res.data[0]) {
        console.log(res);
        //set state to the firstname and birthdate of the user
        this.setState({
          firstName: res.data[0].firstName,
          birthdate: res.data[0].birthdate
        });
      }
      //if not, let us know no user is found
      else {
        console.log('No user found');
      }
      console.log(`First name is ${this.state.firstName} and DOB is ${this.state.birthdate}`);
    });
    //Did it work?

  }

  //verifies token from local storage for usersession
  verfiyToken = () => {
    this.setState({
      isLoading: true
    });
    const obj = getFromStorage('lastCall');
    //if there is a token 
    if (obj) {
      //verify token
      API.verifySignIn(obj.token)
        .then(res => {
          if (res.data.success) {
            //set state to loading to end loading animation
            //set token to token from local storage
            console.log('Successful token fetch');
            this.setState({
              isLoading: false,
              token: obj.token
            });
            // API.getUser(this.state.token).then(res => console.log(res));
          }
          else {
            console.log('No token detected');
            this.setState({
              isLoading: false
            });
          }
        });
    }
    else {
      //else set state to false to end loading animation
      this.setState({
        isLoading: false
      })
    }
  }

  componentDidMount() {
    this.verfiyToken();
    this.getUser();
  }


  render() {
    //if the state is loading (finding token)
    //render loading screen

    if (this.state.isLoading) {
      console.log(this.state.isLoading);
      return (<div><p>Loading...</p></div>);
    }
    //if there is a token in state, render choose your role
    if (!this.state.token) {
      <Home></Home>
    }
    //if the state is done loading and there is no token
    if (!this.state.isLoading) {
      console.log(this.state.token);
      console.log(this.state.token.length);

      return (
        <div>
          <h1 className="first-name">{this.state.firstName}</h1>
          {/* <h2 className="birthdate">{this.state.birthdate}</h2> */}
          <Form id="choose-role">
            <FormGroup row>
              <Label sm={12}>Tonight I am a:</Label>
            </FormGroup>
            <Link
              to="/go-to-a-party"
              className={
                window.location.pathname === "/go-to-a-party"
              }
            >
            <Button color="primary" size="lg" block sm={12}>
                Guest
              </Button>
            </Link>
            <Link
              to="/host-a-party"
              className={
                window.location.pathname === "/host-a-party"
              }
            >
            <Button color="primary" size="lg" block sm={12}>
                Host
              </Button>
            </Link>
          </Form>
        </div>
      )
    }
  }
}

export default ChooseRole;
