Class 13: Favorites API
===

## Server

### PG Client

Improved pg client module:

1. Logs db connection
1. Open the connection so each file doesn't need to

## Putting It All Together...

Put together multiple techniques:

1. Search Third Party API
1. Proxy Third Party API through server
1. User management and authentication, tokens
1. Array manipulation
1. Components, components, components
1. Store search in URL

## Storing 3rd Party Data

Sometimes storing the just the id of the favorite is enough, but for powering list views, that would require individually fetching each item from the source API.

To be able to show the favorites quickly, we store just enough data to power our list view. If we had a detail view, it would make sense to go back to the third party API to get the full copy of the item.

Of course if the thing be favorited could change or be updated, it may make sense to not store data in our system.
