LAB 04: Dynamic Pokedex from API
===

Break your design into components that run from data from the api

## Goal

The goal for LAB 03 is to:

1. Break your work into components
1. Make the Pokedex work from props
1. Fetch data (no search options yet!) from the API and wire that data to the app

## Build into Components

1. Making App for the pokedex home Page
1. Make a Header component for your Header
1. Make a PokeList component
1. Make a PokeItem component to display at least 4 properties
1. On App.js, wire them together

## Make the List and List Items Dynamic

1. Using Design-Driven development, make your PokeList component work via props
1. Make your PokeList take an array of pokemon and `map` through to create PokeItem components
1. In Pokedex App, create an MOCK DATA array as the initial state of App.js with your example pokemon data and pass through as prop to the PokeList

## Use the API to fetch Data

API is available here: https://alchemy-pokedex.herokuapp.com
Landing page has API documentation.

1. In the Pokedex App:
    1. Change the List component to initially be based an empty array (hint: this is why we set the initial state of pokemon data in App.js to an empty array)
    1. In the `componentDidMount` method, call the api function using async/await
    1. use `this.setState` to set the data as state to be passed to the PokeList

## Points Break Down

Looking For | Points (10)
:--|--:
Build Out Tested Components | 5
Make Components Data Driven | 3
Use API to Run App | 2