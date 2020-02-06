import React, { Component } from "react";
import CatItem from "./CatItem.js";
import "./CatList.css";

class CatList extends Component {
  render() {
    console.log(this.props);

    return (
      <ul class="cats">
        {this.props.cats && this.props.cats.map(cat => <CatItem cat={cat} />)}
      </ul>
    );
  }
}

export default CatList;
