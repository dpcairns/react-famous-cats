# Sorted Contacts

Render a table of contacts and allow user to specify sort order

## Contacts Data

The file `data/contacts.js` contains an array of 50 faux contacts

## Steps

### Create Basic App

Create an app that renders all the contacts:

```
- App
    - Header
    - ContactTable
        - [ContactRow]
```

### Decide How to Sort

Two ways to implement sort:

1. A Sort component with a drop-down (select) of available sort
fields. Optional: A direction indicator (ascending/descending).
2. A SortableTableHeader component that renders the table column headers
and has a button in each column header. Optional: Manage direction

In both cases, `App` passes an `onSort` prop that is called back with a sort
object:

```js
const sortOptions = {
    property: 'name'
}
```

### TDD Sort Function

Write a test function that takes an array of contacts and a sort object, and
returns a new, sorted array.

Make sure to `slice` your source array!

### Implement Sort

Integrate the sort function into `App` and pass the sorted array to `contactList.update`.

