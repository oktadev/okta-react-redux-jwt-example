import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react';

import Header from './Header';
import Search from './Search';
import SelectedUser from './SelectedUser';

import store from './store';

const App = () => (
  <div>
    <Header />
    <Container style={{ marginTop: '7em' }}>
      <Search />
      <SelectedUser />
    </Container>
  </div>
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
