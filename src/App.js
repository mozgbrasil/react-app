import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './global-styles';
import { BrowserRouter as Router } from "react-router-dom";
import ResponsiveDrawer from './components/ResponsiveDrawer';

class App extends Component {
  render() {
    return (
      <Router>
        <ResponsiveDrawer name="Mozg" />
      </Router>
    );
  }
}

export default App;
