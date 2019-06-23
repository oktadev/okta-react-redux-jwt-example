import { createSlice } from 'redux-starter-kit';

const { actions, reducer } = createSlice({
  slice: 'auth',
  initialState: { loading: true, user: null },
  reducers: {
    signIn(state, user) {
      state.user = user;
      state.loading = false;
    },
    signOut(state) {
      state.user = null;
      state.loading = false;
    },
  },
});

export const { signIn, signOut } = actions;

export default reducer;
