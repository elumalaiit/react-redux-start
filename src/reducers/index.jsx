import { combineReducers } from 'redux'
import rootReducer from './rootReducer'

const reducers = combineReducers({
  rootState: rootReducer
});

export default reducers;