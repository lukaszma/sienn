import * as types from '../actions/actionTypes';  
import initialState from './initialState';

const productsReducer = (state = initialState.products, action) => {  
  switch(action.type) {
    case types.GET_PRODUCTS_SUCCESS:
      return action.products;
    case types.GET_PRODUCTS_FAILURE:
      return [];
    default: 
      return state;
  }
}
export default productsReducer;