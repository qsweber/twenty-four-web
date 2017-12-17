import { combineReducers } from 'redux'

const twentyfour = (state = [], action) => {
  switch (action.type) {
    case 'SET_FOUR_NUMBERS':
      return {
        ...state,
        fourNumbers: action.fourNumbers,
      };
    case 'REGISTER_USER':
      return {
        ...state,
        registrationResults: action.results,
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
