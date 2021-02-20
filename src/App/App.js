import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from '../About/About'; 
import Home from '../Home/Home';
import Demo from '../Demo/Demo';
import Login from '../Login/Login';
import Create from '../Create/Create';
import NotFound from '../NotFound/NotFound';
import ApiContext from '../ApiContext';
import ApiConfig from '../ApiConfig';
import './App.css';

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${ApiConfig.API_ENDPOINT}/users`, {
        method: 'GET',
        //body: JSON.stringify(users),
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer 2f5e6320-6c04-11eb-9439-0242ac130002',
        }
      })
    ])
      .then(([usersRes]) => {
        if (!usersRes.ok)
          return usersRes.json().then(e => Promise.reject(e));
        
        return Promise.all([usersRes.json()]);
      })
      .then(([users]) => {
        this.setState({users});
      })
      .catch(error => {
        console.error({error});
      })
  }

  addUser = user => {
    this.setState({
      users: [ ...this.state.users, user]
    })
  };


  render() {
   // const values = {
   //   users: this.state.users
   // }

    return (
      <>
      <ApiContext.Provider>
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
      </ApiContext.Provider>
      </>
    )
  }

}

export default App