import {
  SEARCH_MOVIE,
} from './actions';

function noop() { };

const initialState = {
  token: null,
  userData: null,
  login: noop,
  logout: noop,
  isAuthenticated: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOGIN_DATA':
      return {
        ...state,
        token: action.token,
        userData: action.userData,
        isAuthenticated: true
      };
    case 'REMOVE_LOGIN_DATA':
      return {
        ...state,
        token: null,
        userData: null,
        isAuthenticated: false
      };
    default: return state
  }
};


