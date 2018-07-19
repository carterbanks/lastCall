import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export class Login extends Component {
  render() {
    return (
      <div className="container">
      <Form>
        <FormGroup row>
          <Label for="exampleEmail"  sm={2}>Email</Label>
          <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="examplePassword" sm = {2}>Password</Label>
          <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
          </Col>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
      </div>
    )
  }
}

export default Login;
