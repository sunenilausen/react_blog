import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from "./home/Home";
import Login from "./login/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;