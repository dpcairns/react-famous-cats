Class 03: Filter
===

## Agenda

- BC1 Project Review
- Predicate Functions
- Truthy/Falsey
- Logical Operators
- Array `filter` Method
- Filtered Properties Recipe
- Component `state`

## Bootcamp I Project Review

- HTML/CSS
    - Use CSS for styling
    - Semantic: ask "what is it? what is its role?"
- Whitespace and phrasing
    - Spend more team reading and reflecting
    - What are the steps?
    - Indentation should be flawless
    - Use smaller functions to break up big chunks of code
- Testing
    - Not something to be avoided
    - Engage in outcome thinking even if not testable

## Predicate Functions

Predicate functions return a true or false response. Used in:
- `filter`
- `find`
- `findIndex`
- `every`
- `some`

## `truthy` and `falsey`

Input Type | Result
---|---
Undefined	|false
Null	|false
Boolean	|The result equals the input argument (no conversion).
Number	|The result is false if the argument is +0, -0, or NaN; otherwise the result is true.
String	|The result is false if the argument is the empty string (its length is zero); otherwise the result is true.
Object	|true

### Logical Operators

Operator | Meaning | Notes
---|---|---
`&&` | **and** | both things must be truthy
`||` | **or** | one of the two things must be truthy
`!` | **not** | negation, true becomes false, false becomes true

Note: JavaScript will *short-circuit* once the logical operator cannot yeild a different result. For example, with `false && testAThing()`, `testAThing` will _never_ be called because the first expression has already made it impossible for a `true` to result.

### Array `.filter` method

Create a new "filtered" array by testing each item of an array and
returning "truthy" if item should be included, or "falsey" if not.

```js
const filteredImages = images.filter(function(image) {
    return image.keyword === 'cute';
});
```

### Filtered Properties Recipe

When building filters that apply to an arbitrary number of properties, use the following recipe.

1. Use a logical operators to test if either: 
    1. the filter does not exist, or
    1. the item matches (can be comparison operator) the filter
    ```js
    const hasKeyword = !filter.keyword || item.keyword === filter.keyword;
    ```
1. Test each filter property and assigned to `variable`, return the 
logical "and" of all filters:
    ```js
    function filterImages(images, filter) {
        const filteredImages = images.filter(function(image) {
            const hasKeyword = !filter.keyword || item.keyword === filter.keyword;

            const hasHorns = !filter.horns || item.horns >= filter.horns;

            return hasKeyword && hasHorns;
        });
    }
    ```

## Component State

Let's add `this.state = {};` to our base `Component`. Anytime a component
needs to introduce data, store and get from `this.state`.