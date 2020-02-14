import React, { Component } from 'react';

export default class ActorsList extends Component {
    componentDidMount(l) {
        window.location.hash = 's=harry&page=4&type=series';
    }

    render() {
        return <ul className="actors-list"></ul >
    }
}
