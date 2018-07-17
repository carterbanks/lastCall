import React, {Component} from "react";

export default class Btn extends Component {
    onClick = event=>{
        this.props.onClick();
    }
    
    render() {
       return <button name="button" onClick={event=>this.onClick(event)}>Click Me!</button>;
    }
}