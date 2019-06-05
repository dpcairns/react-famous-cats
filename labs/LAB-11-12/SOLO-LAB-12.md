# Solo Build: Room Chat

Let's build an online Chat App!

## User Stories

As a user, I want to...

1. be able to add a chat room 
1. see a list of available chat rooms
1. remove a chat room, STRETCH: if I created it

## Technical Notes

Show the room list on the home page.

### Room Object

Store the current user's `uid` as an `owner` property for each room. 

```js
// this generates a random key and assigns to returned ref
const roomRef = roomsRef.push();

const room = {
    key: roomRef.key,
    owner: auth.currentUser.uid,
    name: nameOfRoom,
    // anything else you want to add
}
roomRef.set(room);
```

STRETCH: Don't render the delete button if `owner` doesn't match the current user's `uid`

---


## Points Break Down

Looking For | Points (10)
:--|--:
Room List/Add Room Design | 3
Add a Chat Room  | 2
Realtime List of Chat Rooms | 3
Remove a Room | 2
Protected Room Remove | +2
