# Solo Build: Search API Data

Enhance lab from yesterday with Search Functionality

API Link:

https://last-airbender-api.herokuapp.com

## Review API

Test your API and identify how the search will work. Take note of
the url, you will need to create this programmatically.

## Add Links to CharacterItem

- `src/components/CharacterItem.js`

Enhance your list items to have links for "enemies" and "allies". This will keep the 
URL in sync

## Make App Aware of Hash Value

Use the same pattern as Search Component, a function called on initial render and
also called on `hashchange` event. 

Start by logging the received value from the hashchange event, then once that works, pass
the value to the api call.

This function should perform all aspects of each search:
1. Set loading spinner on
1. Call the API, either:
    - have a separate method for all, enemies, and allies
    - make the method "smart"
1. Update the List component
1. Set loading spinner off

## Make the API use the search Param

Pass the search value to your API. Use the format you tested in step #1. Either:
- have a separate method for all, enemies, and allies
- make the method "smart"
Make sure the API works for "no search" case.

## Stretch: Search Description Component

Shows a description of the search:
- "All Characters"
- "Enemies of Aang"
- "Allies of Aang"
- "Earth Types" (if implemented)

## Stretch: Types

Add Clickable Buttons for each Air Bender Type. This executes a search based
on type (see API)

---


## Points Break Down

Looking For | Points (10)
:--|--:
Add Links to Items  | 3
App Listens to Url (on Load too) | 3
API Uses Search | 4
Search Description | +2
Search on Types | +3

