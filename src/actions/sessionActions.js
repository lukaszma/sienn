import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import { push } from 'react-router-redux'
import Cookies from 'js-cookie';


export function loginSuccess(props) {
  const { access_token, expires_in } = props;
  Cookies.set('access_token', access_token, { expires: expires_in });
  return { type: types.LOG_IN_SUCCESS, authentication: true, access_token, expires_in }
}
export function loginFailure(unauthorized) {
  return { type: types.LOG_IN_FAILURE, session: false, access_token: '' }
}
export function logInUser(credentials) {
  return function (dispatch) {
    return sessionApi.login(credentials).then(response => {
      const { access_token, expires_in } = response;
      // sessionStorage.setItem('access_token', access_token);
      dispatch(loginSuccess({ access_token, expires_in }));
      dispatch(push('/'));
    }).catch(error => {
      dispatch(loginFailure());
      return error;
    });
  };
}