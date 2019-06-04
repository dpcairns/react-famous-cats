Class 12: Reading and Writing Data
===

## Agenda

1. Firebase Realtime Database Structure


## Firebase Realtime Database Structure

The realtime db is structured like a tree of data. It is 
used much like a big "props" object, where the top-level
nodes represent a piece of data.

## Database Project Console

The built-in data console is super handy for playing around with data and testing
things out. Just make sure not to leave it in an inconsistent state.

**DEMO: Let's explore**
  
## Tree "Refs" (References)

Because the data tree can be very big, firebase uses the idea of "refs" (references)
to point to a node in the data tree. This is important because it allows us
to navigate to a part of the tree, and then read or write just the part of the tree.

Firebase cannot partially read a node, meaning once you issue a command to read a node,
you get the whole of the data at that node. This is why "refs" are so important, we can 
deal with navigating the tree separate from reading the tree.

References do not need to exist in the data (yet). When you do write to the tree, firebase
will fill in the needed nodes. Conversely, you cannot have empty data and firebase
will prune branches when they are "empty".

## Realtime DB is All Object

It doesn't really do arrays. This makes sense when you consider the realtime, 
multi-client nature of the db. Instead we have objects with "keys" that are
essentially id's. 

It does mean that if we want an array, we need to transform
our object into an array. Fortunately, this is a few lines to implement:

```js
function convertObjectToArray(object) {
    const keys = Object.keys(object);
    return keys.map(key => object[key]);
}
```

For objects, make sure to add the key to any value objects as that makes it easier to
know the key (id) of the object in an array.

## Writing Data

1. Use `set` to write or replace data at a ref node.
1. Use `update` to overlay properties at a ref node.
1. Use `remove` to remove a ref node

All of these return promises when the work is done.

## Reading Data

All data callback are passed a `snapshot` object. Call `snapshot.val()`
to get the value.

Read data by subscribing to the `'value'` event:

1. Read data once, returns a promise, use: 
    ```js
    ref.once('value').then(snapshot => {
        const value = snapshot.val();
    });
    ```
1. Read data ongoing, event callback, use: 
    ```js
    ref.on('value', snapshot => {
        const value = snapshot.val();
    });
    ```





