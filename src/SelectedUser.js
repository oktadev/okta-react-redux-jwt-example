import React from 'react';
import { connect } from 'react-redux';
import { Message, Card, Image } from 'semantic-ui-react';

import { selectUser } from './redux/users';

const SelectedUser = ({ selected, users, selectUser, ...rest }) => {
  if (!selected) return null;

  return (
    <Card style={{ marginTop: '2em' }}>
      <Message
        attached
        header={selected.name}
        onDismiss={() => selectUser(null)}
      />
      <Image src={selected.avatar} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{selected.username}</Card.Header>
        {selected.email && <Card.Meta>{selected.email}</Card.Meta>}
        {selected.phone && <Card.Meta>{selected.phone}</Card.Meta>}
        {selected.address && <Card.Meta>{selected.address.city}</Card.Meta>}
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => ({
  selected: state.users.selected,
  searchTerm: state.users.searchTerm,
  users: state.users.users,
});

const mapDispatchToProps = { selectUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedUser);
