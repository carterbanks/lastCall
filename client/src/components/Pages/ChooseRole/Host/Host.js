import React, { Component } from 'react';
import API from '../../../../utils/API';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
      description: "This user did not add a description. Request an invitation at your own risk.",
      guestAge: [21, 99],
      guestDistance: [1],
      guestAmount: [2, 40]
    };
    // this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // && this.state.lastName && this.state.email && this.state.phoneNumber && this.state.location && this.state.userName && this.state.password
    if (this.state.location && this.state.distanceTravel && this.state.ageMin && this.state.ageMax && this.state.description) {
      API.saveHost({
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

  onLocationSet(data) {
    // data.description
    // data.coords.lat
    // data.coords.lng
  };


  render() {
    return (
      <div className="container host">

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
            <Label for="exampleEmail" sm={2}>Address<br/>(private until accepted guest)</Label>
            <Col sm={10}>
              <Input type="address" name="address" id="exampleaddress" placeholder="1234 Party St. Boston, MA " />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleSelect" sm={2}>Distance Viewable</Label>
            <Col sm={10}>
            <Slider 
            min={1}
            max={100} 
            handle={handle}
            defaultValue={1}
            onChange={guestDistance=>this.setState({guestDistance})}
            trackStyle={{ backgroundColor: 'gray', height: 10 }}
            railStyle={{ backgroundColor: 'red', height: 10 }}
          />
            <span>{this.state.guestDistance} miles</span>  
            <span style={{float:"right"}}>100 miles</span>
            </Col>
          </FormGroup>
          <FormGroup row>
          <Label for="exampleSelect" sm={2}>Age Group of Guests</Label>
          <Col sm={10}>
          <Range 
          min={21}
          max={99}
          defaultValue={this.state.guestAge}
          allowCross={false}
          onChange={guestAge=>this.setState({guestAge})}
          trackStyle={[{ backgroundColor: 'red', height: 10 }, { backgroundColor: "gray", height: 10}]}
          railStyle={{ backgroundColor: 'gray', height: 10 }}/>
          <span>{this.state.guestAge[0]}</span>  
          <span style={{float:"right"}}>{this.state.guestAge[1]}</span>
          </Col>
          </FormGroup>
          <FormGroup row>
          <Label for="exampleSelect" sm={2}>Guest party limit</Label>
          <Col sm={10}>
          <Range 
          min={2}
          max={40}
          defaultValue={this.state.guestAmount}
          allowCross={false}
          onChange={guestAmount=>this.setState({guestAmount})}
          trackStyle={[{ backgroundColor: 'red', height: 10 }, { backgroundColor: "gray", height: 10}]}
          railStyle={{ backgroundColor: 'gray', height: 10 }}
          />
          <span>{this.state.guestAmount[0]}</span>  
          <span style={{float:"right"}}>{this.state.guestAmount[1]}</span>
          </Col>
        </FormGroup>
          <FormGroup row>
          <Label for="checkbox2" sm={2}> Smoking is allowed: </Label>
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
            <Label for="checkbox2" sm={2}> Guests must bring: </Label>
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
          <FormGroup row>
          <Label for="exampleFile" sm={2}>Party images</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Post a picture of your party. You know, if you want people to come.
        </FormText>
          </Col>
        </FormGroup>
          <FormGroup check row>
          <FormGroup row>
          <Label for="exampleText" sm={2}>Description</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" placeholder="Remember to include important details, ground rules, and prerequisites for your party. Always be alert with people you don't know entering your place of residence."/>
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

export default Host
