Class 05a: Hash State & Query API
===

- Use the Url to maintain state on app location, storing the search info in the hash (`#`) portion on the url
- Provide query parameters to server url to control data returned

## Agenda

1. Warm Up
1. Evented Data Stores and Component Trees
1. Single Page Apps (SPAs)
1. Review `URLSearchParams`
1. Window `hashchange` Event
1. Reading Hash Search Params
1. Options Component Design
1. Code Challenge 

## Warm Up

[Exercise](./warm-up.md)

## Evented Data Stores and Component Trees

While still adhering to "data down, events up", adding an
evented data store allows us to separate events and/or data 
from strictly needing to be passed through the component tree
of the app.

## Single Page Apps (SPAs)

SPAs grew out of existing web architecture, allowing the simulation
of multiple web pages even though a single page had been loaded into the browser

- SPAs took advantage of the "hash" (`#`) portion of the url
- By listening to changes, programmatic (in JS) changes can be made
- It also allows a user to enter the application at a given location

Bootcamp 2 apps still use separate web pages for main areas of the app, but we can leverage the hash to provide information about the
state of the current page

## Review `URLSearchParams`

Use the built-in `URLSearchParams` class to correctly create search
params. Instead of putting in the search portion of the URL, set the hash.

```js
const searchParams = new URLSearchParams();
searchParams.set('type', 'Tuxedo');

window.location.hash = searchParams.toString();
```

## Window `hashchange` Event

Detect hash changes by subscribing to `hashchange` event (note: all DOM events are all lowercase). Read the params also using the `URLSearchParams` class. 

Don't forget to remove the `#`!

```js
window.addEventListener('hashchange', () => {
    const search = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(search);
    console.log(searchParams.get('type'));
});
```

## Pass to API

In your API call, copy your search params from hash to API query string:

```js
const URL = 'https://www.omdbapi.com/?apikey=3db77742&';

export async function getMovies() {  
    let queryString = window.location.hash.slice(1);
    const url = `${URL}${queryString}`;

    const response = await fetch(url);
    const data = await response.json();

    //...
}
```

## Options Component Design

The Paging, Search, and Sort components do not just produce a value, they also needs to keep in sync with the actual state of the hash.

## Code Challenge

`04-regex`
