import { combineReducers } from 'redux'

const twentyfour = (state = [], action) => {
  console.log('inside this');
  switch (action.type) {
    case 'SET_FOUR_NUMBERS':
      return {
        ...state,
        fourNumbers: action.fourNumbers,
      };
    case 'SET_OUTPUT':
      return {
        ...state,
        output: action.output,
      };
    case 'REGISTER_USER':
      return {
        ...state,
        registrationResults: action.result,
      }
    case 'LOGIN_USER':
      return {
        ...state,
        token: action.token,
      }
    default:
      return state;
  }
}

const twentyfourApp = combineReducers({
  twentyfour,
});

export default twentyfourApp;
