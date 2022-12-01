import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  password: string;
  loggedIn: boolean;
}

const initialState: UserState = {
  email: '',
  password: '',
  loggedIn: !(localStorage.getItem('user') == null)
};

const localStorageSlice = createSlice({
  name: 'localStorage',
  initialState,
  reducers: {
    removeLocalStorage: (state) => {
      state.loggedIn = false;
      localStorage.removeItem('user');
    },
    setLocalStorage: (state, action) => {
      state.loggedIn = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    }
  }
});

export const { removeLocalStorage, setLocalStorage } =
  localStorageSlice.actions;

export default localStorageSlice.reducer;
