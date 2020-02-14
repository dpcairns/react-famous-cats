import React, { Component } from 'react';
import request from 'superagent';

export default class Detail extends Component {
    state = { character: {} }

    async componentDidMount() {
        const data = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.props.match.params.charId}`)
        
        if (data.body.results) {
            this.setState({ character: data.body.results[0] })
        }
    }

    render() {
        const { character } = this.state;

        return (
            <div>
                <p><img src={ character.image } /></p>
                <p>name: { character.name }</p>
                <p>species: { character.species }</p>
                <p>status { character.status }</p>
            </div>
      );
    }
}