"use strict"

import React, {Component} from "react"
import {Router, Switch, Route} from 'react-router-dom'
import Login from "./components/login/login.component"

import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
