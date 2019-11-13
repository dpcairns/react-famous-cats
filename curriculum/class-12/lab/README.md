LAB 12: Users and Authentication
===

## Goal

Allow users to sign up for TODO app and handle todo items by user

1. Backend (server and db) authentication and user management
1. Sign in page
1. Todos by user
1. STRETCH: Multiple todo lists per user

## Project

Continue with yesterday's lab.

**Work in vertical slices!**

## User

```js
{
    id: 2
    email: 'myemail@emails.com',
    hash: 'dsfsef3fddrzz333ff'
    // you can add other columns like: display_name, avatar_url, etc.
}
```

## Server 

### Auth Libraries and Code

1. Copy the starter-code `/lib/auth` folder to the same location in your project
1. Install dependecies from the command line:
    ```sh
    > npm i bcryptjs jsonwebtoken
    ```

### Database Schema

1. Add a new `users` table (see daily README and demo code)
1. Add a `user_id` foreign key to `todos` table that references the `id` of the `users` table (this was not in the demo code, but you have done foreign keys before)
1. Add a `user_id` with a value of `1` to each of your seed todos
1. Run your database scripts to fully drop, recreate, and seed your database.
1. Verify that your app still runs and shows the seed todos
1. Commit your changes

### Auth Routes

#### Adding Auth

1. Refer to the demo code for how to use the provided auth modules, basic steps:
    1.  `require` the `ensureAuth` and `createAuthRoutes` modules
    1. Provide `selectUser` and `insertUser` methods and create the `authRoutes`
    1. Add the authRoutes with `app.use('/api/auth', authRoutes);`
    1. Before data routes, add ensureAuth with `app.use('/api', ensureAuth);`
    1. Add an `APP_SECRET` to your `.env`
1. Using `postman`:
    1. Test that trying to access data at `/api/todos` returns a failure http status code.
    1. Test that you can signup, and then signin again with same credentials. Copy the token that is returned
    1. Adding the token as the header `Authorization`, test that you can now access the `/api/todos` route
    1. You can also trying posting new todos
1. Commit your changes

#### Todos in User Context

Change your SQL queries in your todo routes to perform the operations in the context of the calling user:

1. Add `req.userId` on `INSERT` `user_id` foreign key
1. Add `WHERE user_id = $1` with `req.userId` on `SELECT`, `UPDATE`, and `DELETE` of todos

Test in postman that this is working correctly

## App

1. Make your `index.html` a "sign up" and "sign in" page
1. Manage an access token in local storage
    1. Append to data requests
    1. Redirect if not present on "protected" pages

### Components

- `App`
    - `SignUp` (props: `onSignup`)
    - `SignIn` (props: `onSignin`)
    
### API Services

#### Auth

Add new methods for signup and signin:

1. `signup(user)`
1. `signin(credentials)`

Call these methods in the `onSignup` and `onSignin` functions.

#### Token Management

Need to look for token in `localStorage` and:
1. Redirect if no token if not on the home page
1. Append to each request if there is a token


## Points Break Down

Looking For | Points (10)
:--|--:
Server sign-up and sign-in routes + auth middleware | 3
Server correctly enforces user-specific actions | 2
App auth on home page and associated sign up/in | 3
App manage access token including redirect if not found | 2
Multiple TODO lists | +4
