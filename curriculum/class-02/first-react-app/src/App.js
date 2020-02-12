import React, { Component } from "react";
import Cat from "./Cat";
import catData from "./data.js";
import "./App.css";

export default class App extends Component {
  state = { selected: null };

  render() {
    const catNodes = catData
      .filter(cat => {
        if (!this.state.selected) return true;

        return cat.type === this.state.selected;
      })
      .map(pet => <Cat feline={pet} />);

    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };

    return (
      <div>
        <header>
          <img src="logo192.png" alt="Alchemy Code Lab Logo" />
          <h1>Famous Cats</h1>
        </header>

        <main>
          <section className="options">
            <select className="cat-type-filter" onChange={handleChange}>
              <option value="" defaultValue>
                All Types
              </option>
              <option value="Angora">Angora</option>
              <option value="Tuxedo">Tuxedo</option>
              <option value="Orange Tabby">Orange Tabby</option>
              <option value="Manx">Manx</option>
            </select>
          </section>

          <section className="list-section">
            <ul className="cats">{catNodes}</ul>
          </section>
        </main>
      </div>
    );
  }
}
