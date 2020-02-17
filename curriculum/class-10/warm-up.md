# Warm-Up Exercise
Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```js
const express = require('express');
const app = express();
const pg = require('pg');

const Client = pg.client

const client = new Client(SOMEURL)
// middlewares
app.use(express.json());

app.post('/', (request, response) => {
  const SQL =  `INSERT INTO users (username, password, age)
    VALUES ($1, $2, $3)
    RETURNING *;`;

  const values = [request.body.username, request.body.password, request.body.age];
  
  client.query(SQL, values)
    .then((whatever) => {
      response.json(whatever.rowsCount);
    })
})
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)}
);
```
## schema.sql
```sql
DROP TABLE IF EXISTS users

CREATE TABLE users {
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(256) NOT NULL,
  password VARCHAR(256) NOT NULL,
  age INTEGER NOT NULL
}
```