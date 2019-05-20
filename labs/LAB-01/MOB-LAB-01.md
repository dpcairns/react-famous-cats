MOB LAB 01: Photo Gallery
===

Create a photo gallery app. 

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
