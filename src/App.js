import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Users from './components/Users'
import Contacts from './components/Contacts'

class App extends React.Component {

  render() {
      return (
          <Router>
              <div>
              <Route exact path="/" component={ Home }/>
              <Route exact path="/users" component={ Users }/>
              <Route exact path="/contacts" component={ Contacts }/>
              </div>
          </Router>
      );
  }
}

export default App;
