import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from '../About/About'; 
import Home from '../Home/Home';
import Demo from '../Demo/Demo';
import Login from '../Login/Login';
import Create from '../Create/Create';
import NotFound from '../NotFound/NotFound';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className='app'>
        App Component
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/demo' component={Demo} />
          <Route path='/login' component={Login} />
          <Route path='/create' component={Create} />
          <Route component={NotFound} />
        </Switch>
        
      </div>
    )
  }

}

export default App