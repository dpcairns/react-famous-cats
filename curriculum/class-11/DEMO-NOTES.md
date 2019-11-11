# Demo Notes

## Server

1. Single `client.js` module for creating pg client
1. `types` table schema changes
    - `name` has `UNIQUE` qualifier
    - includes new `inactive` column
1. `types` routes:
    - full CRUD: `post`, `get`, `put`, `delete`
    - for this demo app (lab does not need this), on `GET` use conditionally added  `WHERE` clause to distinguish between:
        - active only (used in form drop-down) 
        - and all (includes inactive) for maintaining all rows
    - use `ORDER BY` to order types by type name on `GET`
    - `post` and `put` check for "uniqueness" error and return `400` status code
    - `delete` checks for "constraint" error and returns `400` status code
1. `scripts`:
    - updated `start:watch` prevents server from restarting when front end changes, preventing failed api calls when front-end reloads
    - new `setup-heroku` adds a pg instance and sets the ssl mode (one-time script)
    - new `setup-db:prod` runs the `setup-db` script _on heroku_

## Component Flow Diagram

Go through component diagram process:

1. Draw UI boxes
1. Compose Tree Diagram from step #1
1. For each component, what does it need?
1. Map out how the data will flow

## App

1. Demo introduces new page for CRUD of cat types
    - Can see the type appear in drop-down on Add Cat page
    - This page is what lab will be, but for todo list
1. Instead of multiple pages, all data maintenance is happening in one page:
    - GET initial list on load
    - ADD a new item to the list (form coordinated with list)
    - DELETE button removes item from list (with confirmation!)
    - UPDATE item by toggling active/inactive
1. `api` service:
    - Use `fetchWithError` function in `api` module
        - common code for making data from json
        - consistent propagation of errors within the app
        - notice other function don't need `async`
    - Get types has a filter for whether to include all types
1. Example of applying functional array methods in `CatTypeList`
1. More extensive use of passing function props:
    - `onAdd`, `onRemove`, `onUpdate`
    - Top level components "owns" the data, so all work goes thru this component
    - Welcome to "prop drilling", prop functions passed through two layers
1. Lots going on in `CatTypesApp`!
    - Using `this.state` to store the retrieved types, which are then accessed during add, remove and updated.
    - Displaying errors to the user
    - Common pattern for state update:
        - Make change on server (wait for response)
        - Adjust local state (array of types)
        - Update components with updated type array


 

