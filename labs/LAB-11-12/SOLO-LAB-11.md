# Mob Build: Users for Chat App

Let's build an online Chat App!

## Background

Users can chat with each other. There can be multiple chats,
or rooms. These can be arbitrary or based on some other thing like 
a movie or pokemon.

## LAB 11

The goal of Lab 11 is to get user authentication and management set up. If you
complete this part, start working on your chat components.

## Setup

### Firebase

Create your firebase project using the setup guide from the class agenda.

### Project

**Follow the project setup guide from the class agenda.**

There will be two pages
in today's lab:

- `index.html`
- `auth.html`

For today's lab, `index.html` should be protected, meaning if there is no signed-in user, the user should be redirected to `auth.html`.

Separate your components into folders per page (plus shared) `/src/components`:

- `auth`
- `home` (index)
- `chat` (for tomorrow)
- `shared`

## App

1. Build out the App component with a Header component
1. In `index.js`, use the check auth utility to direct the user 
from "home" to "auth"

## Auth

Make sure:
1. The firebaseui script and css are included in the head 
references of the page.
1. The script tag for your JS code is pointed at `src/auth/auth.js`

Follow the class example for using the firebase UI.

On successful sign-in, redirect the user to the home page (`./`).

## Profile Component

Create a profile component that will be loaded in the header. Keep
in mind that our event handlers should be above the component they
will load.

You can DDD the Profile component. You have a test for each state:
1. user
1. user with no avatar
1. no user

## Header Component

1. Remember to create the Profile component and pass an empty (`null`)
user.
1. Setup an `onAuthStateChanged` listener and update the Profile
component with the new user info.

## Sign Out

Implement the `render` method in Profile component. Goal is to
subscribe to click event of button and call `auth.signOut()`. **Don't forget
to check if user exists before subscribing to button!**

## STRETCH:

Add a **new page** for chat:
1. List of messages
1. Input for new message

New components for:
1. List of rooms
1. Form for adding a room (or some list of things)

---


## Points Break Down

Looking For | Points (10)
:--|--:
Project Setup  | 2
Setup Firebase | 2
Auth Page | 2
Profile Component | 2
Overall Integration (works) | 2
