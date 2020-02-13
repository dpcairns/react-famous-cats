import React, { Component } from 'react';

export default class PersonalizedHeader extends Component {
    render() {
        return <header>
            <section>
                <h1>Futurama Quotes for {this.props.name}</h1>
            </section>
            <nav>
                <a href="./">Home</a>
                <a href="quotes.html">Quotes</a>
            </nav>
        </header>
    }
}