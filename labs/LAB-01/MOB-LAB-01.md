MOB LAB 01: Photo Gallery
===

Create a photo gallery app. 

## Utility Helpers

You will need:

- `/test/html-equal.js` (don't forget to import in `/test/tests.js`)
- `/src/html-to-dom.js`

## Image Data

You can use the supplied images data file or make up your own. Some of the
image attributes will be used to filter the data, so you can keep the core data simple for today.

## Process

Use Design-Driven Development:

1. First create a static example of what you want the rendered images to look like
1. Use the static html of one of the images to TDD your template function
1. Replace the static data with dynamically driven data

Orchestrate and Integrate:

1. `index.js` is where the action will happen
1. import template function
1. import `htmlToDOM` function
1. import array image data
1. reference the target parent element (`<ul>`)
1. call `.forEach` on the array of images, passing a callback function
1. For each image
    1. Convert image object to html using template
    1. Convert html to DOM using htmlToDOM
    1. Append to list parent (`<ul>`)

## STRETCH: Header

Make a separate template function (using DDD process) for your header. It
doesn't take any data, but can still return html (which can be made into DOM).
Call it `templateHeader` or something that won't conflict with image template.
Import, call, and append DOM in `index.js`

---

## Points Break Down

Looking For | Points (10)
:--|--:
Semantic and Idiomatic HTML and CSS  | 2 
TDD template function | 2
Use functional `.forEach` for looping | 2
Works correctly | 2
Project and code files are: indented / spaced correctly / clean | 2 
Header template | +3 