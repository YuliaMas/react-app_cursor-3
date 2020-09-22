import React from 'react';
import './App.css';
import {HashRouter as Router,Redirect, Route, Switch,} from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Sign/Login.js";
import Register from "./components/Sign/Register";

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}


export default App;
