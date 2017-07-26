import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Login from './containers/Login/Login';
import Products from './containers/Products/Products';
import store, { history } from './store';
import logo from './images/logo-header.png';
import './App.css';

import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <div>
              <div className="logo-header"><img src={logo} alt=""/></div>
              <Route exact path="/" component={Products} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
