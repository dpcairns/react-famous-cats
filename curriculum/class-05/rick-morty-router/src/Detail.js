import React, { Component } from 'react';
import { getCharacter } from './api.js'
import CharacterItem from './CharacterItem.js';

export default class Detail extends Component {
    state = { character: {} }

    async componentDidMount() {
        const data = await getCharacter(this.props.match.params.charId);
        
        if (data.body.results) {


        this.setState({ character: data.body.results[0] })
            
        }
    }

    render() {
        const { character } = this.state;

        return (
            <CharacterItem character={ character } />
      );
    }
}