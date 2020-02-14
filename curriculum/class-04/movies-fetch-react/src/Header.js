import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return <h3>{this.props.headerText} </h3>;
  }
}
