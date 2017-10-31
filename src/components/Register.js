import React, { Component } from 'react';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

export default class Register extends Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var poolData = {
      UserPoolId : 'us-west-2_pmyAi9eZM',
      ClientId : 'ka1b6828t956d9t843v6curst',
    };
    var userPool = new CognitoUserPool(poolData);

    var attributeList = [];
    var dataFirstName = {
      Name : 'given_name',
      Value : this.state.firstName,
    };
    var dataLastName = {
      Name : 'family_name',
      Value : this.state.lastName,
    };
    var attributeFirstName = new CognitoUserAttribute(dataFirstName);
    var attributeLastName = new CognitoUserAttribute(dataLastName);

    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);

    new Promise((resolve, reject) => {
      userPool.signUp(this.state.userName, this.state.password, attributeList, null, (err, result) => {
        if (err) return reject(err);
        resolve(result.user);
      });
    })
    .then(u => {
      this.setState({
        'success': 'user registered!',
        'cognitoUser': u,
      });
    })
    .catch(e => {
      let msg = e.message || 'An error occurred.';
      alert(msg);
    })

    
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

Register.route = { component: Register }
