SOLO LAB 02: Component TODO List
===

Create a TODO list. Reuse your design from yesterday,
but create a new repo from scratch.

## Utility Helpers

You will need:

- `/test/html-equal.js` (don't forget to import in `/test/tests.js`)
- `/src/html-to-dom.js`
- `/src/components/Component.js`

## TODO List Data

Create a file that exports a TODO list. Data could look like:

```js
const todos = [
    {
        task: 'Learn templates',
        completed: true
    },
    {
        task: 'Learn forEach'
        completed: false
    },
    // etc...
];

export default todos;
```

## Process

Component Tree:

- `App`
    - `Header`
    - `AddTodo`
    - `TodoList`
        - [`TodoItem`]

## 1. Build Out Basic App Structure

- `index.html`
- `/data/todos.js`
- `/src/index.js`
- `/src/components/App.js`
- `/src/components/Header.js`
- `/src/components/TodoList.js`

Build out basic tree of app, starting at top and working down. The `App` component
should introduce the todo list data, passing as a prop to `TodoList`. Initially,
`TodoList` component can just show count of todos so you know it is receiving the
data via props.

## 2. DDD `TodoItem` component

- `/src/components/TodoItem.js`
- `/test/TodoItem.test.js`

Here is where you would build out static example of individual items. Since you did that 
yesterday, practice using DDD to build out the `renderTemplate` method of the 
`TodoItem` component.

## 3. Create `TodoItem` children in `TodoList`

- `/src/components/TodoList.js`

In the `render` method of `TodoList`, create an `TodoItem` component instance
for each todo in the todos data, and append to the `<ul>`.

## Add Todo

- `/src/components/App.js`
- `/src/components/AddTodo.js`

Create a new `AddTodo` component that has a form with data need to create an todo.
It will expect to be passed an `onAdd` callback function as a prop. In the `render` method,
subscribe to the form submit event and in the event listener bundle up the data into an 
object and pass that to the `onAdd` callback function.

`App` will need to pass `AddTodo` a callback as the `onAdd` prop. This should be _an arrow 
function_ that:
1. Adds the passed new todo to the todos data.
1. Calls the `update` method of `TodoList` passing in new props that has the updated
todo data.

## STRETCH: Delete Todo

- `/src/components/App.js`
- `/src/components/TodoList.js`
- `/src/components/TodoItem.js`

Augment `TodoItem` to display a delete button (you will need to update test). In the `render`
method, subscribe to the `click` event and pass the `todo` object to the `onRemove` prop.

`App` will need to pass `TodoList` a callback as the `onRemove` prop (and `TodoList` will need
to pass `onRemove` as a prop to each `TodoItem`!). This should be _an arrow 
function_ that:
1. Uses `indexOf` to find the index of the todo to remove from the todo list data.
1. Uses `splice` to remove the todo from the todo list data
1. Calls the `update` method of `TodoList` passing in new props that has the updated
todo data.

---

## Points Break Down

Looking For | Points (10)
:--|--:
Lean `index.html` and `index.js` setup  | 1
`App` and `Header` components | 2
`TodoList` component | 2
`TodoItem` component and test | 3
`Add Todo` | 2
Delete Todo | +3 