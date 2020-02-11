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
    const { selected } = this.state;
    const catNodes = catData
      .filter(cat => {
        if (!selected) return true;

        return cat.type === selected;
      })
      .map(anything => (
        <Cat
          booger={6}
          name={anything.name}
          type={anything.type}
          url={"garfield.jpeg"}
          year={anything.year}
        />
      ));

    return (
      <div>
        <header>
          <img src="logo192.png" alt="Alchemy Code Lab Logo" />
          <h1>Famous Cats</h1>
        </header>

        <main>
          <section className="options">
            <select className="cat-type-filter" onChange={this.handleChange}>
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
