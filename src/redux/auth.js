import { createSlice } from 'redux-starter-kit';

const { actions, reducer } = createSlice({
  initialState: {
    loading: true,
    user: null,
    token: undefined,
  },
  reducers: {
    setAuth(state, { payload }) {
      state.loading = false;
      state.token = payload.token;
      state.user = payload.user;
    },
  },
});

export const { setAuth } = actions;

export default reducer;
