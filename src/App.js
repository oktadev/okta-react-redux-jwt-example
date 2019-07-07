import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';

import Header from './Header';
import Search from './Search';
import SelectedUser from './SelectedUser';
import AuthHandler from './AuthHandler';

import store from './store';

const App = () => (
  <div>
    <Header />
    <Container style={{ paddingTop: '7em' }}>
      <Search />
      <SelectedUser />
    </Container>
    <AuthHandler />
  </div>
);

export default () => (
  <Provider store={store}>
    <Router>
      <Security
        issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
        client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
        redirect_uri={`${window.location.origin}/implicit/callback`}
      >
        <Switch>
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/" component={App} />
        </Switch>
      </Security>
    </Router>
  </Provider>
);
