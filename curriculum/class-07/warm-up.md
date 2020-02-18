# Warm-Up Exercise
Predict how this code will be rendered on the page. Draw the outcome. What would you change?

## index.html

```html
<section>
  <img src="http://via.placeholder.com/100">
  <img src="http://via.placeholder.com/115">
  <img src="http://via.placeholder.com/120">
  <img src="http://via.placeholder.com/130">
</section>
```

## styles.css

```css
section {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 200px;
  flex-direction: row-reverse;
}

img:nth-child(2) {
  border: 2px solid red;
  order: 1;
  align-self: baseline;
}
```
