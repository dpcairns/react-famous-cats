LAB 04: Search Pokedex
===

## Goal

The goal for LAB 04 is to:

1. Provide query parameters to server url to control data returned
1. Use the Url to maintain state on app "location", storing the options info in the hash (`#`) portion on the url

## API

API is available here: https://alchemy-pokedex.herokuapp.com

Landing page has API documentation.

## Service

Move fetching and url into `/src/services/pokedex-api.js`. Import into `App`
and use.

## Paging and Search Component

Paging needs:
1. previous and next buttons
1. disabled buttons when out of range
1. display page x of y

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

Both components need to:
1. Write there options to the hash query
1. Read values from the hash query:
    1. on load
    1. when hash changes if not updated by `App`

## App

`App` needs to orchestrate loading the data repetitively. It will need to listen
to the hash change event and rerun the query appropriately.

## Points Break Down

Looking For | Points (10)
:--|--:
Paging Component | 2
Search Component for Pokemon | 1
Use Hash Query to store and get options | 3
Reloads on hash change | 2
API service (make url and call) | 2
More Searches | +2
Sort | +2
