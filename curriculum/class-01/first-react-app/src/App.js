import React from "react";
import Cat from "./Cat";
import catData from "./data.js";
import "./App.css";

export default class App extends React.Component {
  state = { selected: null };

  handleChange = e => {
    this.setState({ selected: e.target.value });
  };

  render() {
    );
  }
}
