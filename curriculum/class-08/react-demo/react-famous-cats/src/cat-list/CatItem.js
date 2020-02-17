import React, { Component } from "react";
import "./CatItem.css";

class CatItem extends Component {
  render() {
    const cat = this.props.cat;

    return (
      <li className="cat-item">
        <div className="info-container">
          <h2>{cat.name}</h2>
          <p className="cat-type">{cat.type}</p>
        </div>

        <div className="image-container">
          <img src={cat.url} alt={cat.name} />
        </div>
        <p className="year">{cat.year}</p>
      </li>
    );
  }
}

export default CatItem;
