import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import session from './sessionReducer';
import products from './productsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  session,
  products
})

export default rootReducer; 