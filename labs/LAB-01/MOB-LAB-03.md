MOB LAB 03: Filtered Photo Gallery
===

Add a filter to your photo gallery so user can limit the displayed
images.

## Filters

Your should offer two filters:

1. Text Input
    * Matches at least one substring of:
        - keyword
        - title
        - description
    * strings have a useful `.includes` method
1. Numeric Input
    * Matches a minimum number of horns
    * equal or greater than (`>=`)

## Process

Component Tree:

- `App`
    - `Header`
    - `AddImage`
    - **`Filter`**
    - `ImageList`
        - [`ImageItem`]

## 1. TDD Filter Function

- `/src/filter-images.js`
- `/test/filter-images.test.js`

TDD your filter function. You will need a test for each conditions:

1. string filters keyword
1. string filters title
1. string filters description
1. number filters horns
1. string and number combo filter
1. no filter returns all
1. anything else you think of...

## 2. Filter Component

- `/src/components/Filter.js`

Design your Filter Component. Decide if it will be real-time (`input` events), 
or have a submit button. Subscribe to correct event(s) in `render` and create filter object.

## 3. Pass Callback from App to Filter

- `/src/components/App.js`
- `/src/components/Filter.js`
- `/src/filter-images.js`

Import the filterImages function and the Filter component and create and place in App's `render` method. Pass an `onFilter` callback to Filter. 
- You will need to save the filter object in App's state. 
- In the callback, filter the images and update the ImageList component.
- To play nice with Add, call `update` on the Filter component when adding

## STRETCH: Make Add Image a Model Component

- `/src/components/App.js`
- `/src/components/AddImage.js`

Change Add Image to present a modal. Add a show prop and use that to
update AddImage from App. Ideally you would also add a close or cancel
button to the modal, which would require an additional `onCancel` prop to
be passed from App.

## SUPER STRETCH: Save Images

Use the api pattern to save data to local storage. In can be useful to boot-strap the data, meaning if there is no data, save your static file data.

---

## Points Break Down

Looking For | Points (10)
:--|--:
TDD Filter Function  | 4
Filter Component | 3
Integrate into App | 3
Add Image Modal | +4 
Save Data | +2