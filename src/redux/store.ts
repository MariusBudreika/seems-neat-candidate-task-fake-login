import { configureStore } from '@reduxjs/toolkit';
import localStorageReducer from './slices/localStorage';

const store = configureStore({
  reducer: {
    localStorage: localStorageReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
