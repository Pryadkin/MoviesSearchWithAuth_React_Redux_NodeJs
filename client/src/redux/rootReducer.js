import { combineReducers } from 'redux';
import { movieStateReducer } from './movieStateReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  authReducer,
  movieStateReducer
})