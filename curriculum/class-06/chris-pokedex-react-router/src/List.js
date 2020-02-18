import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokeItem from './PokeItem.js';
import Searching from './Searching.js';
import Paging from './Paging.js';
import { getPokemon } from './api.js';

export default class List extends Component {
    state = {
        pokeDex: [],
        page: 1,
        pokemon: '', // search query for our fetch/input text
        searchType: 'pokemon', // if we're searching by type
        totalPokemon: 801, // used for calculate paging
        perPage: 20, // used for calculate paging 
        maxPage: 41 // used for calculate paging
    }

    // when the component initially mounts . . .
    async componentDidMount() {
        // if the the current page is not a number
        if (isNaN(this.state.page)) {
            // set the page to 1
            this.setState({ page: 1 })
        }

        // if the url has no pokemon param
        if (!this.props.match.params.pokemon) {
            // set the value of that param to an empty string
            this.props.match.params.pokemon = '';
            // set the type search to general pokemon
            this.setState({ searchType: 'pokemon' })
        }

        // go get something from the dom
        const nameCheck = document.getElementById('name-check');
        nameCheck.checked = true;

        // set the type search to the default value
        this.setState({ searchType: nameCheck.value })

        const paramSplit = this.props.match.params.pokemon.split('_');
        // go parse the url to get the type, detail, and page
        const searchType = paramSplit[0];
        const searchDetail = paramSplit[1];
        const searchPage = paramSplit[2];
        this.props.match.params.pokemon = searchDetail;

        // if there is a pokemon in the URL . . .
        if (this.props.match.params.pokemon) {
            // set the state of the search chris's patented params-like string
            this.setState({ 
                searchType: searchType,
                pokemon: searchDetail,
                page: searchPage,
             })
            console.log(searchType);
        }

        // make the fetch using the pieces of chris's patented string
        const pokeOnline = await getPokemon(searchDetail, searchType, searchPage);

        // set the data as state
        this.setState({ pokeDex: pokeOnline.body.results });
        // set the total results as state
        this.setState({ totalPokemon: pokeOnline.body.count });
        // set the maximum number of stages to state
        this.setState({ maxPage: Math.ceil(this.state.totalPokemon / this.state.perPage) })
    }



    handlePageChange = async (incre) => { // incre is -1 or 1
        // go numberize the current page
        const currentPage = Number(this.state.page);
        // calculate the new page by adding the increment to the current page
        const newPage = currentPage + incre;
        // set the state to our new page
        this.setState({ page: newPage })
        // break out of react to assign props (anti-pattern!)
        this.props.match.params.pokemon = `${this.state.searchType}_${this.state.pokemon}_${newPage}`;

        // fetch the pokemon for this page and set them in the state
        const pokeOnline = await getPokemon(this.state.pokemon, this.state.searchType, newPage);
        this.setState({ pokeDex: pokeOnline.body.results });
        this.setState({ maxPage: Math.ceil(this.state.totalPokemon / this.state.perPage) })

        // manipulate the url
        this.props.history.push(`${this.props.match.params.pokemon.toString()}`);
    }

    handleSearchClick = async e => {
        // prevent refresh
        e.preventDefault();
        // break out of react to set props and state explicitly (anti-pattern!)
        this.state.page = 1;
        this.props.match.params.pokemon = `${this.state.searchType}_${this.state.pokemon}_${this.state.page}`;

        // go make a fetch passing arguments stored in state
        const newPokemonOnline = await getPokemon(this.state.pokemon, this.state.searchType, this.state.page);

        // use the data from the fetch to update state
        this.setState({ pokeDex: newPokemonOnline.body.results });
        this.setState({ totalPokemon: newPokemonOnline.body.count });
        this.setState({ maxPage: Math.ceil(this.state.totalPokemon / this.state.perPage) })

        // explicitly send the user to this url
        this.props.history.push(`${this.props.match.params.pokemon.toString()}`);
    }

    handleChange = e => {
        // get the value the search input and stringify it
        console.log(e.target.value)
        const casingFix = (e.target.value).toString();
        
        // lowercase that value, and put it in state for use elsewhere
        this.setState({ pokemon: casingFix.toLowerCase() });
    }

    handleType = e => {
        // on radio button select, change the searchType value
        this.setState({ searchType: e.target.value });
    }

    render() {
        // go build the list of pokemon, and store it in pokenodes.
        const pokeNode = this.state.pokeDex.map(pokemon => 
            // for each pokemon, render a link with a pokeitem in it
            <Link to={`detail/${pokemon._id}`}> <PokeItem pokemon={pokemon} /> </Link>)

        return (
            <div>
                <div id="page-top">
                    {/* pass some callbacks so we can manipulate parent state from the child */}
                    <Searching 
                    handleSearch={this.handleSearchClick} 
                    handleChange={this.handleChange} 
                    handleType={this.handleType}
                    ></Searching>
                </div>
                <ul>
                    {/* use the pokenodes defined upstairs */}
                    {pokeNode}
                </ul>
                <div id="page-bottom">
                    {/* pass props to the presentational paging component */}
                    <Paging 
                    handlePageChange={this.handlePageChange} 
                    page={this.state.page} 
                    maxPage={this.state.maxPage} 
                    totalPokemon={this.state.totalPokemon} 
                    perPage={this.state.perPage}></Paging>
                </div>
            </div>
        )
    }
}
