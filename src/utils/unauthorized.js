import Cookies from 'js-cookie';
import { push } from 'react-router-redux'
import store from '../store';
const unauthorized = (err) => {
    if (err.status === 401) {
        store.dispatch(push('/login'));
        Cookies.remove('access_token');
    }
}

export default unauthorized;