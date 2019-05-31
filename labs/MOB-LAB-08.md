# Mob Build: Paging API Data

Build an app that allows users to explore the Pokedex API

[https://alchemy-pokedex.herokuapp.com/](https://alchemy-pokedex.herokuapp.com/)

## Review API

Test your API and identify how the paging and will work. Take note of
the url and parameters you used. You will need to create this programmatically.

## Steps

Most of these steps should be familiar to you at this point:

1. Basic `App` and `Header` components
1. Pokedex list component with static Pokemon item html
1. DDD Pokemon item component
1. API service with method for getting pokedex
1. Integrate and Orchestrate loading data in App
    - Use pattern of a function that is called:
        - at load
        - in response to `hashchange` event
    - Use API to get data
    - Update Pokedex list component on `then` callback with data

## Basic Paging Component

1. Design Paging Component
1. In `render`, subscribe to button clicks and update url hash with new page number (see in-class demo for example)
1. Enhance API service call to incorporate queryProps

At this point your paging buttons should cause different pages of data to
be displayed

## Better Paging Component

Enhance the render of the Paging component (see in-class demo code). Use the current page and the totalCount to:
1. Disable the Next and Prev buttons as appropriate
1. Display the correct Page x of y

Pass `totalCount` prop from App to Paging:
1. When App is creating the Paging component
1. When App is updating the Pokedex list component, also update the Paging component with the new `totalCount`

## Add Searching

Design a Search Component. For Pokedex:

1. Have a "name" text input that searches `pokemon` property
1. STRETCH: Number inputs (like `defense` and `attack`)
1. STRETCH: Text inputs for other properties

## STRETCH Add Sorting

1. Offer a dropdown of possible sort field choices. Add to API call

---

## Points Break Down

Looking For | Points (20)
:--|--:
Basic List Render | 5 
Paging Component | 3
Paging Functionality Works Correctly | 3
Search Component | 3
Search Functionality Works Correctly | 3
Paging and Search work Together Correctly | 3
