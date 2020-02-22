import React, { Component } from "react";
import CatItem from "./CatItem.js";
import "./CatList.css";

class CatList extends Component {
  render() {
    return (
      <ul class="cats">
        {this.props.cats 
            ? this.props.cats.map(cat => <CatItem cat={cat} />)
            : <img src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/44b8374c-5758-4aa0-b67e-1a860c4711e6/da44c7fa-af57-454b-9c1a-507a1e725134_rw_1200.gif?h=23930b6e9619152673b750aeac8b6270" />}
      </ul>
    );
  }
}

export default CatList;
