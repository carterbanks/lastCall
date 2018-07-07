import React, { Component } from 'react';
import './Birthdate.css';

export class Birthdate extends Component {



  render() {

    // define variables

// 
    return (
      <form>
        <div className="nativeDatePicker">
          <label for="bday">Enter your birthday:</label>
          <input type="date" id="bday" name="bday" />
          <span class="validity"></span>
        </div>
        <p className="fallbackLabel">Enter your birthday:</p>
        <div className="fallbackDatePicker">
          <span>
            <label for="day">Day:</label>
            <select id="day" name="day">
            </select>
          </span>
          <span>
            <label for="month">Month:</label>
            <select id="month" name="month">
              <option selected>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </span>
          <span>
            <label for="year">Year:</label>
            <select id="year" name="year">
            </select>
          </span>
        </div>
      </form>
    )
  }
}

export default Birthdate;
