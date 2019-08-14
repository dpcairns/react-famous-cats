LAB 03: Design Pokedex
===

Build a searchable, sortable pokemon viewer that calls a real API!

## Goal

The goal for LAB 03 is to use the design driven process to:

1. Build out your html and css, fully responsive (_include a photo of your annotated wire frame_)
1. Decompose into components
1. Fetch data on load and display

## Project Folders

Organize with folders:

- src
    - components
        - app
            - App.css
            - App.js
            - Header.css
            - Header.js
        - options
            - ...
        - pokedex
            - ...
        - Component.js
        - html-to-DOM.js
    - main.css
    - reset.css
    - index.js

**NOTE:** update `comp` snippet to use `../Component`

## RWD

Design for both mobile and desktop, mobile-first!

You have some liberty in overall design.

### Mobile

```
+------------------+
|  Header          |
+------------------+
|  Search          |
|  Sort            |
+------------------+
|Paging            |
|◼️◻️◻️◼️         |
|◻️◻️◼️◻️         |
|◻️◻️◼️◻️         |
|                  |
+------------------+
```

### Desktop

```
+----------------------------------+
| Header                           |
+----------------------------------+
| Search |Paging                   |
| Sort   |◼️◻️◻️◼️◻️◻️◻️◻️◼️◻️◻️|
|        |◻️◻️◼️◻️◻️◼️◻️◻️◼️◻️◻️|
|        |◻️◻️◼️◻️◻️              |
|        |                         |
+--------+-------------------------+
```

## Components

```
App
 |
 +-- Header
 |
 +-- Search
 |
 +-- Sort
 |
 +-- Pokedex
      |
      + Pokemon
```

### App & Header

Overall page layout and structure. Most of the RWD handled here.

### Search

Offers controls for filtering:

* Search on pokemon name
* Based on `type`
    1. Notice there are two possible matches for each pokemon!
* Pick _at least_ one quantified attribute (attack, defence, etc.)
    1. Allow user to enter a _minimum_ value.
    1. Make sure your input only allows whole, positive integer values.
* **STRETCH** Add more search terms

### Sort

Offer sorting based one of:

1. Pokemon name (default)
1. Type
1. Attack
1. Defence
1. **STRETCH** Add more sortable columns

### Pokedex

Generates `Pokemon` cards.

### Pokemon

* Displays a pokemon image
* Name
* Relevant data (attack, defence, anything you used in search/sort). 
* Color code based on type (see data). 
* Feel free to put other attributes.

## API

API is available here: https://alchemy-pokedex.herokuapp.com

Landing page has API documentation.

## Points Break Down

Looking For | Points (10)
:--|--:
Design Process (photo of diagram) | 2
RWD for mobile and desktop | 2
Idiomatic components | 4
fetch and load data | 2