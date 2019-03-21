import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import NewSnippet from './components/pages/NewSnippet'
import Profile from './components/pages/Profile'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <Navbar />
          <Route path="/" exact={true} component={Home}/>
          <Route path="/new-snippet" exact={true} component={NewSnippet}/>
          <Route path="/profile" exact={true} component={Profile}/>
          <Route path="/snippets" exact={true} component={Home}/>
          
        </div>
      </Router>
    );
  }
}

export default App;
