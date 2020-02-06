import React, { Component } from 'react'

export default class Cat extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2>{this.props.cat.name}</h2>
                <p className="cat-type">{this.props.cat.type}</p>
            </div>

            <div className="image-container">
                <img
                    alt={this.props.cat.url}
                    src={this.props.cat.url} />
            </div>
            <p className="year">{this.props.cat.year}</p>
        </li>
    }
}