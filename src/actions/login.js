import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

import { POOL_DATA } from '../constants';

export const login = (userInfo) => {
  return async dispatch => {

    var authenticationData = {
      Username : userInfo.userName,
      Password : userInfo.password,
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    var userPool = new CognitoUserPool(POOL_DATA);
    var userData = {
      Username : userInfo.userName,
      Pool: userPool
    };
    var cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: async result => {
        await dispatch({
          type: 'SET_TOKEN',
          token: result.idToken.jwtToken,
        });
        await dispatch({
          type: 'SET_LOGIN_STATUS',
          loginStatus: 'user logged in',
        })
      },
      onFailure: err => {
        alert(err);
      }
    });
  }
}
