import React, { Component } from 'react';
import { 
    Route, 
    Link,
    BrowserRouter as Router, 
} from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Rick and morty search!!!</h2>
                    <Link to="/">go home</Link>
                        <Route exact path="/" component={Home} />
                        <Route path="/:charId" component={Detail} />
                </div>
            </Router>
      );
    }
}