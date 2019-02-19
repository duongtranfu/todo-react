import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter';
import people from './people.reducer';

export default combineReducers({
  todos,
  visibilityFilter,
  people
})
