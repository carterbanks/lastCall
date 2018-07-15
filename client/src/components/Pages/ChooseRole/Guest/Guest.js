import React, {Component} from "react";
import "./Guest.css";

export default class Guest extends Component {
render(){
    return (<div className="firstdiv">
        <h1>HELLO, {this.props.name} - {this.props.count}</h1>
        <p>{this.props.message}</p>
    </div>);
}


}



