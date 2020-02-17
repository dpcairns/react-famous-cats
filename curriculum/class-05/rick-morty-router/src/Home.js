import React, { Component } from 'react';
import request from 'superagent';
import CharacterItem from './CharacterItem.js';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = { 
        searchQuery: this.props.match.params.name,
        characters: [],
     }

     async componentDidMount() {
         if (this.props.match.params.name) {
             const data = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.props.match.params.name}`)
     
             this.setState({ characters: data.body.results })
         }
     }

     async componentWillUpdate(nextProps) {
         const param = this.props.match.params.name;
         let nextParam = nextProps.match.params.name;

         if (param !== nextParam && !nextParam) {
            this.setState({ 
                characters: [],
                searchQuery: ''
             })         }
     }

    handleSearch = async (e) => {
        e.preventDefault();

        const data = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.state.searchQuery}`)

        this.setState({ 
            characters: data.body.results, })
        

     this.props.history.push(this.state.searchQuery)

    }

    handleChange = (e) => this.setState({ searchQuery: e.target.value })

    render() {
        return (
        <div className="App">
          <header className="App-header">
            <SearchBar 
                searchQuery={this.state.searchQuery}
                handleSearch={this.handleSearch} 
                handleChange={this.handleChange}
            />
          </header>
          <ul>
              {
                    this.state.characters.map(character => 
                    <Link to={`characters/${character.name}`}> 
                        <CharacterItem character={character} />
                    </Link>)
              }
          </ul>
        </div>
      );
    }
}