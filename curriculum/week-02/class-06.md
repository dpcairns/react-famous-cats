Class 06: Asynchronous JavaScript with Promises and `fetch`
===

Use the `fetch` browser command and JavaScript Promises

## Agenda

1. Distributed Systems
1. Async JavaScript
1. Promises
1. Using `fetch` for Data
1. Component Design Process

## Distributed Systems

Application span multiple computers, and can include:

1. User's device (mobile or desktop browser)
1. Servers you write
1. Database servers you run
1. Other people's servers you access

## Asynchronous JavaScript

The JavaScript code you write may run at different times. This will
**always** be at a function level.

Functions are how we specify units of work, some of which may execute at
a later time and _may_ execute multiple times.

[Three JS Function Passing Patters](three-js-functional-patterns.md)

## Promises

Promises extend the capabilities of callbacks by to better handle
sequential and parallel workflows. Instead of passing a callback
function, the promise is an object that offers a `.then` method
for registering the callback.

* `.then` method calls can be chained for sequential workflows.
* `.catch` can be used to register a callback for errors

## Using `fetch` for Data (Promises in Action)

The `fetch` command offers a promise-based interface. We use a stepped
sequence:

1. Initiate fetch
1. First `then` will be called when complete, use the build-it `response.json()` method to extract the data
1. The actual data from the json will be passed to the second `then`
1. Any error that happens during the process will surface in the `catch`


```js

const URL = 'https://ghibliapi.herokuapp.com/films';

fetch(URL)
    .then(response => response.json())
    .then(films => {
        loadFilms(films);
    })
    .catch(err => {
        console.error('fetch error:', err);
    });

```


## Component Design Process

1. Whiteboard visual page 
1. Decompose into components
1. Translate into tree of components
1. Identify and draw:
    1. needed data and events for each component
    1. owner for data
