Class 01: JavaScript Templates
===

Use JavaScript templates to render list of data dynamically

## Agenda

- Developer Focus
- Design-Driven Development
- Template functions with Template Literals
- `<template>` Element
- Array `.forEach` method
- Pairing

## BC2 Developer Focus

Design:

- Analyze
- Synthesize
- Integrate

Diagnose:

- Expected/Actual
- Feedback Discovered
- Avoid:
    - Making a Case
    - Narrative Stories

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
1. Decide on styling (make notes on your drawing)
    1. Fonts
    1. Color
    1. Whitespace (padding and margins)
    1. Stylistic images/designs


### Static-to-Dynamic Template

A process for creating dynamically rendered HTML via template.

The recipe is as follows:

1. Statically design one or more instances of the final html
and css you would like to create (based on wireframe).
2. Create a test that calls a template function and asserts
that the result is the same as the static html
3. Make the test pass by returning the exact same static html 
from the template function
4. Begin to replace the static html in the template function with 
object properties passed into the template function
5. When the template is fully dynamic and the test passes, 
you now have a tested, usable template function 

## VSCode HTML Extension

Install `tobermory.es6-string-html`;

## Template Functions with Template Literals

A function that combines the above concepts by taking data and
returning the created DOM. It follows a standard recipe:

```js
// 1) Define a template function
function template(data) {

    // 2) Make HTML string via template literal
    const html = /*html*/`
        <p>template literal for ${data.property}</p>
    `;
    
    // 3) return html
    return html;
}
```


## `<template>` element

Special DOM element that can have it's `.innerHTML` property set and
the resulting created DOM can be accessed via its `.content` property

```js
// 1) define a common function
function htmlToDOM(html) {
    // 2) create a template element
    const template = document.createElement('template');
    // 3) turn html to DOM by setting innerHTML
    template.innerHTML = html;
    // 4) use content property to fetch dom
    const dom = template.content;
    // 5) Get the first element child
    const firstElementChild = dom.firstElementChild;
    // 5) return the first element to the caller
    return firstElementChild;
}
```

## Array `.forEach` method

Act on each element (item) of an array without having to specify
a `for` loop.

```js
const list = document.getElementById('list');
images.forEach(image => {
    const dom = template(image);
    list.appendChild(dom);
});
```

## Pairing

1. Install `mobster` or other timer.
1. You **must**:
    1. Switch at each interval (20 minutes)
    1. Follow roles
