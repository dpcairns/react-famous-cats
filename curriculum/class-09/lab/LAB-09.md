Lab 09: New Data
===

## Lab

1. Normalize Database
1. Add a new resource

## Project

Continue with same team and project as `LAB-08`

## Requirements

Listed below by App and Server, but make sure to **Work in vertical slices**:

1. Technology update
    - schema change (two tables)
1. Add a resource
1. New Detail Page

## App

1. Form Page for new resource
    - needs to load secondary resource of lookup values
1. New Detail Page for single resource
1. Add new methods to Service API module

Example service method for getting one resource:

```js
export function getCat(id) {  
    const url = `${URL}/cats/${id}`;
    return fetch(url)
        .then(response => response.json());
}
```

## Server

1. Update scripts for two related tables
1. Load additional seed data
1. Update `GET /<resources>` route to use `SQL` to join tables
1. Create new `GET /types` route for list of lookup values
1. Create new `POST /<resources>` route for inserting a resource
    - returns full copy of resource from database

## Deploy

Keep Heroku up-to-date

## Points Break Down

Looking For | Points (20)
:--|--:
Normalized DB, JOINS, and separate GET Routes | 8
Resource form with populated drop-down | 6
Create a new resource | 6

