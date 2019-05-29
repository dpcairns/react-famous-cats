# Mob Build: Search API Data

Enhance lab from yesterday with:
1. Search Functionality
1. Error Messaging

API Link:

https://futuramaapi.herokuapp.com/


## Review API

Test your API and identify how the search will work. Take note of
the url, you will need to create this programmatically.

## Design Search Component

- `src/components/Search.js`
- `src/components/App.js`

Visually design the Search Component and place into App. You want to offer a form with a text box and button for searching (don't hit the 
API on per keystroke basis, wait for enter or button click).

## Make the Search Component "Talk" to the url

- `src/components/Search.js`

In the Search component `render` method, you need to accomplish two things:

1. Listen to the window `hashchange` event and update the value of the input with the correct value from the hash faux search params

## Setup

- `index.html`
- `src/main.css`
- `src/index.js`
- `src/components/Component.js`
- `src/components/html-to-DOM.js`
- `src/components/App.js`
- `src/components/Header.js`
- `src/components/header.css`
- `src/components/<Thing>List.js`
- `src/components/<thing>-list.css`

(plus config files and other boilerplate)

Basic app setup with header html and css, and empty list:

```
-- App
 |
 +-- Header
 |
 +-- <Thing>List
```

## DDD List and Item

- `src/components/<Thing>List.js`
- `src/components/<thing>-list.css`
- `src/components/<Thing>Item.js`
- `src/components/<thing>-item.css`
- `test/tests.js`
- `test/<Thing>Item.test.js`

1. Work out html and css for the list and list items
1. Create test and `<Thing>Item` component with `renderTemplate` that returns static html example
1. Under test, make `renderTemplate` work based on `this.props.<thing>`

```
-- App
 |
 +-- Header
 |
 +-- <Thing>List
 |
 +-- **<Thing>Item**

```

## API Service

- `src/services/<topic>-api.js`

Create a `<topic>-api.js` that exposes the service methods from the api by exporting an
object with a method per service call. Make sure to `return` the `fetch` promise chain.

As a general rule, create one api module per service. Because we don't want our testing infrastructure to be dependent on actual api call, we will write this without test. (We can try the fetch call `App` to make sure it works - see next step).

## Consume Service

- `src/services/<topic>-api.js`
- `src/components/App.js`

Import the api module into `App` and in the render call the correct api method and log
the data being received.

## Orchestrate List Component

- `src/components/App.js`
- `src/components/<Thing>List.js`
- `src/components/<Thing>Item.js`

1. Create the `render` method in list component and implement
going over the data and creating an item component per item of data
in the list array.
1. In App:
    1. Pass the list component an empty array for initial prop value.
    1. Call update on the list component passing an updated prop with 
    the data returned from the api call.

## Loading Component

- `src/components/Loading.js`
- `src/components/App.js`

1. Design a loading spinner and add to App
1. Pass a prop of `loading: true` to new Loading component
1. Add a finally to your api call, and update loading with `loading: false`

---

## Points Break Down

Looking For | Points (10)
:--|--:
Basic Setup and Component Structure  | 1 
DDD List Item | 2
API Service with `fetch` | 2
Loading | 1
Orchestrate API call and updates in App | 4
