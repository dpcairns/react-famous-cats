LAB 13: Favorite API
===

Choose a searchable third party API and allow user to favorite items from the API, which are saved to your database. User can also view list of their favorites.

Group Lab: **must** use mobster or other timer to switch. Feel free to split up work.

**Make sure to clear your token/user from prior lab from localstorage!!!**

## Starter Code

New `data` script templates and updated pg `client` helper module

## App Pages

1. Welcome Home Page (public)
1. Auth Page (public)
1. Search Page (protected)
1. Favorites Page (protected)

## Server Routes

method | url
---|---
`POST` | `/api/auth/signup`
`POST` | `/api/auth/signin`
`GET` | `/api/{resources}?search={query}`
`POST` | `/api/me/favorites`
`DELETE` | `/api/me/favorites/:id`
`GET` | `/api/me/favorites`

## Database

1. `users`
1. `favorites`
    - fk `user_id`
    - store 
        - id from source system
        - any fields needed by list component




