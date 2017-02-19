import { combineReducers, createStore } from 'redux';
import people from './addPeople';
const rootReducer = combineReducers({
  people,
});

export default initialState => {
  return createStore(rootReducer, initialState);
};