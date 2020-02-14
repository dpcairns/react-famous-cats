import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = { 
        searchQuery: '',
        characters: [],
     }

    handleSearch = async (e) => {
        e.preventDefault();

        const data = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.state.searchQuery}`)

        this.setState({ characters: data.body.results })
    }

    render() {
        console.log(this.state)
        return (
        <div className="App">
          <header className="App-header">
              <form onSubmit={this.handleSearch}>
                <input onChange={(e) => this.setState({ searchQuery: e.target.value })}/>
                <button>Search!</button>
              </form>
          </header>
          <ul>
              {
                    this.state.characters.map(character => 
                    <Link to={character.name}>
                        <div>
                            <p><img src={ character.image } /></p>
                            <p>name: { character.name }</p>
                            <p>species: { character.species }</p>
                            <p>status { character.status }</p>
                        </div>
                    </Link>)
              }
          </ul>
        </div>
      );
    }
}