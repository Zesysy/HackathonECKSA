import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import fetchReducer from './reducers';
import { RESSOURCE_NAME as CAMPUSE } from './Actions/campusesAction';
import { RESSOURCE_NAME as MATCHE } from './Actions/matchesAction';
import { RESSOURCE_NAME as WILDER } from './Actions/wildersAction';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const fetchCampusesReducer = fetchReducer(CAMPUSE);
const fetchMatchesReducer = fetchReducer(MATCHE);
const fetchWildersReducer = fetchReducer(WILDER);

console.log(
  fetchCampusesReducer,
  fetchMatchesReducer,
  fetchCampusesReducer === fetchMatchesReducer,
);

const myStore = createStore(
  combineReducers({
    fetchCampusesReducer,
    fetchMatchesReducer,
    fetchWildersReducer,
  }),
  composeEnhancer(applyMiddleware(thunk)),
);

export default myStore;
