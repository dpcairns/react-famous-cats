LAB: Photo Gallery
===

Create a photo gallery app. 

## Setup

### Utility Helpers

You will need:

- `/test/html-equal.js` (don't forget to import in `/test/tests.js`!)
- `/src/html-to-dom.js`

## Image Data

Use the supplied images data file at `data/images.js` next to this file.

## Process

### 1. Paper or Whiteboard Wire Frame

1. Page Layout. Draw out what your image gallery will look like on paper or a white board. Though not everything needs to be working today, you should design space for:
    1. Header with Logo and Title
    1. Main Section
        1. Keyword filter dropdown (select)
        1. Sort options: title or horns
        1. Card-like list of images showing:
            1. image
            1. title 
            1. number of horns
            1. description on `title` attribute hover
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
1. **Include a picture of your final drawing in your repo**

### 2. Static HTML/CSS Example

Create a static example of your html and css. You can create "shells" for list items beyond the first one. _You do not need to flush out the filter or sort options today_, you can leave a "box" where you intend to put these. If you have time, as a stretch goal work on these (see below).

### 3. Make Data-Driven Template

Replace the static data with dynamically driven data:

1. Create a test that calls a `renderHTML` template function and asserts
that the result is the same as the static html
1. Make the test pass by returning the exact same static html 
from the template function
1. Create a data object in your test, and pass to `renderHTML` function.
1. In `renderHTML`, add a parameter for the data and begin to replace the static html in the template function with object properties passed into the template function
1. When the template is fully dynamic and the test passes, 
you now have a tested, usable template function!

### 4. Orchestrate and Integrate:

1. `app.js` is where the action will happen
1. import `renderHTML` template function
1. import `htmlToDOM` function
1. import array of image data
1. reference the target parent element (`<ul>`)
1. call `.forEach` on the array of images, passing a callback function
1. For each image:
    1. Convert image object to html using template
    1. Convert html to DOM using htmlToDOM
    1. Append to list parent (`<ul>`)

## STRETCH

NOTE: You will need to accomplish these tomorrow if you don't have time today.

### Design Filter and Sort

Work out HTML and CSS for the filter and sort components.

### Header as Component

Make a separate template function for your header. It
doesn't take any data, but can still return html (which can be made into DOM).
Call it `renderHeaderHTML` or something that won't conflict with image template
render function. Import, call, and append DOM in `index.js`

---

## Points Break Down

Looking For | Points (10)
:--|--:
Wire Frame Design with Annotations | 4 
TDD `renderHTML` template function with dynamic data | 3
Orchestration in `app.js` works correctly | 2
Use functional `.forEach` for looping to create Image components | 1