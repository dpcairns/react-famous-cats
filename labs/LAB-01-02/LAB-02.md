LAB 02: Component Photo Gallery
===

Create a photo gallery app. Reuse your design from yesterday,
but create a new repo from scratch.

## Utility Helpers

You will need:

- `/test/html-equal.js` (don't forget to import in `/test/tests.js`)
- `/src/html-to-dom.js`
- `/src/components/Component.js`

## Image Data

Use the supplied images data file at `data/images.js` next to this file.

## Process

Component Tree:

- `App`
    - `Header`
    - `FilterImages`
    - `ImageList`
        - [`ImageItem`]

## 1. Build Out Basic App Structure

- `index.html`
- `/data/images.js`
- `/src/index.js` - creates App and appends to DOM
- `/src/components/App.js` - top level component
- `/src/components/Header.js` - header component
- `/src/components/ImageList.js` - image list component

Build out basic tree of app, starting at top and working down. The `App` component
should introduce the image list data, passing as a prop to `ImageList`. 

Initially, `ImageList` component can just show count of images so you know it is receiving the
data via props.

## 2. DDD `ImageItem` component

- `/src/components/ImageItem.js`
- `/test/ImageItem.test.js`

Here is where you would build out static example of individual items. Since you did that 
yesterday, practice using DDD to build out the `renderHTML` method of the 
`ImageItem` component.

## 3. Create `ImageItem` children in `ImageList`

- `/src/components/ImageList.js`

In the `onRender` method of `ImageList`, create an `ImageItem` component instance
"for each" image in the images data, and append to the `<ul>`. This is similar to
the logic currently in `app.js`

## 4. Filter Images

- `/src/components/FilterImages.js`

Start by using DDD to create a static example that has unique list of all of the keywords
from your image data. Then create your `FilterImages` component and pass `images` (you can import the data) as a prop to the component. You will need to write code the produces array of unique keyword values, and use that to render options. You can use `array.map` to produce the
html for each `<option>`;

- `/src/components/App.js`

1. Place the `FilterImages` component into `App` at the appropriate spot.
1. You will need to pass the array of `images` **and** a callback prop `onFilter` to `FilterImages`
1. In your callback, you will need to filter the images array and call `.update` on
the `ImageList` component with the filtered array.

## 5. STRETCH: Sort Images

- `/src/components/SortImages.js`

Create a sort component that offers choice of Title or Horns. Use a callback to apply the sort.

NOTE: You will need to save the filter and sort choice in `App` for both to work. Use `this.state.filter` and `this.state.sort`

## STRETCH: Add Image

- `/src/components/App.js`
- `/src/components/AddImage.js`

Create a new `AddImage` component that has a form with data need to create an image.
It will expect to be passed an `onAdd` callback function as a prop. In the `onRender` method,
subscribe to the form submit event and in the event listener bundle up the data into an 
object and pass that to the `onAdd` callback function.

`App` will need to pass `AddImage` a callback as the `onAdd` prop. This should be _an arrow 
function_ that:
1. Adds the passed new image to the images data.
1. Calls the `update` method of `ImageList` passing in new props that has the updated
image data.
1. You will need to (maybe) deal with the filter. Perhaps it should clear when an image is added?

## STRETCH: Delete Image

- `/src/components/App.js`
- `/src/components/ImageList.js`
- `/src/components/ImageItem.js`

Augment `ImageItem` to display a delete button (you will need to update test). In the `onRender`
method, subscribe to the `click` event and pass the `image` object to the `onRemove` prop.

`App` will need to pass `ImageList` a callback as the `onRemove` prop (and `ImageList` will need
to pass `onRemove` as a prop to each `ImageItem`!). This should be _an arrow 
function_ that:
1. Uses `indexOf` to find the index of the image to remove from the image list data.
1. Uses `splice` to remove the image from the image list data
1. Calls the `update` method of `ImageList` passing in new prop with the updated
image data.

---

## Points Break Down

Looking For | Points (10)
:--|--:
`App` and `Header` components | 2
`ImageList` component | 2
`ImageItem` component and test | 3
`FilterImages` and working filter | 3
`Add Image` | +3
Delete Image | +3 