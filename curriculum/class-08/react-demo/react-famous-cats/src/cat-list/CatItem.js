import React, { Component } from "react";
import "./CatItem.css";

class CatItem extends Component {
  render() {
    const cat = this.props.cat;

    return (
      <li class="cat-item">
        <div class="info-container">
          <h2>{cat.name}</h2>
          <p class="cat-type">{cat.type}</p>
        </div>

        <div class="image-container">
          <img src={cat.url} alt={cat.name} />
        </div>
        <p class="year">{cat.year}</p>
      </li>
    );
  }
}

export default CatItem;
