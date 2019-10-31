Class 04: Dynamic Components with Fetch Data
===

- Decompose a UI into components and wire them together
- Use the `fetch` browser command and JavaScript Promises to asynchronously get data from another server

## Warm Up

[Exercise](./warm-up.md)

## Component Snippet

```json
"Vanilla Component": {
    "prefix": "comp",
    "body": [
        "import Component from '../Component.js';",
        "",
        "class ${1:NewComponent} extends Component {",
        "\trenderHTML() {",
        "\t\treturn /*html*/`",
        "\t\t\t$0",
        "\t\t`;",
        "\t}",
        "}",
        "",
        "export default ${1:NewComponent};"
        
    ],
    "description": "Extend Vanilla JavaScript component"
},
```
## Distributed Systems

Application span multiple computers, and can include:

1. User's device (mobile or desktop browser)
1. Servers you write
1. Database servers you run
1. Other people's servers you access

### Web Request Response Cycle

![WRRC](./simple-wrrc.png)

## Asynchronous JavaScript

The JavaScript code you write may run at different times. This will
**always** be at a function level.

Functions are how we specify units of work, some of which may execute at
a later time and _may_ execute multiple times.

## Promises

Promises extend the capabilities of callbacks by to better handle
sequential and parallel workflows. Instead of passing a callback
function, the promise is an object that promises a future value.

* We use the `await` keyword to wait for the promise to "resolve"
* Any function that uses `await` must be prefixed with the `async` keyword


## Using `fetch` for Data (Promises in Action)

The `fetch` command offers a promise-based interface. We use a stepped
sequence:

1. Initiate fetch
1. We await the response
1. Then we need call `response.json()` to extract the data from the response, this is also asynchronous so we need to use `await`
1. We then return the value

```js
export async function getMovies() {  
    const response = await fetch(URL);
    return await response.json();
}
```

## Code Challenge

`04-regex`

