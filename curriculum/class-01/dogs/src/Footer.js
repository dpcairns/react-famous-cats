import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return <div> Contact us | {this.props.phoneNumber} </div>;
  }
}
