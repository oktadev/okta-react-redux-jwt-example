import React from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import { Container, Menu, Image, Loader, Dropdown } from 'semantic-ui-react';

const Header = ({ pageName, user, userLoading }) => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item header>
        <Image size="mini" src={logo} />
        User Search
      </Menu.Item>
      <Menu.Item style={{ flex: 1 }}>{pageName}</Menu.Item>

      {userLoading || !user ? (
        <Menu.Item>
          {userLoading ? <Loader active inline /> : 'Sign In'}
        </Menu.Item>
      ) : (
        <Dropdown item simple text="John Doe">
          <Dropdown.Menu>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </Container>
  </Menu>
);

const mapStateToProps = state => ({
  pageName: state.users.selected ? state.users.selected.name : '',
  user: state.auth.user,
  userLoading: state.auth.loading,
});

export default connect(mapStateToProps)(Header);
