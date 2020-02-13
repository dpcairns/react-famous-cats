import React, { Component } from 'react';
import request from 'superagent';
import PersonalizedHeader from './PersonalizedHeader.js';
import './App.css';


export default class App extends Component {
  state = {
    quotes: [],
    query: ''
  }

  async componentDidMount() {
        const query = this.state.query;
        const data = await request.get(`http://futuramaapi.herokuapp.com/api/quotes`)
    
        console.log(data.body);
    
        this.setState({ quotes: data.body })
  }
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  handleClick = async () => {
    // getting the state
    const query = this.state.query;

    this.setState({ loading: true });
    // wait for the request to finish
    const data = await request.get(`http://futuramaapi.herokuapp.com/api/quotes?search=${query}`)

    this.setState({ loading: false });
    // log out the data
    console.log(data.body);

    // set state with that data
    this.setState({ quotes: data.body })
  }

  render() {
    return (
      <main>
        <PersonalizedHeader name="danny" />

        <section className="options-section">
          <p>Search Quotes:</p>
          <input onChange={this.handleChange} name="search" />
          <button onClick={this.handleClick}>🔍</button>
        </section>

        <section className="list-section">
          <p className="paging">
            <button className="prev" disabled>◀</button>
            <span>Page 1 of 5</span>
            <button class="next">▶</button>
          </p>

          <ul className="quotes">
            {this.state.loading 
                ? <h1>LOADING</h1> 
                : this.state.quotes.map(quote => <li className="quote-item" >
                    <h2>
                        <img src={quote.image}
                        alt={quote.character} />
                        <span>{quote.character}</span>
                    </h2>
                    <quote>
                        {quote.quote}
                    </quote>
                    </li >)}
          </ul>
        </section>
      </main >
    )
  }
}