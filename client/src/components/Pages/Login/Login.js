import React, { Component } from 'react';
//style
import './Login.css';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
//API
import API from '../../../utils/API';
//storage 
import { getFromStorage, setInStorage } from '../../../utils/storage';
//routing
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ChooseRole from '../ChooseRole/ChooseRole';


export class Login extends Component {
  //passing properties 
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      token: ""
    };
    //bind functions for 'this' usage
    this.onSignIn = this.onSignIn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  verfiyToken = () => {
    const obj = getFromStorage('lastCall');
    //if there is a token 
    if (obj) {
      //verify token
      API.verifySignIn(obj.token)
        .then(res => {
          if (res.data.success) {
            console.log(obj.token);
            console.log('Sucess');
            this.setState({
              isLoading: false,
              token: obj.token
            });
          }
          else {
            console.log('No token detected');
            this.setState({
              isLoading: false
            });
          }
        });
      //set state to loading to end loading animation
      //set token to token from local storage
    }
    else {
      //else set state to false to end loading animation
      this.setState({
        isLoading: false
      })
    }
  }
  //when component mounts
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    console.log('Mounted');
    //fetching token from local storage 
    this.verfiyToken();
  }


  //click handler to verify login
  onSignIn = e => {
    //no refresh
    e.preventDefault();

    //set loading state true for animation
    this.setState({
      isLoading: true
    });

    console.log('Mounted');
    //fetching token from local storage 
    const obj = getFromStorage('lastCall');
    //if there is a token 
    if (obj) {
      console.log
      //verify token
      API.userLogin({ email: this.state.email, password: this.state.password })
        .then(res => {
          if (res.data.success) {
            setInStorage('lastCall', { token: res.data.token });
            this.setState({
              isLoading: false,
              token: res.data.token
            });
          } else {
            this.setState({
              isLoading: false
            });
            console.log('Sign in error');
          }
        });

    }

    else {
      //set key in local storage and verify

      //else set state to false to end loading animation
      this.setState({
        isLoading: false
      })
    }

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {


    //if the state is loading (finding token)
    //render loading screen
    if (this.state.isLoading) {
      console.log(this.state.isLoading);
      return (<div><p>Loading...</p></div>);
    }
    //if there is a token in state, render choose your role
    if (this.state.token.length == 24) {
      return(
        <ChooseRole email={this.state.email} token={this.state.token}></ChooseRole>
      )
    }
    //if the state is done loading and there is no token
    if (!this.state.isLoading) {
      // console.log(this.state.token);
      // console.log(this.state.token.length);
      return (
        <div className="container">
            <img className="lc-logo-login" src="https://github.com/carterbanks/test-images/blob/master/lc-logo-placeholder.png?raw=true" />
          <Form onSubmit={this.onSignIn}  id="login-form">
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="email"
                  name="email"
                  id="email-form"
                  placeholder="Email"
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="password"
                  name="password"
                  id="password-form"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <Button id="login-button" type="submit"><h2>Login</h2></Button>
          </Form>
        </div>
      )
    }
  }
}

export default Login;
