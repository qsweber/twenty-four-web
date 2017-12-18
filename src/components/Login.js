import React, { Component } from 'react';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userName: '',
        password: '',
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

    this.props.onSubmit({
      userName: this.state.userName,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
        <p>{this.state.responseText}</p>
      </div>
    );
  }
}
