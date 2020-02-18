import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import List from './List.js';
import Detail from './Detail.js';
import About from './About.js';

export default class App extends Component {


  handleHome() {
    window.location = '/';
  }

  render() {
    return (
      <Router>
        <div>
          <div id="header-div">
            <img src="pokedexlogo.png" alt=""></img>
          </div>
          <div id="nav-div">
            <Link to="/" onClick={this.handleHome}>Search</Link>
            <Link to="/about-me/about">About</Link>
          </div>

          <Switch>
            {/* anything without a question mark is assumed to be required in the URL */}
            {/* if routes are like functions, colons indicate what is the 'parameter' of the route */}
            <Route exact path="/:pokemon?" component={List} />

            {/* adding the `about-me` piece prevents collisions with the :pokemon? route */}
            <Route exact path="/about-me/about" component={About} />
            {/* adding the `detail` piece prevents collisions with the :pokemon? route */}
            <Route exact path="/detail/:pokeid?/" component={Detail} />
          </Switch>
        </div>
      </Router>
    )
  }
}
