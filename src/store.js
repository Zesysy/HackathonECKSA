import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import fetchReducer from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(
  combineReducers({ fetchReducer }),
  composeEnhancer(applyMiddleware(thunk)),
);

export default myStore;
