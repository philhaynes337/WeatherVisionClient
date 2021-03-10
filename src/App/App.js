import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from '../About/About'; 
import Home from '../Home/Home';
import Demo from '../Demo/Demo';
import Login from '../Login/LoginPage';
import Create from '../Create/Create';
import NotFound from '../NotFound/NotFound';
import WeatherVision from '../WeatherVision/WeatherVision'
import ApiContext from '../ApiContext';
import PrivateRoute from '../utils/PrivateRoute';
import PublicOnlyRoute from '../utils/PublicOnlyRoute';
import ApiConfig from '../ApiConfig';
import './App.css';

class App extends Component {
  state = {
    users: []
  };


  addUser = user => {
    this.setState({
      users: [ ...this.state.users, user]
    })
  };


  render() {

    return (
      <>
      <ApiContext.Provider>
      <div className='app'>
        App Component
        
        <Switch>
          <PublicOnlyRoute exact path='/' component={Home} />
          <PublicOnlyRoute path='/about' component={About} />
          <PublicOnlyRoute path='/demo' component={Demo} />
          <PublicOnlyRoute path='/login' component={Login} />
          <PublicOnlyRoute path='/create' component={Create} />
          <PrivateRoute path='/weathervision' component={WeatherVision} />
          <PublicOnlyRoute component={NotFound} />

        </Switch>
        
      </div>
      </ApiContext.Provider>
      </>
    )
  }

}

export default App