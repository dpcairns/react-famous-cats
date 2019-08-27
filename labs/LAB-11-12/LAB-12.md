LAB 12: Users and Authentication
===

## Goal

Allow users to sign up for TODO app and handle todo items by user

1. Backend (server and db) authentication and user management
1. Sign in page
1. Todos by user
1. STRETCH: Multiple todo lists per user

## Project

Use the same project structure as for the prior lab, a single repository with the app in the `public` folder.

**Work in vertical slices!**

## User

```js
{
    id: 2
    email: 'myemail@emails.com',
    hash: 'dsfsef3fddrzz333ff'
}
```

## Server 

1. Refer to class-12 agenda for detailed steps in setting up users and auth on server
1. Add a `user_id` foreign key to `todos` table.
    1. Add `req.userId` on `INSERT`
    1. Add `WHERE user_id = $1` with `req.userId` on `SELECT`, `UPDATE`, and `DELETE` of todos

## App

1. Create a new `auth.html` page that can handle both "sign up" and "sign in"
1. Manage an access token in local storage
    1. Append to data requests
    1. Redirect if not present on "protected" pages

### Components

- `AuthApp`
    - `SignUp` (props: `onSignup`)
    - `SignIn` (props: `onSignin`)
    
### API Services

Need to look for token in `localStorage` and append to request

1. `signup(user)`
1. `signin(credentials)`


## Points Break Down

Looking For | Points (10)
:--|--:
Server sign-up and sign-in routes + auth middleware | 3
Server correctly enforces user-specific actions | 2
App `auth.html` page and associated sign up/in | 3
App manage access token including redirect if not found | 2
Multiple TODO lists | +4
