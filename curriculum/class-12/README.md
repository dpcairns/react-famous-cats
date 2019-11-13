Class 12: Users and Authentication
===

## Server

### "Auth" (Authentication and Authorization)

- Authentication is "are you who you say you are?"
- Authorization is "we know who you are, but are you allowed to do a thing?"

**The server _must_ mistrust the incoming client request**. Browser code can provide good UX, but is never a substitute for the server enforcing things are being done correctly be the correct users.

In Career Track (Code 401), you will learn to build auth from scratch. For now, code modules are provided that you can reference if you are curious, but you are being asked to focus on implementing these pieces on your server.

We are leveraging two other technologies that need to be installed
1. [`bcryptjs`](https://www.npmjs.com/package/bcryptjs) - enables us to not store password in plain text in the db
1. [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) - tokens can be given to callers of our server to show that they have authenticated. Think of it has getting a wristband after showing your id.

Install via:

```sh
> npm i bcryptjs jsonwebtoken
```

Steps:

#### 1. Users Table

Add create and drop table scripts for `users`. 
1. At a minimum **must** have these columns:
    1. `id`
    1. `email`
    1. `hash`
1. Also can include other columns like `display_name`

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(256) NOT NULL,
    hash VARCHAR(512) NOT NULL
);
```

#### 2. Auth Routes with Client Queries

Add auth routes with client queries for:
1. `selectUser(email)`
    * Return Promise of user by email. 
    * Needs to include `hash`, which will be stripped from response, plus any fields the app needs
    * Used to verify email is not in use _and_ to check password against hash
1. `insertUser(user, hash)`
    * Takes request body plus password hash
    * Returns Promise that gives back inserted user object
    * Used to insert a new user and return same-formatted user object as `selectUser`
1. Add custom `APP_SECRET` for creating tokens


Example setup:

```js
// Auth Routes
const createAuthRoutes = require('./lib/auth/create-auth-routes');

const authRoutes = createAuthRoutes({
    selectUser(email) {
        return client.query(`
            SELECT id, email, hash 
            FROM users
            WHERE email = $1;
        `,
        [email]
        ).then(result => result.rows[0]);
    },
    insertUser(user, hash) {
        return client.query(`
            INSERT into users (email, hash)
            VALUES ($1, $2)
            RETURNING id, email;
        `,
        [user.email, hash]
        ).then(result => result.rows[0]);
    }
});

// before ensure auth, but after other middleware:
app.use('/api/auth', authRoutes);
```

#### 3. Ensure Auth Middleware

1. Add `ensureAuth` middleware:
    1. Checks for token
    1. Assigns user's id to `req.userId`
1. Utilize `req.userId` to make sure server actions are correct

```js
// everything that starts with "/api" below here requires an auth token!
app.use('/api', ensureAuth);
```

```js
app.get('/api/test', (req, res) => {
    res.json({
        message: `the user's id is ${req.userId}`
    });
});
```


## App

1. On your home page handle both "sign up" and "sign in"
1. Manage an access token in local storage
    1. Append to data requests
    1. Redirect if not present on "protected" pages
