# Class 01: JavaScript Templates, DDD, and Array `.forEach` and `.filter`

Use JavaScript templates to render list of data dynamically

## Reset CSS

Today's demo and lab include a `reset.css`. [Let's look at this article](https://meyerweb.com/eric/tools/css/reset/)

## Design-Driven Development

### Wire Frame on Paper or Whiteboard

1. Page Layout. Draw out what your page will look like. This is about space management, consider:
   1. Header with Logo and Title
   1. Main Section
      1. Search, Sort, etc.
      1. List of things
   1. Footer
1. Decide semantics and structure
   1. Label the pieces of your drawing with what elements you will use.
   1. Design the layout requirements. How should things be aligned and layout? Write this onto your drawing.
   1. Based on above, pick a CSS layout strategy and write this on your drawing.
1. Decide on high-level styling (make notes on your drawing)
   1. Fonts
   1. Color
   1. Whitespace (padding and margins)
   1. Stylistic images/designs

## Basic React Components

```js
import React from "react";
import Cat from "./Cat";
import catData from "./data.js";
import "./App.css";

import Header from "./Header";

export default class App extends React.Component {
  state = { name: "Danny" };

  render() {
    return (
      <div>
        <Header greeting={this.state.name} />
        <button onClick={() => this.setState({ name: "Suzie" })}>
          click this to make my name suzie!!!
        </button>
        <div> hello world! </div>
      </div>
    );
  }
}
```

## Array `.filter` method

Make a new array from an array by testing each element (item) of the array, returning a truthy response if it should be included in the new array:

```js
const numbers = [1, 6, 2, 3, 5];
const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});
console.log(evenNumbers); // [6, 2]
```

## React gotchas

- `className` vs `class`
- `render` must return _one_ thing

## Array `.forEach` method

Act on each element (item) of an array without having to specify
a `for` loop.

```js
const list = document.getElementById("list");
images.forEach(image => {
  const dom = template(image);
  list.appendChild(dom);
});
```

## Array `.filter` method

Make a new array from an array by testing each element (item) of the array, returning a truthy response if it should be included in the new array:

```js
const numbers = [1, 6, 2, 3, 5];
const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});
console.log(evenNumbers); // [6, 2]
```

## Code Challenges

Let's review the code challenge repo and process!

Sneak peak at `npm`:

1. `package.json` - track things via a manifest
1. `npm i eslint -D` - install and track
1. `npm i` - install
1. scripts: `npm test` - run common commands like testing
