import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/rootReducer'

import Cookies from 'js-cookie';
import { createCookieMiddleware } from 'redux-cookie'

import sessionApi from './api/sessionApi';
import productsApi from './api/productsApi';

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
    thunk.withExtraArgument(sessionApi, productsApi),
    routerMiddleware(history),
    createCookieMiddleware(Cookies)
]

const devToolsExtension = window.devToolsExtension
if (typeof devToolsExtension === 'function')
    enhancers.push(devToolsExtension())


const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store;