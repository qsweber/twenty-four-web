import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

export const login = (userInfo) => {
  return async dispatch => {

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
      onSuccess: async result => {
        await dispatch({
          type: 'LOGIN_USER',
          token: result.idToken.jwtToken,
        });
      },
      onFailure: err => {
        alert(err);
      }
    });
  }
}
