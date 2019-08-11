Class 02: JavaScript Components
===

Use JavaScript Components to render list of data dynamically

## Agenda

- JavaScript Classes
- Components Classes
- Decomposing the UI
- Component Communication
- Updating Components

## JavaScript Classes

- Classes are ways to define common code for potentially many objects
- Classes typically combine some data (state) with behavior (methods)
- Classes are created using the `new` keyword
- To reference the current instance in a class method, use the `this` keyword

**DEMO: Animal Class**

## Component Classes

- In JavaScript, we rarely uses classes to model data (we just use object literals)
- We do use classes for utilities and things that do work
- Our component class describes an object that controls a part of the DOM

Goal is for our `html` file to be pretty empty and all html owned by components.

We typically call the top-level component `App`.

## Decomposing the UI

- The DOM is a tree
- The typical UI layout respects the tree
- (Special layout can cause sections to overlap, but they are still trees
in the elements view)
- A component "owns" the section of DOM it generates

## Components Communication (aka "props")

- Pass any need data to the component in it's constructor
- A Component can introduce new data, with the following rules
    - Push data down as low as possible to where it is used
    - Shared data must belong to a common ancestor
    - In practice, this week most of your data will be introduced by `App`
- So what if a parent needs to know about something that happened in a child?
    - Pass a callback property!

### Shorthand for Object Literals

When making object literals out of variables were the name
of the property is same name as variable, instead of:

```js
const cats = [ /* ... */ ];

const props = {
    cats: cats
};

const catItem = new CatItem(props);
```

write:

```js
const cats = [ /* ... */ ];

const props = {
    cats
};

const catItem = new CatItem(props);
```

or even:

```js
const cats = [ /* ... */ ];

const props = { cats };

const catItem = new CatItem(props);
```

or even shorter still:

```js
const cats = [ /* ... */ ];

const catItem = new CatItem({ cats });
```

## Key Methods

- `constructor` - new instance, store props
- `renderTemplate` - generate html, has access to props
- `renderDOM` - call `renderTemplate` and convert to DOM
- `render` - call `renderDOM` and return results. **can be overridden
in component if custom work to do**
- `update` - call with new props to rerender (see below)

## Updating Components

In a modern library or framework, the code to efficiently update lists of things
is some of the hardest, most trick parts to write.

The good news for us is that we don't need to worry about efficient updates. We will simply replace the content owned by the component.

If there is a targeted update to be done, we can create a custom method for that
action. 

## Lab Build

Repo: `photo-gallery`


