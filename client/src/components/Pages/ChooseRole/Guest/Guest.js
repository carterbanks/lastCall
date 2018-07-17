import React, { Component } from 'react';
import API from '../../../../utils/API';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Location from 'react-place';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export class Guest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "",
      distanceTravel: 0,
      ageMin: 0,
      ageMax: 0,
      smoking: false,
      hasAlcohol: false,
      hasFood: false,
      hasMoney: false,
      hasDD: false,
      description: "This user did not add a description. Accept request at your own risk.",
      partyAge: [21, 99],
      partyDistance: [1]
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // && this.state.lastName && this.state.email && this.state.phoneNumber && this.state.location && this.state.userName && this.state.password
    if (this.state.location && this.state.distanceTravel && this.state.ageMin && this.state.ageMax && this.state.description) {
      API.saveGuest({
        location: this.state.location,
        distanceTravel: this.state.distanceTravel,
        ageMin: this.state.ageMin,
        ageMax: this.state.ageMax,
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

  handleDateChange(date) {
    this.setState({
      birthdate: date
    });
  };

  onLocationSet(data) {
    // data.description
    // data.coords.lat
    // data.coords.lng
  };


  render() {
    return (
      <div className="container guest">

        <Form>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>Who are you with?</Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                Snap a pic of your group!
</FormText>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Location</Label>
            <Col sm={10}>
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
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleSelect" sm={2}>Distance willing to travel</Label>
            <Col sm={10}>
              <Slider
                min={1}
                max={100}
                handle={handle}
                defaultValue={1}
                onChange={partyDistance => this.setState({ partyDistance })}
                trackStyle={{ backgroundColor: 'gray', height: 10 }}
                railStyle={{ backgroundColor: 'red', height: 10 }}
              />
              <span>{this.state.partyDistance} miles</span>
              <span style={{ float: "right" }}>100 miles</span>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>Age Group of Party People</Label>
            <Col sm={10}>
              <Range
                min={21}
                max={99}
                defaultValue={this.state.partyAge}
                allowCross={false}
                onChange={partyAge => this.setState({ partyAge })}
                trackStyle={[{ backgroundColor: 'red', height: 10 }, { backgroundColor: "gray", height: 10 }]}
                railStyle={{ backgroundColor: 'gray', height: 10 }} />
              <span>{this.state.partyAge[0]}</span>
              <span style={{ float: "right" }}>{this.state.partyAge[1]}</span>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}> Allow smoking (WARNING the checkboxes below may deter your ability to find local parties): </Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Inside
</Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Outside
</Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}> You are able to bring: </Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Alcohol
</Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Food
</Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Money
</Label>
              </FormGroup>

            </Col>

          </FormGroup>
          <FormGroup check row>
            <FormGroup row>
              <Label for="exampleText" sm={2}>Description</Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" placeholder="Remember to include important details, respect ground rules, obey local and federal laws, and overall, don't be a shitty person. Always be alert entering the place of residence of people you don't know." />
              </Col>
            </FormGroup>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>

          </FormGroup>

        </Form>
      </div>
    )
  }
}

export default Guest
