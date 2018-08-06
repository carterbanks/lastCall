import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import API from '../../../utils/API';
import { getFromStorage, setInStorage } from '../../../utils/storage';
import { Link } from "react-router-dom";


export class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      token: ""
    };

  }

  componentDidMount() {
    const obj = getFromStorage('lastCall');
    if (obj) {
      //Verify token
      fetch('/api/verify?token=' + obj)
        .then(res => res.json())
        .then(json => {

        });
    }
    else {
      this.setState({
        isLoading: false
      })
    }
  }

  onSignIn() {

    this.setState({
      isLoading: true
    });

    API.userLogin({
      email: this.state.email,
      password: this.state.password
    })
      .then(res => res)
      .then(json => {
        console.log('json ', json);
        if (json.data.success) {
          setInStorage('lastCall', { token: json.data.token });
          console.log(json.data.token)
          this.setState({
            isLoading: false,
            email: '',
            password: '',
            token: json.data.token
          });
          console.log(this.state.token);

        } else {
          this.setState({
            isLoading: false
          });
        }
      }).catch(err => console.log(err));

  }

  handleFormSubmit = event => {
    this.onSignIn();
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email
          </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password"
                onChange={this.handleInputChange} 
              />
            </Col>
          </FormGroup>
          <Button onClick={this.handleFormSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Login;
