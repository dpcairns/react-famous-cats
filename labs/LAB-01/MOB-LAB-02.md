MOB LAB 02: Component Photo Gallery
===

Create a photo gallery app. Reuse your design from yesterday,
but create a new repo from scratch.

## Utility Helpers

You will need:

- `/test/html-equal.js` (don't forget to import in `/test/tests.js`)
- `/src/html-to-dom.js`
- `/src/components/Component.js`

## Image Data

You can use the supplied images data file or make up your own.

## Process

Component Tree:

- `App`
    - `Header`
    - `AddImage`
    - `ImageList`
        - [`ImageItem`]

## 1. Build Out Basic App Structure

- `index.html`
- `/data/images.js`
- `/src/index.js`
- `/src/components/App.js`
- `/src/components/Header.js`
- `/src/components/ImageList.js`

Build out basic tree of app, starting at top and working down. The `App` component
should introduce the image list data, passing as a prop to `ImageList`. Initially,
`ImageList` component can just show count of images so you know it is receiving the
data via props.

## 2. DDD `ImageItem` component

- `/src/components/ImageItem.js`
- `/test/ImageItem.test.js`

Here is where you would build out static example of individual items. Since you did that 
yesterday, practice using DDD to build out the `renderTemplate` method of the 
`ImageItem` component.

## 3. Create `ImageItem` children in `ImageList`

- `/src/components/ImageList.js`

In the `render` method of `ImageList`, create an `ImageItem` component instance
for each image in the images data, and append to the `<ul>`.

## Add Image

- `/src/components/App.js`
- `/src/components/AddImage.js`

Create a new `AddImage` component that has a form with data need to create an image.
It will expect to be passed an `onAdd` callback function as a prop. In the `render` method,
subscribe to the form submit event and in the event listener bundle up the data into an 
object and pass that to the `onAdd` callback function.

`App` will need to pass `AddImage` a callback as the `onAdd` prop. This should be _an arrow 
function_ that:
1. Adds the passed new image to the images data.
1. Calls the `update` method of `ImageList` passing in new props that has the updated
image data.

## STRETCH: Delete Image

- `/src/components/App.js`
- `/src/components/ImageList.js`
- `/src/components/ImageItem.js`

Augment `ImageItem` to display a delete button (you will need to update test). In the `render`
method, subscribe to the `click` event and pass the `image` object to the `onRemove` prop.

`App` will need to pass `ImageList` a callback as the `onRemove` prop (and `ImageList` will need
to pass `onRemove` as a prop to each `ImageItem`!). This should be _an arrow 
function_ that:
1. Uses `indexOf` to find the index of the image to remove from the image list data.
1. Uses `splice` to remove the image from the image list data
1. Calls the `update` method of `ImageList` passing in new props that has the updated
image data.

---

## Points Break Down

Looking For | Points (10)
:--|--:
Lean `index.html` and `index.js` setup  | 1
`App` and `Header` components | 2
`ImageList` component | 2
`ImageItem` component and test | 3
`Add Image` | 2
Delete Image | +3 