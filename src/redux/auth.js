import { createSlice } from 'redux-starter-kit';

const { actions, reducer } = createSlice({
  initialState: {
    loading: true,
    user: null,
    token: undefined,
  },
  reducers: {
    setToken(state, { payload: token }) {
      state.loading = false;
      state.token = token;

      if (token) {
        try {
          state.user = JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
          state.user = null;
        }
      } else {
        state.user = null;
      }
    },
  },
});

export const { setToken } = actions;

export default reducer;
