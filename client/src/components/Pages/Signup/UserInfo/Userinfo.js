import React, { Component } from 'react';
import './Userinfo.css';
import API from '../../../../utils/API';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Location from 'react-place';

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
    if (this.state.firstName && this.state.lastName && this.state.email && this.state.birthdate && this.state.location && this.state.password) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        birthdate: this.state.birthdate,
        phoneNumber: this.state.email,
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


 onLocationSet(data){
  // data.description
  // data.coords.lat
  // data.coords.lng
};

render() {
  return (
    <div className="container userinfo">
      <input type="text" aria-label="First name" placeholder="First name" onChange={this.handleInputChange} value={this.state.firstName} name="firstName" />
      <input type="text" aria-label="Last name" placeholder="Last name" onChange={this.handleInputChange} value={this.state.lastName} name="lastName" />
      <DatePicker
        onChange={this.handleDateChange}
        selected={this.state.birthdate}
        name="birthdate"
      />
      <input type="text" aria-label="phone number" placeholder="Phone number" onChange={this.handleInputChange} value={this.state.phoneNumber} name="phoneNumber" />
      <Location
        country='US'
        noMatching='Sorry, I can not find {{value}}.'
        onLocationSet={this.onLocationSet}
        name= "location"
        value = {this.state.location}
        inputProps={{
          style: { color: '#0099FF' },
          className: 'location',
          placeholder: 'Where are you?'
        }}
      />
            <input type="text" aria-label="email address" placeholder="Email" onChange={this.handleInputChange} value={this.state.email} name="email" />
            <input type="text" aria-label="password" placeholder="Password" onChange={this.handleInputChange} value={this.state.password} name="password" />
            <input className="btn btn-primary float-right" type="submit" value="Submit" disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.birthdate && this.state.password)}
            onClick={this.handleFormSubmit} />
    </div>

  )
}
}

export default Userinfo
