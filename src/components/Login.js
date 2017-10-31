import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userName: '',
        password: '',
        success: '',
        accessToken: '',
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
    new Promise((resolve, reject) => {
      var authenticationData = {
        Username : this.state.userName,
        Password : this.state.password,
      };
      var authenticationDetails = new AuthenticationDetails(authenticationData);
      var poolData = {
        UserPoolId : 'us-west-2_pmyAi9eZM',
        ClientId : 'ka1b6828t956d9t843v6curst',
      };
      var userPool = new CognitoUserPool(poolData);
      var userData = {
        Username : this.state.userName,
        Pool: userPool
      };
      var cognitoUser = new CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function (result) {
              console.log('access token + ' + result.idToken.jwtToken);

              resolve(result);
          },

          onFailure: reject,
      });
    })
    .then(result => {
      this.props.setAccessToken(result.idToken.jwtToken);
      this.setState({
        'success': 'user logged in!',
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
            Username:
            <input
              name="userName"
              type="string"
              value={this.state.userName}
              onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="string"
              value={this.state.password}
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.success}</p>
      </div>
    );
  }
}

Login.propTypes = {
  setAccessToken: PropTypes.func
};

Login.route = { component: Login }
