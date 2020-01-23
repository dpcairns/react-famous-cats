import React from 'react';
import Cat from './Cat';
import catData from './data.js';
import './App.css';

export default class App extends React.Component {
  state = { selected: null };

  render() {
    const { selected } = this.state;
    const catNodes = catData
      .filter(cat => {
        if (!selected) return true

        return cat.type === selected;
      })
      .map(cat => <Cat cat={cat} />)

    const handleChange = (e) => {
      this.setState({ selected: e.target.value });
    }

    return (
      <div>
        <header>
          <img src='logo192.png' alt="Alchemy Code Lab Logo" />
          <h1>Famous Cats</h1>
        </header>

        <main>
          <section className="options">
            <select className="cat-type-filter"
              onChange={handleChange}>
              <option value="" defaultValue>All Types</option>
              <option value="Angora">Angora</option>
              <option value="Tuxedo">Tuxedo</option>
              <option value="Orange Tabby">Orange Tabby</option>
              <option value="Manx">Manx</option>
            </select>
          </section>

          <section className="list-section">
            <ul className="cats">
              {catNodes}
            </ul>
          </section>

        </main>
      </div >
    );
  }
}