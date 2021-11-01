"use strict"

import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./components/login/login.component"
import Home from "./components/home/home.component"
import Product from "./components/product/product.component"
import { history } from "./helpers"
import { PrivateRoute } from "./components/PrivateRoute"
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

function App() {
  const auth = localStorage.getItem('auth')
  return (
    <div className="App">
      <Router history={history}>
          <Switch>
              <PrivateRoute exact path='/home' component={Home}/>
              <Route exact path='/product' component={Product} />
              <Route exact path='/' component={Login} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
