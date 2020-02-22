import React from "react";
import "./App.css";
import CatList from "./cat-list/CatListApp";
import CreateCat from "./cat-list/CreateCat";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
        My header
        <Switch>
            <Route exact path='/' component={CatList} />
            <Route exact path='/add' component={CreateCat} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
