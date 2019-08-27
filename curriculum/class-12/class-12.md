Class 12: Users and Authentication
===

1. Add auth routes with client queries for:
    1. Getting a id and password by email
    1. Inserting a new user
1. Add `ensureAuth()` middleware
    1. Check for token
    1. Assigns user's id to `req.userId`
1. Add `APP_SECRET` for creating tokens
1. Utilize `req.userId` to make sure server actions are correct