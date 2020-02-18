import React, { Component } from 'react'
import { getPokemonById } from './api.js';
import PokeItem from './PokeItem.js';

export default class Detail extends Component {
    
    state = { pokemonChosen: {} }

    // asynce means we will do some fetching in here
    // componentDidMount means this will happen ONCE after the initial 'mount' of the component
    async componentDidMount() {
        // lets make a fetch using `this.props.match.params.pokeid`, which comes from the URL (thanks to reach router and our detail/:pokeid? route. The colon in the route definition means it will be passed as a prop to the this component) 
        const pokeOnline = await getPokemonById(this.props.match.params.pokeid);

        // set the pokemonChosen state to the value of the fetch
        this.setState({ pokemonChosen: pokeOnline.body });
    }

    render() {
        return (
            <div>
                <ul>
                    {/* render a pokeitem, passing the poemonChosen state as a prop */}
                    <PokeItem pokemon={this.state.pokemonChosen} />
                </ul>
            </div>
        )
    }
}
