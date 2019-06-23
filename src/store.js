import { configureStore } from 'redux-starter-kit';
import users from './redux/users';
import auth from './redux/auth';

export default configureStore({
  reducer: {
    users,
    auth,
  },
});
