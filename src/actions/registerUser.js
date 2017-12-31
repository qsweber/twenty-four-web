import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

import { POOL_DATA } from '../constants';

export const registerUser = userInfo => {
  return async dispatch => {
    var userPool = new CognitoUserPool(POOL_DATA);
  
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
        type: 'SET_REGISTRATION_RESULTS',
        result,
      });
    });
  }
}
