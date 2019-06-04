Class 13: Lists of Data, Data Relationships
===

## Misc

1. Config check
1. Project templates
1. Google OAuth

## Agenda

1. Firebase Realtime Database Structure
1. Database Project Console
1. Tree "Refs"
1. Realtime DB is All Object
1. Writing Data
1. Reading Data


## Save User Info

```js
ui.start('#firebaseui-auth-container', {
    //...
    callbacks: {
        signInSuccessWithAuthResult(authResult) {
            const user = authResult.user;
            // update firebase wth user info
            return true;
        }
    }
```