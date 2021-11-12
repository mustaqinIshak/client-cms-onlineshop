"use strict"

import React from "react"
import {Router, Switch, Route} from 'react-router-dom'
import Login from "./components/login/login.component"
import { history } from "./helpers/helpers"
import { PrivateRoute } from "./components/PrivateRoute"

import Home from "./components/home/home.component"
import Product from "./components/product/product.component"
import Order from "./components/Order/order.component"

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
          <Switch>
              <PrivateRoute exact path='/home' component={Home}/>
              <PrivateRoute exact path='/product' component={Product} />
              <PrivateRoute exct path='/order' component={Order} />
              <Route exact path='/' component={Login} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
