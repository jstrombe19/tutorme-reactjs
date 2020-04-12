import React, { Component } from 'react';

export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <form className='login-form' onSubmit={this.handleLogin} >
        <h1>Login</h1>
        <label>Username</label>
        <input name='username' value={this.state.username} onChange={this.handleChange} />
        <label>Password</label>
        <input name='password' type='password' value={this.state.password} onChange={this.handleChange} />
        <input type='submit' value='Login' />
      </form>
    )
   
  }
}