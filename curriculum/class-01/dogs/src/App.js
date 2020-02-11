import React, { Component } from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import "./App.css";

const myLogo = "http://www.placekitten.com/100/100";

export default class App extends Component {
  state = {
    username: "Suzie",
    usernameInInput: "",
    counter: 0
  };

  handleInputChange = e => this.setState({ usernameInInput: e.target.value });

  handleButtonClick = () =>
    this.setState({
      username: this.state.usernameInInput
    });

  handleIncrementClick = e =>
    this.setState({
      counter: this.state.counter + 1
    });

  render() {
    return (
      <div className="App">
        <button onClick={this.handleIncrementClick}>Increment Counter</button>
        <div>{this.state.counter}</div>
        <Header logo={myLogo} username={this.state.username} />
        <Body />
        <Footer phoneNumber={9513467234} />
        <input onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>login</button>
      </div>
    );
  }
}
