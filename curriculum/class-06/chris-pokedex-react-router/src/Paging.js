import React, { Component } from 'react'

export default class Paging extends Component {
    render() {
        // if if there are no results (totalPokemon === 0)
        if (Math.ceil(this.props.totalPokemon / this.props.perPage) === 0) {
            return <h5 className="paging">No results! :(</h5>;
        }

        return (
            <div className="search-paging">
                {/* prev button passes -1 to handlePageChange callback, and disable the button if you're on the first page */}
                <button onClick={e => this.props.handlePageChange(-1)} disabled={this.props.page === 1}>LAST</button>
                {/* next button passes 1 to handlePageChange callback, and disable the button if you're on the last page */}
                <button onClick={e => this.props.handlePageChange(1)} disabled={this.props.page === this.props.maxPage}>NEXT</button>
                {/* render the current page / max pages */}
                <h5>Page: {this.props.page}/{this.props.maxPage}</h5>
            </div>
        )
    }
}
