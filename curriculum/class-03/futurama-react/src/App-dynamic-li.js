import React, { Component } from 'react';
import './App.css';

const quotes = [
    {
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png',
        quote: 'Everybody\'s a jerk: you, me, this jerk.',
        character: 'Bender',
    },
    {
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png',
        quote: 'Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.',
        character: 'Fry',
    },
];
export default class App extends Component {
    render() {
        const quoteNodes = quotes.map(quote => <li className="quote-item" >
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
                    <input name="search" />
                    <button>🔍</button>
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

export default App;
