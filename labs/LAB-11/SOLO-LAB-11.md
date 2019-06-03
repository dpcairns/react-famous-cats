# Mob Build: Users for Coin Toss

The app will bring back our Coin Toss for an online version

## Background

Users can play games for (pretend) money.

## LAB 11

The goal of Lab 11 is to get user authentication and management set up. If you
complete this part, start working on your coin flip components.

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

Add a **new page** for the coin toss game. Think about design
of:
1. The flip and display of coin
1. Bet, including side and amount
1. How much money the user has

---


## Points Break Down

Looking For | Points (10)
:--|--:
Project Setup  | 2
Setup Firebase | 2
Auth Page | 2
Profile Component | 2
Overall Integration (works) | 2
