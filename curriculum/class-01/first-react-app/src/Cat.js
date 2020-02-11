import React, { Component } from "react";

export default class Cat extends Component {
  render() {
    return (
        <div>sibling</div>
        <li>
          <div className="info-container">
            <h2>{this.props.name}</h2>
            <p>Is it boogery?:{String(this.props.booger)}</p>
            <p className="cat-type">{this.props.type}</p>
          </div>

          <div className="image-container">
            <img alt={this.props.url} src={this.props.url} />
          </div>
          <p className="year">{this.props.year}</p>
        </li>
      
    );
  }
}
