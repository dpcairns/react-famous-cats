LAB: Photo Gallery
===

Create a photo gallery app. 

## Setup

### Utility Helpers

Today's lab includes starter code which should be copied to your lab. **Copy the contents, not the `starter-code` folder itself**. It includes the `htmlEqual` and `htmlToDom` utility functions. `htmlEqual` is already imported in `/test/tests.js`.

## Image Data

Use the supplied images data file at `data/images.js`

## Process

### 1. Paper or Whiteboard Wire Frame

1. Page Layout. Draw out what your image gallery will look like on paper or a white board. You should design space for:
    1. Header with Logo and Title
    1. Main Section
        1. Options:
            1. Keyword filter dropdown (select)
            1. STRETCH: minimum number of horns
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
1. **Include a picture of your final drawing in your repo submission**

**Time to git ACP!**

### 2. Static HTML/CSS Example

Create a static example of your html and css. You can create "shells" for list items beyond the first one. Include your keyword select drop-down filter, don't forget to include an "all" option.

**Time to git ACP!**

### 3. Make Template Data-Driven 

Replace the static data with dynamically driven data:

1. Create a test that calls a `renderImage` template function and asserts
that the result is the same as the static html
1. Make the test pass by returning the exact same static html 
from the template function (don't forget to use `htmlEqual`)
1. Create a data object in your test (copy from `data/images.js`), and pass to `renderImage` function.
1. In `renderImage`, add a parameter for the data and begin to replace the static html in the template function with object properties passed into the template function, making sure your test stays green.
1. When the template is fully dynamic and the test passes, 
you now have a tested, usable template function!

**Time to git ACP!**

### 4. Orchestrate and Integrate:

1. `app.js` is where the action will happen
1. import `renderImage` template function
1. import `htmlToDOM` function
1. import array of image data
1. reference the target parent element (`<ul>`)
1. call `.forEach` on the array of images, passing a callback function
1. For each image:
    1. Convert image object to html using template
    1. Convert html to DOM using htmlToDOM
    1. Append to list parent (`<ul>`)

**Time to git ACP!**

### 5. Filter on Keyword

1. In `app.js`, change the initial render to happen in a function that is called on page load with the full list of images. Start by clearing all the elements from the list.
1. Reference the select drop-down and add an event listener
1. In the event handler, filter the images (or use all images) and call
the function to re-render the list.

**Time to git ACP!**

---

## Points Break Down

Looking For | Points (10)
:--|--:
Wire Frame Design with Annotations | 3 
TDD `renderImage` template function with dynamic data | 2
Render list of data | 2
Filter by keyword | 2
Step-by-step commits | 1
