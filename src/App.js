import React, { Fragment } from 'react';
// import logo from './logo.svg';

// css
import './assets/fonts/ionicons.min.css';
import './assets/css/Login-Form-Clean.css';
import './assets/css/Navigation-Clean.css';
import './assets/css/Registration-Form-with-Photo.css';
import './assets/css/styles.css';
// css

import Navbar from './components/Navbar';
import LogInPage from './components/LogInPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login">
            <LogInPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
