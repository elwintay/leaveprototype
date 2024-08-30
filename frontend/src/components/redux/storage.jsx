import { configureStore } from '@reduxjs/toolkit'
import leaveReducer from './leaveSlice';
import userReducer from './userSlice';
import loginReducer from './loginSlice';

export default configureStore({
  reducer: {
    // Register reducers here
    leave: leaveReducer,
    user: userReducer,
    login: loginReducer
  }
})