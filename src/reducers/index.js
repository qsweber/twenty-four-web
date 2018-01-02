import { combineReducers } from 'redux'

const twentyfour = (state = [], action) => {
  switch (action.type) {
    case 'SET_OUTPUT':
      return {
        ...state,
        output: action.output,
      };
    case 'SET_REGISTRATION_RESULTS':
      return {
        ...state,
        registrationResults: action.result,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'SET_LOGIN_STATUS':
      return {
        ...state,
        loginStatus: action.loginStatus,
      }
    default:
      return state;
  }
}

const twentyfourApp = combineReducers({
  twentyfour,
});

export default twentyfourApp;
