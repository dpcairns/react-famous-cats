# Make a react front end for your city explorer app

## NOTE: You _must_ have a back end deployed on heroku before beginning this project.

Your React app should let the user type in a city, and should return weather, restaurants, trails, and other data for that city. See if you can get a locationiq map of the city up and running using the latlongs from your `/location` endpoint (https://locationiq.com/docs#desktop-maps-with-leaflet)

Point salad:

- Make separate components for DataList, RestaurantItem, WeatherItem, TrailItem, SearchBar, etc, and anything else that reels right (At least seven tested components in your app? 3 points)

- Make `service-api.js` functions for calling your heroku endpoints. `getLocation`, `getWeather`, `getRestaurants` etc. (2 points)

- As with the pokedex app, the user should see their search query in the front-end URL. For example: `mywebsite.com/portland` should show results for Portland. Searching for a city should likewise inject the city into the URL (3 points)

- Deploy your functioning front-end on github pages using `npm i gh-pages`, updating `package.json` and following the instructions in this tutorial. (https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) (2 points)