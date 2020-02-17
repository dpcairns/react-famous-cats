import React from 'react'

export default class CharacterItem extends React.Component {
    render() {
        const { character } = this.props;
        const {
            image,
            name,
            species, 
            status
        } = character;

        return (
            <>
            { character.name 
            ? <div>
                    <p><img src={ image } /></p>
                    <p>name: { name }</p>
                    <p>species: { species }</p>
                    <p>status { status }</p>
                </div>
        : <img src="https://pixelpapa.com/wp-content/uploads/2018/11/Flat-Preloaders.gif" />
        }
        </>
        )
    }
}