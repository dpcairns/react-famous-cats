LAB 03: Design Pokedex
===

Multi-day lab to build a searchable, pageable, sortable pokemon viewer that calls a real API!

The API is available here: https://alchemy-pokedex.herokuapp.com.

**You will need to view the data to figure out what to display!**

## Goal

The goal for LAB 03 is to use the design driven process to:

1. Basic html/css config project structure
1. Build out your html and css, fully responsive (_include a photo of your annotated wire frame_)
1. Plan out decomposition of your components (_include a photo of your UI decomposition into components_)

## Project Folders and Files

For today, build out your html pages and css:

- assets
    - logo images, etc.
- .gitignore
- index.html
- main.css
- pokedex.css
- pokedex.html
- reset.css

## RWD

Design for both mobile and desktop, mobile-first!

You have liberty in overall design.

Again, investigate the data and see descriptions below for each part

### Mobile

```
+------------------+
|  Header          |
|  Nav             |
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
| Header                      Nav  |
+----------------------------------+
| Search |Paging                   |
| Sort   |◼️◻️◻️◼️◻️◻️◻️◻️◼️◻️◻️  |
|        |◻️◻️◼️◻️◻️◼️◻️◻️◼️◻️◻️  |
|        |◻️◻️◼️◻️◻️              |
|        |                         |
+--------+-------------------------+
```

## Parts

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

The list of pokemon. How will you make it responsive?

### Pokemon

* Displays a pokemon image
* Name
* Relevant data (attack, defence, anything you used in search/sort). 
* Color code based on type (see data). 
* Feel free to put other attributes.

## Components

Think about all the pieces of the UI. Once you get your design complete, you could print out your html page and directly decompose.

Don't forget about App, Header, and Footer (if it exists)

---

## Points Break Down

Looking For | Points (10)
:--|--:
Design Process (photo of diagram) | 2
App/Header/Nav/Footer RWD for mobile and desktop | 2
Pokedex RWD for mobile and desktop | 4
Component Decomposition | 2