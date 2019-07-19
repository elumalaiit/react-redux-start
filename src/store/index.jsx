import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

const store = createStore(reducers, applyMiddleware(thunkMiddleware, promiseMiddleware));

export default store;