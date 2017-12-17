import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

export const login = (userInfo) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      var authenticationData = {
        Username : userInfo.userName,
        Password : userInfo.password,
      };
      var authenticationDetails = new AuthenticationDetails(authenticationData);
      var poolData = {
        UserPoolId : 'us-west-2_pmyAi9eZM',
        ClientId : 'ka1b6828t956d9t843v6curst',
      };
      var userPool = new CognitoUserPool(poolData);
      var userData = {
        Username : userInfo.userName,
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
    .then(result => dispatch(makeASandwich(result)))
    .catch(e => {
      let msg = e.message || 'An error occurred.';
      alert(msg);
    });
  }
}

function makeASandwich(result) {
  console.log('here');
  console.log(result);
  return {
    type: 'LOGIN_USER',
    token: result.idToken.jwtToken,
  };
}
