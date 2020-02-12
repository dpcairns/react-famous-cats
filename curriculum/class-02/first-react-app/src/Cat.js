import React, { Component } from 'react'

export default class Cat extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2>{this.props.feline.name}</h2>
                <p className="cat-type">{this.props.feline.type}</p>
            </div>

            <div className="image-container">
                <img
                    alt={this.props.feline.url}
                    src={this.props.feline.url} />
            </div>
            <p className="year">{this.props.feline.year}</p>
        </li>
    }
}