import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import request from 'superagent';

export default class Home extends Component {
    state = { 
        searchQuery: '',
        characters: [],
     }

    handleSearch = async () => {
        const data = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.state.searchQuery}`)

        console.log(data)
        this.setState({ characters: data.body.results })
    }

    render() {
        console.log(this.state)
        return (
        <div className="App">
          <header className="App-header">
            <input onChange={(e) => this.setState({ searchQuery: e.target.value })}/>
            <button onClick={this.handleSearch}>Search!</button>
          </header>
          <ul>
              {
                    this.state.characters.map(character => 
                    <Link to={character.name}>
                        <li>
                            <p>name: {character.name}</p>
                            <img src={character.image} />
                        </li>
                    </Link>)
              }
          </ul>
        </div>
      );
    }
}