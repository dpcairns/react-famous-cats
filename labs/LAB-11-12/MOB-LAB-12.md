# Mob Build: Favorite Movies

The app will allow a user to sign up and track their favorite
movies (or TV shows if you prefer).

## Movie API

[The Movie DB](https://www.themoviedb.org). Use https://api.themoviedb.org/3, note
that we are using **version `3`**. Requires an api key, sign up for free.

## User Stories

As a user, I want to...

1. search movies so that I can mark my favorites
1. click on a movie to make it a favorite
1. see a list of my favorite movies
1. see whether a movie in any list is, or is not, currently a favorite
1. click on a favorite movie item to un-favorite

## Tech Notes

### Favorite component

In order to update the Favorite to show it's current status, it needs to live
in own component as a child of the `MovieItem`.

Use the `pokemon._id` as your node key, otherwise it will be hard to remove


---


## Points Break Down

Looking For | Points (10)
:--|--:
Search Movies  | 2
Add To Favorites | 2
Favorites List | 2
Display Favorite Status | 2
Toggle Favorite Status | 2
