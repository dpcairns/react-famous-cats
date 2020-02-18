import React, { Component } from 'react'

export default class Searching extends Component {
    render() {
        return (
            <div className="search-paging">
                {/* use the callbacks that live on the List component */}
                <form onSubmit={this.props.handleSearch}>
                    <input onChange={this.props.handleChange}></input>
                    <button>Search</button>
                    <div id="search-type">
                        <label>Name: <input id="name-check" type="radio" name="searchtype" value="pokemon" onClick={this.props.handleType}></input></label>
                        <label>Type: <input type="radio" name="searchtype" value="type" onClick={this.props.handleType}></input></label>
                        <label>Ability: <input type="radio" name="searchtype" value="ability" onClick={this.props.handleType}></input></label>
                    </div>
                </form>
            </div>
        )
    }
}
