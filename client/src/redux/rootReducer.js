import { combineReducers } from 'redux';
import { movieSearchReducer } from './movieSearchReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  authReducer,
  movieSearchReducer
})