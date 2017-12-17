import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        validationError: '',
        success: '',
        cognitoUser: '',
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      password: this.state.password,
    });    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              name="firstName"
              type="string"
              value={this.state.firstName}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Last Name:
            <input
              name="lastName"
              type="string"
              value={this.state.lastName}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Username:
            <input
              name="userName"
              type="string"
              value={this.state.userName}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.validationError}</p>
        <p>{this.state.success}</p>
      </div>
    );
  }
}

export default Register;
