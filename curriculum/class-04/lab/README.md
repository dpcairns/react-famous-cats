LAB 04: Dynamic Pokedex from API
===

Break your design into components that run from data from the api

## Goal

The goal for LAB 04 is to:

1. Break your work into components
1. Make the Pokedex work from props
1. Fetch data (no search options yet!) from the API and power the app

## Build into Components

1. Making App components for both home and pokedex web pages, that use a common header
1. On the Pokedex Page, make components and wire them together

## Make the List and List Items Dynamic

1. Using a Design-Driven test, make your Pokemon component work via props
1. Make your Pokedex list take an array of movies and loop through to create Pokemon components
1. In Pokedex App, create an array with your one example data item and pass through as prop to the list

## Use the API to fetch Data

API is available here: https://alchemy-pokedex.herokuapp.com
Landing page has API documentation.

1. Create a `pokedex-api.js` module in a `services` folder
1. Export a function that fetches data from the api. You can hard-code a search if you like
1. In the Pokedex App:
    1. Change the List component to initially be based an empty array
    1. In the `onRender` call the api function using async/await
    1. Make new props and call the `update` method of the List component

## Points Break Down

Looking For | Points (10)
:--|--:
Build Out Components | 5
Make Components Data Driven | 3
Use API to Run App | 2