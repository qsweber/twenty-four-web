import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

export const registerUser = userInfo => {
  return async dispatch => {
    var poolData = {
      UserPoolId : 'us-west-2_pmyAi9eZM',
      ClientId : 'ka1b6828t956d9t843v6curst',
    };
  
    var userPool = new CognitoUserPool(poolData);
  
    var attributeList = [];
    var dataFirstName = {
      Name : 'given_name',
      Value : userInfo.firstName,
    };
    var dataLastName = {
      Name : 'family_name',
      Value : userInfo.lastName,
    };
    var attributeFirstName = new CognitoUserAttribute(dataFirstName);
    var attributeLastName = new CognitoUserAttribute(dataLastName);
  
    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);

    userPool.signUp(userInfo.userName, userInfo.password, attributeList, null, async (err, result) => {
      if (err) alert(err);
      await dispatch({
        type: 'REGISTER_USER',
        result,
      });
    });
  }
}
