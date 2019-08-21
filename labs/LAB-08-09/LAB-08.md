Lab 08: First Fullstack App
===

## Lab

Create your first app and server!

Pick an "entity" (resource) for your app. Ideally, something of interest to you.
**However**, your resource should:

1. Only have one level of properties (no nested objects or arrays)
1. Have properties with at least one of each type:
    * string/text
    * number
    * boolean (true/false)
    * string/text that would be something in a dropdown, either an attribute type or related resource

## Project

Create new github project. For this lab, both the server and app will be in the same repository.

* The main folder will contain your `server` project, including database scripts
* Your app will live in `public`.

For running your project locally, you should:

1. Open the repo folder into a vscode instance and do server development here
1. Open the `public` folder into a separate vscode instance and do
the front end development from here. This will make `live-server` `eslint` behave normally. 

### Overall file structure

* repository
    * `data`
        * `create-tables.js`
        * `drop-tables.js`
        * `load-seed-data.js`
        * (seed data, `js` or `json`)
    * `lib`
        * (additional modules)
    * `public`
        * `assets`
            * (media)
        * `src`
            * `components`
                * `app`
                    * `App.css`
                    * `App.js`
                    * `FormApp.js`
                    * `FormApp.js`
                    * `Header.css`
                    * `Header.js`
                    * `ListApp.css`
                    * `ListApp.js`
                    * (other apps)
                    * (other common app stuff)
                * `{resource}`
                    * `{Resource}List.js`
                    * `{Resource}Item.js`
                    * `{Resource}Form.js`
                * `{other topics}`
                    * (more components)
            * `services`
                * `{resource}-api.js`
            * `styles`
                * `main.css`
                * `reset.css`
            * `index.js`
            * `list-index.js`
            * `form-index.js`
        * `test`
            * (testing files)
        * `.eslintrc`, 
        * `.gitignore`,
        * `index.html` 
        * `{resource}-list.html` 
        * `{resource}-form.html` 
    * `.eslintrc`, 
    * `.gitignore`, 
    * `.env`, 
    * `.env.example`, 
    * `package-lock.json`
    * `package.json`
    * `README.md`
    * `server.js`

## App

Goal for Lab:
1. Three page app with common header that has navigation
    1. Home Page (simple)
    1. List Page (fully flushed out using RWD)
    1. Form Page (does not need content yet!)
1. Service API module that fetches list of data and displays

## Server

The server needs to:

1. Use `cors()` to handle direct request from app
1. Have data scripts for:
    1. creating tables 
    1. dropping tables
    1. load seed data
    1. do all three steps above
1. Create a `.json` or `.js` file with initial
1. Handle a `GET` to `/api/<your-resource-plural>` and return list of data

## Deploy

Deploy to heroku with added pg instance. 
* Don't forget to seed data!

## STRETCH

1. Design form page. Will be used for adding new data and editing existing data
1. Design and add a Detail Page. Will be used for detail view of single resource

## Points Break Down

Looking For | Points (10)
:--|--:
Server and App project setup | 2
Data scripts and load seed data | 2
Server routes and SQL | 1
Frontend pages and components | 3
Deployed and working on heroku | 2
