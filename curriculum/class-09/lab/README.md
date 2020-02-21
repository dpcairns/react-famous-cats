Lab 09: First Fullstack App
===

Create your first fullstack app and server!

There will be multiple labs building on the same project in two different repos.

## Domain Topic

Pick an "entity" (resource, i.e. guitars, dogs, cars, games) for your app. Ideally, something of interest to you.
**However**, your resource should:

1. Only have one level of properties (no nested objects or arrays)
1. Have properties with at least one of each type:
    * string/text
    * number
    * boolean (true/false)
    * (type, breed, category, model) string/text that would be something in a dropdown, either an attribute type or related resource

## Casing

In SQL db, use `snake_case`.

## Project

Create two new github projects. One for the backend, and on the for the front-end.

### Folder and File Structure

The lab contains `starter-code`. Copy the contents of this folder to your lab. **You will need to copy `.env.example` to `.env`!**

This is a guide to the overall structure, **not all parts are built out today**. 

**Note that "resource" refers to your domain topic and should be replace with actual name**

**Add files as needed, you should not create a bunch of empty files in your project!**

* back end repository
    * `data`
        * `create-tables.js`
        * `drop-tables.js`
        * `load-seed-data.js`
        * (seed data, `js` or `json`)
    * `.eslintrc` 
    * `.gitignore` 
    * `.env`
    * `.env.example`
    * `.travis.yml` 
    * `package-lock.json`
    * `package.json`
    * `README.md`
    * `server.js`

* front-end repo: just use `create-react-app`

## Lab 09 Goal

1. Data scripts for creating table, dropping table, and seeding data in `/data` directory
1. Express route the gets a list of data
1. Built-out list page that uses service module (`getCats(), for example`) to fetches and components to display that data

### Server

The server needs to:

1. Use `cors()` to handle direct request from app
1. Have data scripts for:
    1. creating tables 
    1. dropping tables
    1. load seed data
    1. do all three steps above
1. Create a `.json` or `.js` file with initial data
1. Handle a `GET` to `/api/<your-resource-plural>` and return list of data

### App

* Focus on the list page, the form page will be complete in tomorrows lab.
* Use React components to structure your UI

## Deploy

Deploy to heroku with added pg instance. 
* Don't forget to seed the data!

Here is template `.env` setup for managing both local and production postgres instances

```sh
# *** Database ***

# - PRODUCTION:
#DATABASE_URL={copy from "> heroku config"}
#PGSSLMODE=require
```

## Where do I start?

-Add the heroku db uri to you .env file and update the `/data` scripts until you get data in your database.
-Write an express endpoint to fetch that data as a list (the URL you fetch from will change depending on whether you have deployed your heroku app)
-Write a front end to display thaty fetched data

## STRETCH

1. Design form page. Will be used for adding new data and editing existing data
1. Design and add a Detail Page. Will be used for detail view of single resource

## Points Break Down

Looking For | Points (10)
:--|--:
Server and App project setup in repos | 2
Data scripts and load seed data in `/data` directory | 2
Express routes and SQL | 2
Frontend pages and components | 2
Deployed and working on heroku | 2
