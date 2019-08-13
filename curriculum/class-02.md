Class 02: JavaScript Components
===

Use JavaScript Components to render list of data dynamically

## Agenda

- Review: JavaScript Classes
- Components Classes
- Decomposing the UI
- Component Communication
- Updating Components
- Array `map`, `filter`, `sort`

## Review: JavaScript Classes

- Classes are ways to define common code for potentially many objects
- Classes typically combine some data (state) with behavior (methods)
- Classes are created using the `new` keyword
- To reference the current instance in a class method, use the `this` keyword
- Extend a class using the `extends` keyword

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

When making object literals out of variables where the name
of the property is same name as variable, instead of:

```js
const cats = [ /* ... */ ];

const props = {
    cats: cats
};

const catItem = new CatList(props);
```

write:

```js
const cats = [ /* ... */ ];

const props = {
    cats
};

const catItem = new CatList(props);
```

or even:

```js
const cats = [ /* ... */ ];

const props = { cats };

const catItem = new CatList(props);
```

or even shorter still:

```js
const cats = [ /* ... */ ];

const catItem = new CatList({ cats });
```

## Key Methods

Used on the defined Component:

method | purpose
---|---
`renderHTML` | Generate the html for this component, has access to props and state
`onRender` |  Called with created DOM, use for custom work like appending
child components and subscribing to events.
`constructor` | Rarely used, but can can be used for initialization logic when needed. Must call `super(props)`
`update` | Override for alternative logic to replacing content (see below)
`<custom>` | Custom methods for specific types of updating

Used by the parent component:

method | purpose
---|---
`constructor` | Call `new Component(props)` to make a new instance
`renderDOM` | render the DOM associated with this component
`update` | call `component.update(newProps)` with new props to re-render 
`<custom>` | Utilize custom methods for specific types of updating

## Updating Components

In a modern library or framework, the code to efficiently update lists of things is some of the hardest, most trick parts to write.

The good news for us is that we don't need to worry about efficient updates. We will simply replace the content owned by the component.

If there is a targeted update to be done, we can create a custom method for that action. 

## Array `map`, `filter`, and `sort`

method | new array? | purpose
---|---|---
map | Yes | Array to array transformation for every item
filter | Yes | New array only has "truthy" items
sort | No (returns same array) | sort existing array
