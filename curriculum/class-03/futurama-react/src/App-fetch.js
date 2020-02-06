import React, { Component } from 'react';
import request from 'superagent';
import './App.css';


export default class App extends Component {
    state = {
        quotes: [],
        query: ''
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }

    handleClick = async () => {
        const query = this.state.query;
        const data = await request.get(`http://futuramaapi.herokuapp.com/api/quotes?search=${query}`)

        console.log(data.body);

        this.setState({ quotes: data.body })
    }

    render() {
        const quoteNodes = this.state.quotes.length && this.state.quotes.map(quote => <li className="quote-item" >
            <h2>
                <img src={quote.image}
                    alt={quote.character} />
                <span>{quote.character}</span>
            </h2>
            <quote>
                {quote.quote}
            </quote>
        </li >)

        return (
            <main>
                <header>
                    <section>
                        <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo" />
                        <h1>Futurama Quotes</h1>
                    </section>
                    <nav>
                        <a href="./">Home</a>
                        <a href="quotes.html">Quotes</a>
                    </nav>
                </header>

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
                        {quoteNodes}
                    </ul>
                </section>
            </main >
        )
    }
}