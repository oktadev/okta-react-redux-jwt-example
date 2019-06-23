import { createSlice } from 'redux-starter-kit';
import faker from 'faker';

const generateUsers = () => [...new Array(1000)].map(
  () => faker.helpers.userCard()
);

const { reducer } = createSlice({
  slice: 'users',
  initialState: {
    users: generateUsers(),
  },
});

export default reducer;
