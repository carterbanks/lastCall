/*global google*/
import React, { Component } from 'react';
import './Userinfo.css';
import API from '../../../../utils/API';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Geosuggest from 'react-geosuggest';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

import 'react-datepicker/dist/react-datepicker.css';

export class Userinfo extends Component {

  
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      birthdate: moment(),
      phoneNumber: "",
      location: "",
      password: ""
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  // state = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   birthdate: moment(),
  //   phoneNumber: "",
  //   location: "",
  //   userName: "",
  //   password: ""
  // };

  // this.handleDateChange = this.handleDateChange.bind(this);

  handleFormSubmit = event => {
    event.preventDefault();
    // && this.state.lastName && this.state.email && this.state.phoneNumber && this.state.location && this.state.userName && this.state.password
    if (this.state.firstName
      && this.state.lastName
      && this.state.email
      && this.state.birthdate
      && this.state.password) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        birthdate: this.state.birthdate,
        phoneNumber: this.state.phoneNumber,
        location: this.state.location,
        password: this.state.password
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDateChange(date) {
    this.setState({
      birthdate: date
    });
  };
  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect(suggest) {
    console.log(suggest);
    this.setState({
      location: suggest.description
    });
  }

render() {
  return (
        <div className="container">
          <Form>
        <FormGroup row>
        <Label for="firstName" sm={2}>First name</Label>
        <Col sm={4}>
        <Input type="text" name="firstName" placeholder="First name" onChange={this.handleInputChange} value={this.state.firstName}/>
        </Col>
        <Label for="lastName" sm={2}>Last name</Label>
        <Col sm={4}>
        <Input type="text" name="lastName" placeholder="Last name" onChange={this.handleInputChange} value={this.state.lastName}/>
        </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplephone" sm={2}>Phone number</Label>
          <Col sm={10}>
            <Input name="phoneNumber" id="phoneNumber" placeholder="Phone number" onChange={this.handleInputChange} value={this.state.phoneNumber}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleDate" sm={2}>Birthdate</Label>
          <Col sm={10}>
            <Input type="date" name="birthdate" id="exampleDate" placeholder="date placeholder" selected={this.state.birthdate}/>
          </Col>
          </FormGroup>
        <FormGroup row>
        <Label for="location" sm={2}>Where are you?</Label>
        <Col sm={10}>
        <Geosuggest
          id="geoSuggest"
          ref={el=>this._geoSuggest=el}
          placeholder="Start typing!"
          initialValue=""
          country="us"
          radius="20"
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          onSuggestSelect={this.onSuggestSelect}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={this.handleInputChange} value={this.state.email}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handleInputChange} value={this.state.password}/>
          </Col>
        </FormGroup>
        <Button disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.birthdate && this.state.password)}
            onClick={this.handleFormSubmit} >Submit</Button>
            
      </Form>
      </div>
    // <div className="container userinfo">
    //   <input type="text" aria-label="First name" placeholder="First name" onChange={this.handleInputChange} value={this.state.firstName} name="firstName" />
    //   <input type="text" aria-label="Last name" placeholder="Last name" onChange={this.handleInputChange} value={this.state.lastName} name="lastName" />
    //   <DatePicker
    //     onChange={this.handleDateChange}
    //     selected={this.state.birthdate}
    //     name="birthdate"
    //   />
    //   <input type="text" aria-label="phone number" placeholder="Phone number" onChange={this.handleInputChange} value={this.state.phoneNumber} name="phoneNumber" />

    //         <input type="text" aria-label="email address" placeholder="Email" onChange={this.handleInputChange} value={this.state.email} name="email" />
    //         <input type="text" aria-label="password" placeholder="Password" onChange={this.handleInputChange} value={this.state.password} name="password" />
    //         <input className="btn btn-primary float-right" type="submit" value="Submit" disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.birthdate && this.state.password)}
    //         onClick={this.handleFormSubmit} />
    // </div>

  )
}
}

export default Userinfo
