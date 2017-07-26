import * as types from '../actions/actionTypes';  
import initialState from './initialState';  

const sessionReducer = (state = initialState.session, action) => {  
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      return Object.assign({}, state, {
          authentication: action.authentication,
          access_token: action.access_token,
          expires_in: action.expires_in
      });
    case types.LOG_IN_FAILURE:
      return Object.assign({}, state,{
        authentication: false,
        access_token: '',
        expires_in: ''
      })
    default: 
      return state;
  }
}
export default sessionReducer;