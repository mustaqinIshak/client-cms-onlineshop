import React, {Component} from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./components/login/login.component"
import {history} from "./helpers"
import {PrivateRoute} from "./components/PrivateRoute"

import Home from "./components/home/home.component"
import Product from "./components/product/product.component"
import Order from "./components/Order/order.component"
import {Brand} from "./components/brand/brand.component"

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
              <Switch>
                  <Route exact path='/' component={Login} />
                  <PrivateRoute exact path='/home' component={Home}/>
                  <PrivateRoute exact path='/product' component={Product} />
                  <PrivateRoute exact path='/order' component={Order} />
                  <PrivateRoute exact path="/brand" component={Brand} />
              </Switch>
          </div> 
        </Router>
      </div>
    );
  }
}

export default App;
