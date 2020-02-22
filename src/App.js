import React from "react";
import "./App.css";
import CatList from "./cat-list/CatListApp";
<<<<<<< HEAD
import CreateCat from "./cat-list/CreateCat";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
=======
>>>>>>> 7fef02ed0ecc6ac7444f44a066b7566676da826a

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    <Router>
        My header
        <Switch>
            <Route exact path='/' component={CatList} />
            <Route exact path='/add' component={CreateCat} />
        </Switch>
    </Router>
=======
      <CatList />
>>>>>>> 7fef02ed0ecc6ac7444f44a066b7566676da826a
    </div>
  );
}

export default App;
