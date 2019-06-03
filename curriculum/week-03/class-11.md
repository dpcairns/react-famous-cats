Class 11: User Auth with Firebase/GCP
===

Requires:

- [Firebase Account](https://console.firebase.google.com)

## Add New Project

1. Create a new project from the firebase console
1. Add all team members to the project as administrators
    - Click the settings wheel in upper-left by "Project Overview"
1. Setup Authentication
    - Click "Authentication" in left sidebar menu, then "Setup"
    - Choose the following:
        1. Email/Password
        1. Google
        1. Optional: GitHub
1. Setup Realtime Database
    - Click "Database" in left sidebar menu
    - Scroll down to Realtime database, click "Create database"
    - Choose "test mode"
1. Go back to dashboard by clicking on "Project Overview"
2. Copy Config Setup by clicking the Web Button:
        <br>
        ![firebase config data](get-web-config.png)
3. Paste config block into `src/services/firebase.js` (see below)

## Config Project

This week sees the return of using multiple web pages. We will
store our component files by page, but also include a "shared"
folder for components and modules used by more than one page. Each page will 
have its own `index.js` and "App" main component. 

The file structure will look like:

```
-- assets
-- src
    |
    +-- auth
         +-- auth.js
         +-- AuthApp.js
         +-- auth-app.css
    +-- home
         +-- index.js
         +-- App.js
         +-- app.css
    +-- shared
         +-- Header.js
         +-- header.css
         +-- Loading.js
         +-- loading.css
    +-- services
         +-- firebase.js
    +-- utils
         +-- check-auth.js
         +-- hash-storage.js
         +-- html-to-DOM.js
    +-- Component.js
    +-- main.css
-- test
    +-- <testing files>
-- <config files>
-- auth.html
-- index.html
```

## Firebase References

Each webpage will add `<script>` tags for firebase modules. `firebase-app.js`
is always required, then one file per service (auth, database, etc.).
These can go in the `<head>` of the html page:

```html
<head>
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-auth.js"></script>
</head>
 ```

 For the auth page, also add the firebase UI (script and css):

```html
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favorite Movies</title>
    
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-database.js"></script>
    <script src="https://cdn.firebase.com/libs/firebaseui/4.0.0/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/4.0.0/firebaseui.css" />
    
    <link rel="stylesheet" href="src/main.css">
    <link rel="stylesheet" href="src/auth/auth.css">
    <link rel="stylesheet" href="src/shared/header.css">
</head>
```

## Firebase Globals

Add the following globals to your `.eslintrc`:

```json
    "globals": {
        "QUnit": false,
        "firebase": false,
        "firebaseui": false
    },
```

## Firebase Config

Here is the setup for `firebase.js`. Notice we are using **named exports**.
Not all config values are needed, depends on services. These should be
copied from the firebase console.

```js
const config = {
    apiKey: '<>',
    authDomain: '<>',
    databaseURL: '<>',
    projectId: '<>',
    storageBucket: '<>.appspot.com',
    messagingSenderId: '<>'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.database();
```

## Firebase Auth

The firebase `auth` object offers an event that can be used to listen for a signed-in user.
Firebase will also check localStorage for a token if the user has logged in before.

```js
auth.onAuthStateChanged(user => {
    if(user) {
        // we have a user!
    }
    else {
        // no user (yet)
    }
});
```

### No User

Use this to create an auth checker that will
redirect the user if they are not signed in:

```js
// file: utils/check-auth.js

import { auth } from './firebase.js';

auth.onAuthStateChanged(user => {
    if(!user) {
        window.location = './auth.html';
    }
});
```

Use it like this in any page that requires an authenticated
user (like `index.js`):

```js
import '../utils/check-auth.js';
import App from './App.js';

const root = document.getElementById('app');
const app = new App();
root.appendChild(app.render());
```

### User

Here is basic code to put in component that will load user (Today
that will be `Header`).
This can be logged initially like below to see that it is working.

```js
import { auth } from '../services/firebase.js';

// use in code:
auth.onAuthStateChanged(user => {
    if(user) {
        console.log(user);
    }
});
```

### Sign Out

Sign out the user by calling:

```js
auth.signOut();
```

## Firebase UI

Firebase UI is a pre-canned UI for sign-in and sign-up, including OAuth
workflows through Google.

Here is the boilerplate code:

```js
import { auth } from './firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

// in code when time to load:
ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: './',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
});
```

## Handling Evented Data

For our evented data, we need to be conscious of **removing** event
listeners when they are no longer in use, or if our component re-renders.

There are a few strategies:

1. Put the listener in a parent component that will update the child
1. Put the listener in the component that will use the data, and
manually update the dom nodes
1. Create an `unrender` method in our component, store the listener
in render, and unsubscribe in `unrender`.
1. Create wrapper "container" components that sit between the component
that use the data and its parent.





  




