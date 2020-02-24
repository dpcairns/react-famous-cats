import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./CatItem.css";

class CatItem extends Component {
  render() {
    const { cat } = this.props;

    return (
      <li class="cat-item">
        <div class="info-container">
          <h2>{cat.name}</h2>
          <Link to={`update/${cat.id}`}>update</Link>

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
