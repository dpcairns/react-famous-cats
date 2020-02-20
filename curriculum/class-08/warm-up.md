# Warm-Up Exercise

Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```js
const express = require(express);
import dbAuth from './dbAuth.js';

app.get('username', req, res => {
  const userInfo = {};

  userInfo.name: request.username,
  userInfo.password: request.password

  const authResult = dbAuth.validateUserAsync(userInfo);

  response.send(authResult, userInfo)
})

app.listen(() => "Listening on Port 3000");
```
