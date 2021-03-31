import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from '../About/About'; 
import Home from '../Home/Home';
import Demo from '../Demo/Demo';
import Login from '../Login/LoginPage';
import Create from '../Create/Create';
import NotFound from '../NotFound/NotFound';
import WeatherVision from '../WeatherVision/WeatherVision';
import AddObs from '../WeatherVision/files/AddObs';
import EditObs from '../WeatherVision/files/EditObs';
import DeleteObs from '../WeatherVision/files/DeleteObs';
import ApiContext from '../ApiContext';
import PrivateRoute from '../utils/PrivateRoute';
import PublicOnlyRoute from '../utils/PublicOnlyRoute';
import ApiConfig from '../ApiConfig';
import './App.css';

class App extends Component {
  state = {
    users: [],
    userEmail: [],
  };


  addUser = user => {
    this.setState({
      users: [ ...this.state.users, user],

    })
  };

  userEmail = userData => {
    this.setState({
      userEmail: [ ...this.state.userEmail, userData]
    })
  };

  render() {

    return (
      <>
      <ApiContext.Provider>
        <div className='app'>
        
          
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/demo' component={Demo} />
            <Route path='/login' component={Login} />
            <Route path='/create' component={Create} />
            <PrivateRoute path='/weathervision' component={WeatherVision} />
            <PrivateRoute path='/addobs' component={AddObs} />
            <PrivateRoute path='/editobs' component={EditObs} />
           
            <Route component={NotFound} />

          </Switch>
          
        </div>
      </ApiContext.Provider>
      </>
    )
  }

}

export default App