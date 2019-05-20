Class 01: JavaScript Templates
===

Use JavaScript templates to render list of data dynamically

## Agenda

- Developer Focus
- Template functions with Template Literals
- `<template>` Element
- Array `.forEach` method
- Template Function Recipe
- Design-Driven Development Recipe

## Developer Focus

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

## Design-Driven Development

A process for creating dynamically rendered HTML via template.

The recipe is as follows:

1. Statically design one or more instances of the final html
and css you would like to create
2. Create a test that calls a template function and asserts
that the result is the same as the static html
3. Make the test pass by returning the exact same static html 
from the template function
4. Begin to replace the static html in the template function with 
object properties passed into the template function
5. When the template is fully dynamic and the test passes, 
you now have a tested, usable template function 

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

## Lab Build

Repo: `photo-gallery`


