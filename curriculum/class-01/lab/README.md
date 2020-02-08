# LAB: Photo Gallery

Create a photo gallery app.

## Setup

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

### STRETCH: 5. Filter on Keyword

1. In `app.js`, change the initial render to happen in a function that is called on page load with the full list of images. Start by clearing all the elements from the list.
1. Reference the select drop-down and add an event listener
1. In the event handler, filter the images (or use all images) and call
   the function to re-render the list.

**Time to git ACP!**

---

## Points Break Down

| Looking For                        | Points (10) |
| :--------------------------------- | ----------: |
| Wire Frame Design with Annotations |           3 |
| Render list of data                |           4 |
| Filter by keyword                  |          +3 |
| Step-by-step commits               |           3 |
