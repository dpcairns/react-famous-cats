import React, { Component } from "react";
import Header from "../common/Header.js";
import CatList from "./CatList.js";
import { getCats } from "../services/cat-api.js";
import "./CatListApp.css";

class CatListApp extends Component {
  state = { cats: [] };

  componentDidMount() {
    getCats().then(cats => {
      console.log(cats);

      this.setState({ cats });
    });
  }

  render() {
    return (
      <div>
        <Header title="List of Cats" />
        <main>
          <CatList cats={this.state.cats} />
        </main>
      </div>
    );
  }
}

export default CatListApp;
