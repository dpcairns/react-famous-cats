Class 03: RWD

- Design for multiple devices like mobile and desktop

## Agenda

1. Warm Up
1. RWD
1. Project Folders
1. Code Challenge 

## Warm Up

[Exercise](./warm-up.md)

## RWD

### Mobile First

Easier to go from simple to more complex.

![Mobile First](./mobile-first.png)

**Demo: Chrome Mobile Emulator**

### Responsive Web Design

Adapt the layout to the device, versus having separate layouts (m.company.com)

How?

- Layout (Grid and Flex Box)
- Media Queries
- Both
- css: `%`, `calc`

Try and solve in simplest way

### Media Query

Media queries allow us to selectively apply css based on 
device characteristics.

```css

@media (min-width:481px) and (max-width:959px) {
  body {
    width:768px;
  }
}

@media (min-width:960px) {
  body {
    width:960px;
  }
}

```

Media query is **more specific** than without

Also: 

- `screen` vs `print`
- pointer media queries:
    - https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer
    - https://css-tricks.com/touch-devices-not-judged-size/

## Code Challenge

`03-sort`

