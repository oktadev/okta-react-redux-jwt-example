import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuth } from '@okta/okta-react';

import { setToken } from './redux/auth';

const AuthHandler = ({ auth, location, token, setToken }) => {
  React.useEffect(() => {
    auth.getIdToken().then((nextToken = null) => {
      if (nextToken !== token) setToken(nextToken);
    });
  });

  React.useEffect(() => {
    if (location.pathname === '/login') auth.login('/');
    if (location.pathname === '/logout') auth.logout('/');
  }, [auth, location.pathname]);

  return null;
};

const mapStateToProps = state => ({ token: state.auth.token });
const mapDispatchToProps = { setToken };

export default compose(
  withAuth,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(AuthHandler);
