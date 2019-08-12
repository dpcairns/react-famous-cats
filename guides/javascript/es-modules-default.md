ES Modules
===

- JavaScript has a built-in module system (finally!)
- A module offers clear boundaries between files. Explicit import and export of
what is exposed outside the file and what is being brought in from other files
- Modules allow us to break things into pieces in an explicit fashion
- JavaScript can figure out what files we require

## Using ES Module in the Browser

The root module is imported using a traditional `<script>` tag, but with `type="module"` attribute
specified:

```html
<script type="module" src="src/app.js"></script>
```

## Default Export and Import

While the ES Module system allows exporting and importing multiple things from a file, 
the "default" is the "main" thing (and often the _only_ thing) exported from a module file.

## Exporting

Export a function:

```js
export default function thing() {
    //...
}

// or

function thing() {}

export default thing;
```

Export anything same way:

```js
export default ['bananas', 'mangoes', 'cherries'];

// or

const fruits = ['bananas', 'mangoes', 'cherries'];

export default fruits;

```

## Importing

For default exports, you can choose what to call it:

```js
import thing from './file.js';
```

For the browser, you will need to include the `.js` at the end of the file import.
VSCode has problems with this :(
