# Mob Build: Search API Data

Enhance lab from yesterday with Search Functionality

API Link:

https://futuramaapi.herokuapp.com/


## Review API

Test your API and identify how the search will work. Take note of
the url, you will need to create this programmatically.

## Design Search Component

- `src/components/Search.js`
- `src/components/App.js`

Visually design the Search Component and place into App (or Header or whereever it should go).
 You want to offer a form with a text box and button for searching (don't hit the 
API on per keystroke basis, wait for enter or button click).

## Make the Search Component "Talk" to the url

- `src/components/Search.js`

In the Search component `render` method, you need to accomplish two things:

1. Update the window location hash with a new search param hash when the form is submitted
1. Keep the input in sync with what is in the hash of the url.
    - On initial page load (render of Search component)
    - In response to the window `hashchange` event

For #2, create a function in render to do the work required for both cases and:
    - call during the `render` method
    - call during the listener for the `hashchange` event

## Make App Aware of Hash Value

Use the same pattern as Search Component, a function called on initial render and
also called on `hashchange` event. 

Start by logging the received value from the hashchange event, then once that works, pass
the value to the api call.

This function should perform all aspects of each search:
1. Set loading spinner on
1. Call the API (with search param)
1. Update the List component
1. Set loading spinner off

## Make the API use the search Param

Pass the search value to your API. Use the format you tested in step #1.

Make sure the API works for "no search" case.

---


## Points Break Down

Looking For | Points (10)
:--|--:
Search Component Design  | 1
Search Component Talks to Url (on Load too)| 3
App Listens to Url (on Load too) | 3
API Uses Search | 3
