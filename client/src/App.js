"use strict"

import React, {Component} from "react"
import {Router, Switch, Route} from 'react-router-dom'
import Login from "./components/login/login.component"
import Home from "./components/home/home.component"
import { history } from "./helpers"
import { PrivateRoute } from "./components/PrivateRoute"
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Switch>
            <PrivateRoute exact path='/home' component={Home}/>
            <Route exact path='/' component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
