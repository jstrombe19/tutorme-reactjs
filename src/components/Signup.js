import React, { Component } from 'react';

export default class Signup extends Component {

  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    tutor: false,
    experience: ''
  }

  handleSignup = (event) => {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleTutor = (event) => {
    const currentTutorStatus = this.state.tutor;
    this.setState({ tutor: !currentTutorStatus})
  }

  render() {
    return(
      <form className='signup-form' onSubmit={this.handleSignup} >
        <h1>Signup</h1>
        <label>Name</label>
        <input name='name' value={this.state.name} onChange={this.handleChange} />
        <label>Username</label>
        <input name='username' value={this.state.username} onChange={this.handleChange} />
        <label>Email</label>
        <input name='email' value={this.state.email} onChange={this.handleChange} />
        <label>Password</label>
        <input name='password' type='password' value={this.state.password} onChange={this.handleChange} />
        <label>I am a tutor.</label>
        <input name='tutor' type='checkbox' checked={this.state.tutor} onChange={this.handleTutor} />
        <label>Experience</label>
        <input name='experience' type='text' value={this.state.experience} onChange={this.handleChange} />
        <input type='submit' value='Signup' />
      </form>
    )
  }
}