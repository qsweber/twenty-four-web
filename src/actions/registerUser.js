import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

export const registerUser = userInfo => {
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

  var results = '';

  new Promise((resolve, reject) => {
    userPool.signUp(userInfo.userName, userInfo.password, attributeList, null, (err, result) => {
      if (err) return reject(err);
      resolve(result.user);
    });
  })
  .then(u => {
    console.log(u);
    results = 'user registered!';
  })
  .catch(e => {
    results = e.message || 'An error occurred.';
    alert(results);
  })

  return {
    type: 'REGISTER_USER',
    results,
  }
}
