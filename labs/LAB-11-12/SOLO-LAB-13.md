# Solo Build: Chat Room

Let's build an online Chat App!

## User Stories

As a user, I want to...

1. go to a chat room page from the home page
1. send a chat message
1. see a realtime list of chat messages from all users with:
    - message
    - user profile image and name
    - date and time of the message

## Technical Notes

### Message Data Form

Save a message:

```js
{
    message: 'what user said'
    uid: 123, // id of who said this
    displayName: 'name of user who said this',
    photoURL: '/url/to/who/said/this.png',
    date: new Date().toISOString()
}
```

**NOTE:**

We are using `new Date().toISOString()` to create a date that firebase will store. To display that value, you will want to create a date object and format like:

```js
renderTemplate() {
    const message = this.props.message;
    const date = new Date(message.date);

    // use in your template like:
    return /*html*/`
        <p>${date.toLocaleDateString()} ${date.toLocaleTimeString()}</p>
    `;
}
```

You can also check out libraries like [moment js](http://momentjs.com/) which do cool stuff like "4 hours ago".

1. Add a script tag:
    ```html
        <script src="https://momentjs.com/downloads/moment.js"></script>
    ```
1. Add it to globals in .eslintrc:
    ```json
    "globals": {
        // other stuff
        "moment": false
    }
    ```
1. Use in JavaScript:

```js
renderTemplate() {
    const message = this.props.message;
    const momentDate = moment(message.date);

    // use in your template like:
    return /*html*/`
        <p>${momentDate.fromNow()}</p>
    `;
}
```

### DDD ChatList and ChatItem

You'll need to design ChatList with static data, then make ChatItem and DDD to make data-driven.

### Data Structure

The chat messages are another "list of data", the simple way to
structured in db would be:

- `messagesByRoom`
    - `<room key>`
        - `<message-key>`
            - `message`
            - `date`
            - `uid`
            - `displayName`
            - `photoURL`

Feel free to use the method, it will be the most similar to what you have
done before. If you are interested in a challenge, see the "STRETCH" section below.

### STRETCH: Auto Scroll

For UX, you can auto scroll the message list (or document body, depending on how you structured 
your html) by setting the `element.scrollTop = element.scrollHeight`). For example:

```js
render() {
    const dom = this.renderDOM();
    const chats = this.props.chats;

    chats.forEach(chat => {
        const chatItem = new ChatItem({ chat });
        dom.appendChild(chatItem.render());
    });

    // force the list to scroll to bottom
    dom.scrollTop = dom.scrollHeight;

    // if the scrolling is at the body level, this would be:
    // body.scrollTop = body.scrollHeight;

    return dom;
}
```

### STRETCH: Separate User Component

Notice that if the user changed their name or profile url, we would not get the new values.
And we are also duplicating the data. The more "correct", but also more complex way is to have
the Message component contain a User component that takes a `uid` and looks up the user.

The data would then be stored as:

- `messagesByRoom`
    - `<room key>`
        - `<message-key>`
            - `message`
            - `date`
            - `uid`

In order to see information about other users, you will need to save
user profile information by adding a `signInSuccessWithAuthResult` 
callback to firebaseui sign-in/up (see in-class demo code or `firebaseui` docs).

---


## Points Break Down

Looking For | Points (10)
:--|--:

