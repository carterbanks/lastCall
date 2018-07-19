import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";

export class ChooseRole extends Component {
  render() {
    return (
      <div>
        <Form>
        <FormGroup row>
        <Label sm={12}>Tonight I am a:</Label>
        </FormGroup>
        <Link
              to="/go-to-a-party"
              className={
                window.location.pathname === "/go-to-a-party"
                      }
              ><Button color="primary" size="lg" block>
Guest
          
        </Button></Link>
        <Link
              to="/host-a-party"
              className={
                window.location.pathname === "/host-a-party"
                      }
              ><Button color="secondary" size="lg" block>
Host
          </Button></Link>
          </Form>
      </div>
    )
  }
}

export default ChooseRole;
