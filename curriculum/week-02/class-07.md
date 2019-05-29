Class 07: Search API using Url Hash Query
===

Make the API searchable, storing the search info 
in the hash (`#`) portion on the url

## Agenda

1. Evented Data Stores and Component Trees
1. Single Page Apps (SPAs)
1. Review `URLSearchParams`
1. Window `hashchange` Event
1. Reading Hash Search Params
1. Search Component Design
1. Group Mob: Handling Http Errors

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
params. Instead of putting in the search portion of the URL, set the hash (while not strictly necessary, consider adding the `?`)

```js
const searchParams = new URLSearchParams();
searchParams.set('name', 'Skywalker');

window.location.hash = '?' + searchParams.toString();
```

## Window `hashchange` Event

Detect hash changes by subscribing to `hashchange` event (note: all DOM events are all lowercase). Read the params also using the
`URLSearchParams` class. Don't forget to remove the `#`!

```js
window.addEventListener('hashchange', () => {
    const search = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(search);
    console.log(searchParams.get('name'));
});
```

## Search Component Design

The Search component does not just produce a value, it also
needs to keep in sync with the actual state of the hash.

## Handling HTTP Errors

An HTTP response is still valid (not an error), even though
it has a status code that would be consider and error.

The information about the error _is_ the body of the message. (Review HTTP).

Which means for an error status code, we still need to read the body
via `response.json()`, *but then convert to error by throwing it!*