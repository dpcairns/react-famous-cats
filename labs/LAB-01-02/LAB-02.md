LAB 02: Component Photo Gallery
===

Create a photo gallery app. Reuse your design from yesterday,
but create a new repo from scratch.

## Utility Helpers

You will need:

- `/test/html-equal.js` (don't forget to import in `/test/tests.js`)
- `/src/html-to-dom.js`
- `/src/Component.js`

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
- `/src/App.js` - top level component
- `/src/Header.js` - header component
- `/src/ImageList.js` - image list component

Build out basic tree of app, starting at top and working down. The `App` component
should introduce the image list data, passing as a prop to `ImageList`. 

Initially, `ImageList` component can just show count of images so you know it is receiving the
data via props.

## 2. DDD `ImageItem` component

- `/src/ImageItem.js`
- `/test/ImageItem.test.js`

Here is where you would build out static example of individual items. Since you did that 
yesterday, practice using DDD to build out the `renderHTML` method of the 
`ImageItem` component.

## 3. Create `ImageItem` children in `ImageList`

- `/src/ImageList.js`

In the `onRender` method of `ImageList`, create an `ImageItem` component instance
"for each" image in the images data, and append to the `<ul>`. This is similar to
the logic currently in `app.js`

## 4. Filter Images

- `/src/FilterImages.js`

Start by using DDD to create a static example, then turn that into `FilterImages` component. It needs an `onFilter` callback function prop that it should call when 
the dropdown changes

- `/src/App.js`

1. Place the `FilterImages` component into `App` at the appropriate spot.
1. You will need to pass the callback prop `onFilter` to `FilterImages`
1. In your callback, you will need to filter the images array and call `.update` on
the `ImageList` component with the filtered array.

**STRETCH**

Change `FilterImages` to take a list of images as a prop and derive keywords from the data.

## 5. STRETCH: Sort Images

- `/src/SortImages.js`

Create a sort component that offers choice of Title or Horns. Use a callback to apply the sort.

NOTE: You will need to save the filter and sort choice in `App` for both to work. Use `this.state.filter` and `this.state.sort`

## STRETCH: Add Image

- `/src/App.js`
- `/src/AddImage.js`

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

- `/src/App.js`
- `/src/ImageList.js`
- `/src/ImageItem.js`

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