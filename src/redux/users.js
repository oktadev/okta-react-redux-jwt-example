import { createSlice } from 'redux-starter-kit';
import faker from 'faker';

const users = [...new Array(1000)].map(() => ({
  id: faker.random.uuid(),
  avatar: faker.image.avatar(),
  username: faker.internet.userName(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
}));

const { actions, reducer } = createSlice({
  initialState: {
    users,
    selected: null,
  },
  reducers: {
    selectUser(state, { payload: user }) {
      state.selected = user || null;
    },
    updateUsers(state, { payload: authUser }) {
      if (authUser && authUser.groups.includes('Admins')) {
        state.users = users.map(user => ({
          ...faker.helpers.userCard(),
          ...user,
        }));
      } else {
        state.users = users;
      }

      if (state.selected) {
        state.selected = state.users.find(
          user => user.id === state.selected.id,
        );
      }
    },
  },
});

export const { selectUser, updateUsers } = actions;

export default reducer;
