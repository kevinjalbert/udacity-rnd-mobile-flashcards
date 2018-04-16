import { combineReducers } from 'redux';

const test = (state = {}, { _type, _payload }) => state;

export default combineReducers({
  test,
});
