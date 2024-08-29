import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import questionReducer from './questionSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    questions: questionReducer,
  },
});

export default store;
