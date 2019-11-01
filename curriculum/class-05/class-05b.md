# Class 5: Deployment Workshop 

## Agenda

- Warm-up exercise
- Review code challenges
- Introduction of today's code challenge topic
- Deployment Workshop

## Deployment Workshop

### Node.js

* A real JavaScript environment!
* npm -- node application/package manager and bundler

### Building a web server with Node and Express.js

* Handling multiple requests from clients
* Sending data back in multiple formats

### New Server Repository

* Create a new repository and clone locally _as a sibling directory to front-end project_

### Building a server with Node and Express

We will be building a basic `server.js` file for deployment purposes. Goal will be server that should serve static files out of the `public` folder as well as create 2 simple `.get()` routes that serve some plain text and a JSON object, just to prove that we can.

* Run `npm init -y` to create a package.json file
* Have a `.gitignore` file created for Node apps
* Have a `.env` file to keep the PORT in
* Install Express with the command `npm i express`. 
* Install `dotenv` with the command `npm i dotenv`. 
* Ensure that server is up and running locally
* `npm start` or `nodemon`
* View site by visiting http://localhost:3000
* View text by visiting http://localhost:3000/hello
* View JSON by visiting http://localhost:3000/data
  
### Heroku Deployment Workshop Guide

- `git remote -v`  (verify your git remotes)
- `heroku create [appname]`  (create the app on Heroku and set remote)
    - Or, `heroku git:remote -a [appname]` (for a previously created heroku app)
- `git remote -v` (see that heroku is now a remote)
- `git push heroku master` (deploy from master)
    - `git push heroku [branch]:master` (deploy from a non-master branch to Heroku)