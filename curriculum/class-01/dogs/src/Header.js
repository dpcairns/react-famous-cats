import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <img src={this.props.logo} />
        <span>Hello, {this.props.username}!</span>
      </div>
    );
  }
}
