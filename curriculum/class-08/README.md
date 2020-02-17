Class 08: SQL & Postgres
===

## Learning Objectives

* Understand the basic concepts of databases
* Effectively use basic SQL commands to create, read, update, and delete rows from a table
* Understand the fundamental architecture of full-stack applications and how we can locally emulate them

## Code Challenges

![map, filter, reduce in emoji](map-filter-reduce-in-emoji.png)

## Multi-Project Apps

Server and App will be in the same git repository!

* The main folder will contain your `server` project, including database scripts
* Your app will live in `public`.

For **running your project locally**, you should:

1. Open the main repo folder into a vscode instance and do server development here
1. Open the `public` folder into a separate vscode instance and do
the front end development from here. This will make `live-server` `eslint` behave normally.

**However**, you need to add these settings (`cmd`/`control` + `,`, then "Edit in `settings.json`) to vscode:

```json
    "liveServer.settings.proxy": {
        "enable": true,
        "baseUri": "/api",
        "proxyUri": "http://localhost:3000/api"
    },
```

### Express Middleware

For our duel repo solution, we will need to add the following utilities to express in `server.js`:

1. `cors()` to handle direct request from app (requires `npm i cors`)
1. `express.static('public')` to serve the app files
1. BONUS: Install `morgan` middleware for improved server logging!


```js
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request
app.use(express.static('public')); // server files from /public folder
```

### Eslint

Use two files:
1. root of server
1. `/public` folder for app

Sightly different server `.eslintrc` (see demo code):

```json
  "env": {
    "node": true,
    "es6": true
  },
```

## SQL and CRUD

### Tooling

Install `pgAdmin4`: https://www.pgadmin.org/download/

### Relational Databases

* Common DBMS - MySQL, PostgreSQL, SQLite, etc
    * [Article comparing the three](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)

### SQL

The language we use to query and update our database

* Syntax
* Statements
* Clauses
* Constraints
* Expressions
* Predicates
* [SQL cheat sheet](http://www.cheat-sheets.org/sites/sql.su/)
* Data types
    * **INTEGER**
    * **NOT NULL**
    * **PRIMARY KEY**
    * **CHAR**
    * **VARCHAR**

* CRUD - the different functions we perform on our database
    * C - CREATE
    * R - READ
    * U - UPDATE
    * D - DESTROY (or DELETE)

* PostgreSQL (our database) and psql (a cli to our database)
    * should auto start, if not:
    * starting your database server (check version)
        * PC: `pg_ctl -D 'C:/Program Files/PostgreSQL/9.6/data' start`
        * MAC: `pg_ctl -D /usr/local/var/postgres/ -l /usr/local/var/postgres/server.log start`
        * or if you created an alias in your `.bashrc`: `pgstart` 

* Node and SQL
    * Using the `pg` module to connect to our PostgreSQL server

### Naming

In SQL db, use `snake_case`. For server response to client (browser), use `camelCase`. This means SQL query will translate from one to other, remember to use **Double Quotes**!:

```js
const result = await client.query(`
    SELECT
        id,
        name,
        type,
        url,
        year,
        is_sidekick as "isSidekick"
    FROM CATS;
`);
```

### Managing Data Tables

To have a repeatable process, we want to use scripts to CREATE our data tables, DROP our data tables (so we can recreate them), and optionally seed data into our database.

There are two parts for each script:
1. `.js` file that lives in `/data`
1. Corresponding entry in `package.json` for running that file via `node`

## Readings

* [SQLBolt (Intro, Lessons 1-4, 13-18)](http://sqlbolt.com/)
* [A Primer on SQL](https://leanpub.com/aprimeronsql/read) (Reference)


