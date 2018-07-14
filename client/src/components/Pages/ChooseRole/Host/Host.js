import React, { Component } from 'react'

export class Host extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "",
      distanceView: 0,
      ageMin: 0,
      ageMax: 0,
      guestMin: 0,
      guestMax: 0,
      smoking: false,
      hasAlcohol: false,
      hasFood: false,
      hasMoney: false,
      hasDD: false,
      description: "This user did not add a description. Request an invitation at your own risk."
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // && this.state.lastName && this.state.email && this.state.phoneNumber && this.state.location && this.state.userName && this.state.password
    if (this.state.location && this.state.distanceTravel && this.state.ageMinb && this.state.ageMax && this.state.description) {
      API.saveGuest({
        location: this.state.location,
        distanceTravel: this.state.distanceTravel,
        ageMin: this.state.ageMin,
        ageMax: this.state.ageMax,
        guestMin: this.state.guestMin,
        guestMax: this.state.guestMax,
        smoking: this.state.smoking,
        hasAlcohol: this.state.hasAlcohol,
        hasFood: this.state.hasFood,
        hasMoney: this.state.hasMoney,
        hasDD: this.state.hasDD,
        description: this.state.description
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

  onLocationSet(data){
    // data.description
    // data.coords.lat
    // data.coords.lng
  };

  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Host
