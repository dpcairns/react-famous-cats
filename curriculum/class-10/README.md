Class 10: Detail View and Loading State
===

## Using Params on Express Routes

When getting an individual resource, we need to specify the id to get. Express offers a "params" feature to help with this:

```js
app.get('/api/cats/:id', async (req, res) => {
    const id = req.params.id;

    // rest of route...
});
```

## Using WHERE clause to limit SQL Data

Return a subset of rows using a `WHERE` clause:

```js
const result = await client.query(`
    SELECT
            c.*,
            t.name as type
    FROM  cats c
    JOIN  types t
    ON    c.type_id = t.id
    WHERE c.id = $1
`,
[id]);
```

## Search Params Revisited

Communicate to a detail web page which resource to load by passing a search param. These can be added to links:

```js
    <a href="cat-detail.html?id=${cat.id}">
```

And then read on load of the detail page. Good idea to redirect if no id:

```js
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

// no id? bail and go back to list
if (!id) {
    window.location = 'cat-list.html';
    return;
}
```

## Loading State

Give the user feedback that an asynchronous action is occurring. Otherwise they may think your app is broken