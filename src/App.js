import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import PrivateRoute from './components/PrivateRoute.js';
import './App.css';

export default class App extends Component {
  state = {
    baseUrl: "https://tutorme-api-beta.herokuapp.com/"
  }
  

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1 id="landing-title">TutorMe</h1>
          </header>
          <Switch>
            <PrivateRoute exact 
              path='/' 
              returningUser={this.state.returningUser} 
              newUser={this.newUser} 
              existingUser={this.existingUser}
            />
            <Route path='/login' render={(props) => <Login {...props} login={this.login}/>} />
            <Route path='/signup' render={(props) => <Signup {...props} signup={this.signup}/>} />
            <Route render={() => <Redirect to='/' /> } />
          </Switch>
        </div>
      </Router>
    );
  }

  componentDidMount = () => {
    let {token} = localStorage
    fetch(`${this.state.baseUrl}profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(result => {
      return result.user ? this.setState({beta: result.user}) : null
    })
  }

  login = (user, history) => {
    fetch(`${this.state.baseUrl}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
    .then(result => {
      return result.user 
      ? this.saveUserInfo(result)
      : this.displayError 
    })
    history.push('/')
  }

  signup = (user, history) => {
    fetch(`${this.state.baseUrl}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
    .then(response => response.json())
    .then(result => {
      return result.username ? this.setState({ 
        username: result.username,
        userId: result.id
       }) : null
      })
    history.push('/')
  }

  saveUserInfo = (response) => {
    localStorage.setItem('token', response.token)
      this.setState({ 
        username: response.user.username,
        userId: response.user.id
      })
  }

  displayError = () => {
    alert("Sorry, we couldn't find a user with that username and/or password. Please check your credentials and try again.")
  }

}
