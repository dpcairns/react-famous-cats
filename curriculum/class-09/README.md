Class 9: SQL Joins & Relations
===

## Agenda

* Naming
* Database Relationships
* Normalization
* Joins
* CRUD and Saving Data
* New middleware: Body Parser

## Naming

* SQL land use `snake_case`
* JavaScript (including JSON) use `camelCase`
* routes (url paths) use `kebob-case`
* files and folders
    * ~~`kebob-case`~~
    * `camelCase` or `TitleCase` if component

Routes:

1. Nouns, **no actions or verbs**
1. Use plural: `/api/students`
1. Refine the resource as parts are added: 
    * `/api/students/23`
    * `/api/students/23/classes`

## Learning Objectives

* Understand how objects in a database can be interrelated with foreign keys
* Have familiarity with queries using SQL that select data from across multiple tables
* Have familiarity with different relationships in database tables
* Write a POST route that saves data

## Relations and Joins

[slides...](./sql-joins.pdf)

### Database Normalization

* Remove duplicate data.
* Minimize database redesign.
* Minimize modification anomalies.

### Database Relationships

* `1:1` Relationship
* `1:Many` / `Many:1` Relationship
* `Many:Many` Relationship

### Joins

* Understanding Primary and Foreign Keys
    * Discuss how these keys are related and can be used for database normalization
* Inner Join
    * Discuss syntax
    * Discuss concepts

## CRUD

`CRUD` - the different functions we perform on our database

* C - CREATE
* R - READ
* U - UPDATE
* D - DESTROY (or DELETE)

`SQL` vs `HTTP`

### CREATE, UPDATE, DESTROY

CREATE: `POST` and `INSERT`
UPDATE: `PUT` and `UPDATE`
DESTROY: `DELETE` and `DELETE`

## Body Parser Middleware

Read the incoming json and append as JavaScript object to request (`req.body`):

```js
app.use(express.json()); // enable reading incoming json data
```

```js
app.post('/api/cats', async (req, res) => {
    const cat = req.body;
    
    // rest of route handler...
});
```

## Demo

Image for Johnny cat: https://www.jonnycat.com/images/left_nav/logo.jpg

