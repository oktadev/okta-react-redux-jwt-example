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

      if (payload.token) {
        try {
          state.user = JSON.parse(atob(payload.token.split('.')[1]));
        } catch (error) {
          state.user = null;
        }
      } else {
        state.user = null;
      }
    },
  },
});

export const { setAuth } = actions;

export default reducer;
