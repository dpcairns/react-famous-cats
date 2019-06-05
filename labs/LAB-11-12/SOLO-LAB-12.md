# Solo Build: Room Chat

Let's build an online Chat App!

## User Stories

As a user, I want to...

1. be able to add a chat room 
1. see a list of available chat rooms
1. remove a chat room, STRETCH: if I created it

## Technical Notes

Show the room list on the home page.

### Components

Tree of components:

- `App`
    - `Header`
        - `Profile`
    - `AddRoom`
    - `RoomList`
        - [`RoomItem`]

### AddRoom

- `AddRoom.js`

Form with a text input for name of the room, and button for submitting. You can
add other properties to your room if you like. Import the fbRef and 
add add the room on submit (see next section). Good idea to `reset` the form
when set is complete.

#### Room Object

Store the current user's `uid` as an `owner` property for each room. 

Each room needs an identifier, or key. Firebase can make us a key
by calling `push` which returns a ref:

```js
// this generates a random key and assigns to returned ref
const roomRef = roomsRef.push();

const room = {
    key: roomRef.key,
    owner: auth.currentUser.uid,
    name: nameOfRoom,
    // anything else you want to add
}

roomRef.set(room).then(() => {
    // reset the form
});
```

### RoomList and RoomItem

DDD a list of rooms. The individual room items need to have clickable links that takes the 
user to the chat page passing the key (id) of the room. The `href` should
look like `<a href="./chat.html?key=12ll3rer03>`. 

There should also be a delete button. STRETCH: Don't render the delete button if `owner` doesn't match the current user's `uid`.

By the end, RoomList should take a `rooms` property array of rooms, and RoomItem should take a `room` property that is an object representing a room.

### Populate RoomList

- `App.js`
- `RoomList.js`

Subscribe to the value event for the list of rooms in App component. Convert to an 
array and call `update` on RoomList.

### Delete a Room

Subscribe to click of delete button in RoomItem and remove the corresponding room data node
in firebase.

---

## Points Break Down

Looking For | Points (10)
:--|--:
Room List/Add Room Design | 3
Add a Room  | 2
Realtime List of Rooms | 3
Remove a Room | 2
Protected Room Remove | +2
