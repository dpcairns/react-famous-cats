import React, { Component } from 'react';
import request from 'superagent';


export default class Detail extends Component {
    state = { character: {} }

    async componentDidMount() {
        console.log(this.props.match.params.charId)
        const data = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.props.match.params.charId}`)
        
        console.log(data)
        if (data.body.results) {
            this.setState({ character: data.body.results[0] })
        }
    }

    render() {
        console.log(this.state.character)
        return (
            <div>
                <p>name: { this.state.character.name }</p>
                <p>species: { this.state.character.species }</p>
                <p>status { this.state.character.status }</p>
                <p><img src={ this.state.character.image } /></p>
            </div>
      );
    }
}