import React from 'react';
import { Route } from 'react-router-dom';
//import React, { Component } from 'react';
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'

//import logo from './SJA_WHITE_LOGO.svg'; //import logo from './logo.svg';
import './App.css';

//https://www.codeofaninja.com/2016/07/react-crud-tutorial.html
//https://www.codeofaninja.com/2017/02/create-simple-rest-api-in-php.html

const App = () => (
    <div className="ui container">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
    </div>
);

/*
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}
*/

export default App;
