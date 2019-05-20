SOLO LAB 01: TODO List
===

Create a TODO list 

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

### Use Design-Driven Development

1. First create a static example of what you want the rendered todo list
to look like. Include a checkbox for indicating `completed`.
1. Use the static html of one of the tasks to TDD your template function
1. Replace the static data with dynamically driven data. Remember that
the `checked` attribute itself will need to be included, or not included:
    ```js
    let checked = '';
    
    if(task.completed) {
        checked = 'checked';
    }

    const html = /*html*/`
        <li>
            <input ${checked}>
        </li>
    `;
    ```

### Orchestrate and Integrate

1. `index.js` is where the action will happen
1. import template function
1. import `htmlToDOM` function
1. import array image data
1. reference the target parent element (`<ul>`)
1. call `.forEach` on the array of images, passing a callback function
1. For each image
    1. Convert image object to html using template
    1. Convert html to DOM using htmlToDOM
    1. Append to list parent (`<ul>`)

