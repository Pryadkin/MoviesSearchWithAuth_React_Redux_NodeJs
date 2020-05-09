import { combineReducers } from 'redux';
import { movieSearchReducer } from './movieSearchReducer';

export const rootReducer = combineReducers({
  movieSearchReducer,
})