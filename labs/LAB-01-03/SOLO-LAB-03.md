SOLO LAB 03: Filtered TODO List
===

Add a filter to your todo list so user can limit the 
displayed todos.

## Filters

Your should offer two filters:

1. Text Input
    * Matches substring task description
1. Radio Buttons
    * Offers choices of
        - All (default)
        - Completed
        - Not Done

## Process

Component Tree:

- `App`
    - `Header`
    - `AddTodo`
    - **`Filter`**
    - `TodoList`
        - [`TodoItem`]

## 1. TDD Filter Function

- `/src/filter-todos.js`
- `/test/filter-todos.test.js`

TDD your filter function. You will need a test for each conditions:

1. string filters task
1. no string returns all tasks
1. All returns all
1. Completed returns completed
1. Not Done returns not completed
1. combo filter: string and completed
1. anything else you think of...

## 2. Filter Component

- `/src/components/Filter.js`

Design your Filter Component. It should be a real-time (`input` event) filter.
Subscribe to correct event(s) in `render` and create filter object.

## 3. Pass Callback from App to Filter

- `/src/components/App.js`
- `/src/components/Filter.js`
- `/src/filter-todos.js`

Import the filterTodos function and the Filter component and create and place in App's `render` method. Pass an `onFilter` callback to Filter. In the callback, filter the todos and update the TodoList component. 
- In the callback, filter the images and update the ImageList component.
- To play nice with Add, call `update` on the Filter component when adding.

## STRETCH: Mark Done and Remove Todo

- `/src/components/App.js`
- `/src/components/TodoList.js`
- `/src/components/TodoItem.js`

Pass an `onDone` and `onRemove` callback prop from App to TodoList to the
individual TodoItem's. Add a delete button to the TodoItem. On the check of the
checkbox, call onDone with the todo. On the click on the delete button, call
onRemove with the todo. Make the appropriate data modification and update
the list. 

## SUPER STRETCH: Save Todos

Use the api pattern to save data to local storage.

---

## Points Break Down

Looking For | Points (10)
:--|--:
TDD Filter Function  | 5
Filter Component | 3
Integrate into App | 2
Update Todo | +2 
Remove Todo | +2 
Save Todos | +3 