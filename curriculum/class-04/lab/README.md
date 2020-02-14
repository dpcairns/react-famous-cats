LAB 05: Search and Page Pokedex
===

## Goal

The goal for LAB 04 is to:

1. Provide query parameters to server url to control data returned
1. Use the Url to maintain state on app "location", storing the options info in the hash (`#`) portion on the url

## API

API is available here: https://alchemy-pokedex.herokuapp.com

Landing page has API documentation.

## Paging and Search Component

Search needs:
1. find pokemon by name
1. should reset `page` to `1`
1. **STRETCH**
    * Based on `type`
        1. Notice there are two possible matches for each pokemon!
    * Pick _at least_ one quantified attribute (attack, defence, etc.)
        1. Allow user to enter a _minimum_ value.
        1. Make sure your input only allows whole, positive integer values.
    * Add more search terms!

Paging needs:
1. previous and next buttons
1. disabled buttons when out of range
1. display `page 5 (currentPage) of 10 (totalPage)`

Both components need to:
1. Write their options to the hash query (in the URL). Search, for example, should store the search query in the URL hash, and the Paging component should store the current page in the URL hash.
1. Read values from the hash query:
    1. on load
    1. when hash changes if not updated by `App`

### API

Your service API function (getPokemon) needs to read the queryString stored in the hash and append as actual query params to API call

## Pokedex App

Pokedex App needs to orchestrate loading the data repetitively. It will need to listen to the hash change event and rerun the query appropriately.

## STRETCH: Sort

Sort.js component with field and direction!

## Points Break Down

Looking For | Points (10)
:--|--:
Search Component for Pokemon | 3
Paging Component | 3
Sets state on hash change and listening to hash change to load pokemon and App.js set state | 2
API service function (make url and call) | 2
More Searches | +2
Sort | +2
