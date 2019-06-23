import { createReducer } from 'redux-starter-kit';

export default createReducer({ loading: true }, {
  SIGN_IN(state, action) {
    state.user = action.user;
    state.loading = false;
  },
  SIGN_OUT(state, action) {
    state.user = null;
    state.loading = false;
  },
});
