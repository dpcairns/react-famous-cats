# Warm-Up Exercise

> Students should have their laptop lids closed (and phones put away) and may work independently or with a nearby classmate.

Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## `index.html`

```html
<html>
  <head>
    <title>Click tracker
  </head>
  <body>
    <div id="click">
      <p>Click me</p>
    <div>
  </body>
</html>
```

## `app.js`

```js
const div = document.querySelector('.click');

div.addEventListener('change', function() => {
  const counter = '0';
  div[0].text = counter++;
});
```
