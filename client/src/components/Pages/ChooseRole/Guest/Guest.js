/*global google*/
import React, { Component } from 'react';
import API from '../../../../utils/API';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Geosuggest from 'react-geosuggest';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import { Link } from "react-router-dom";

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
      guestLocation: "",
      smokingIn: false,
      smokingOut: false,
      hasAlcohol: false,
      hasFood: false,
      hasMoney: false,
      hasDD: false,
      description: "",
      partyAge: [21, 99],
      partyDistance: 1
    };
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  handleGuestFormSubmit = event => {
    event.preventDefault();
    // && this.state.lastName && this.state.email && this.state.phoneNumber && this.state.location && this.state.userName && this.state.password
    if (this.state.description) {
      API.saveGuest({
        guestLocation: this.state.guestLocation,
        smokingIn: this.state.smokingIn,
        smokingOut: this.state.smokingOut,
        hasAlcohol: this.state.hasAlcohol,
        hasFood: this.state.hasFood,
        hasMoney: this.state.hasMoney,
        hasDD: this.state.hasDD,
        description: this.state.description,
        partyAge: this.state.partyAge,
        partyDistance: this.state.partyDistance
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
      guestLocation: suggest.description
    });
  }


  render() {
    return (
      <div className="container guest">

        <Form>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>Who are you with?</Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="#cd4559">
                or
              </FormText>
              <FormText color="muted">
                Snap a pic of your group!
              </FormText>
              <button type="button">
              <Link
                    to="/camera"
                    className={
                      window.location.pathname === "/camera"
                    }
                    style= {{color: "black"}}
                  >Take a First Impression
                      </Link></button>
            </Col>
          </FormGroup>
          <FormGroup row>
        <Label for="location" sm={2}>Your current location</Label>
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
                value={this.state.partyDistance}
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
                railStyle={{ backgroundColor: 'gray', height: 10 }}
                value={[this.state.partyAge[0], this.state.partyAge[1]]} />
              <span>{this.state.partyAge[0]}</span>
              <span style={{ float: "right" }}>{this.state.partyAge[1]}</span>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}> Allow smoking (WARNING the checkboxes below may deter your ability to find local parties): </Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" valid={true} value={this.state.smokingIn} /> Inside
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" valid={true} value={this.state.smokingOut} /> Outside
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}> You are able to bring: </Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" valid={true} value={this.state.hasAlcohol} /> Alcohol
            </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" valid={true} value={this.state.hasFood} /> Food
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" valid={true} value={this.state.hasMoney} /> Money
                </Label>
              </FormGroup>

            </Col>
          </FormGroup>
          <FormGroup check row>
            <FormGroup row>
              <Label for="exampleText" sm={2}>Description</Label>
              <Col sm={10}>
                <Input type="textarea" name="description" id="exampleText" value={this.state.description} onChange={this.handleInputChange} placeholder="Remember to include important details, respect ground rules, obey local and federal laws, and overall, don't be a shitty person. Always be alert entering the place of residence of people you don't know." />
              </Col>
            </FormGroup>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button onClick={this.handleGuestFormSubmit}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Guest
