import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

import { POOL_DATA } from '../constants';

export const checkUser = () => {
  return async dispatch => {
    var userPool = new CognitoUserPool(POOL_DATA);
    var cognitoUser = userPool.getCurrentUser();

    if (cognitoUser == null) {
      return await dispatch({
        type: 'SET_LOGIN_STATUS',
        loginStatus: 'needs to log in',
      });
    }

    cognitoUser.getSession(async function(err, session) {
      if (err) {
        alert(err);
        return;
      }
      console.log('session validity: ' + session.isValid());

      cognitoUser.getUserAttributes(function(err, attributes) {
        if (err) {
          alert(err);
          return;
        } else {
          console.log('user attributes: ' + attributes);
        }
      });

      await dispatch({
        type: 'SET_TOKEN',
        token: session.getIdToken().getJwtToken(),
      });
    });

    return await dispatch({
      type: 'SET_LOGIN_STATUS',
      loginStatus: 'user logged in',
    })
  }
}
