import * as _ from 'lodash';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

export const setFourNumbers = (fourNumbers, token) => {
  return async (dispatch, getState) => {
    const inputNumbers = fourNumbers.split('')
    if (inputNumbers.length < 4) {
      return;
    }
    const input = inputNumbers.join(',');
    const url = 'https://eu9kn1e2gb.execute-api.us-west-2.amazonaws.com/production/api/v0/solutions?values=' + input;  

    const fetchInit = {
      method: 'GET',
      headers: {
        "Authorization": token,
        "Content-Type": "application/json",
      },
      cache: 'default',
    }

    const result = await fetch(url, fetchInit);

    const resultJson = await result.json();

    const output = resultJson['values'];

    await dispatch({
      type: 'SET_OUTPUT',
      output,
    });    
  }
}
